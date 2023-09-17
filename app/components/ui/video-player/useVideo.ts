import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { IVideoElement } from './video.interface'

export const useVideo = () => {
	const videoRef = useRef<IVideoElement>(null)

	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [videoTime, setVideoTime] = useState(0)
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		if (videoRef.current?.duration) setVideoTime(videoRef.current.duration)
	}, [videoRef.current?.duration])

	const toggleVideo = useCallback(() => {
		if (!isPlaying) {
			videoRef.current?.play()
			setIsPlaying(true)
		} else {
			videoRef.current?.pause()
			setIsPlaying(false)
		}
	}, [isPlaying])

	const forward = () => {
		if (videoRef.current) videoRef.current.currentTime += 10
	}
	const backward = () => {
		if (videoRef.current) videoRef.current.currentTime -= 10
	}

	const fullscreen = () => {
		const video = videoRef.current

		if (!video) return

		if (video.requestFullscreen) {
			video.requestFullscreen()
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen()
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen()
		}
	}

	useEffect(() => {
		const video = videoRef.current

		if (!video) return

		const updateProgress = () => {
			setCurrentTime(video.currentTime)
			setProgress((video.currentTime / videoTime) * 100)
		}

		video.addEventListener('timeupdate', updateProgress)
		return () => {
			video.removeEventListener('timeupdate', updateProgress)
		}
	}, [videoTime])

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowRight':
					forward()
					break

				case 'ArrowLeft':
					backward()
					break

				case ' ': {
					e.preventDefault()
					toggleVideo()
					break
				}
				case 'а':
					fullscreen()
					break

				default:
					return
			}
		}

		document.addEventListener('keydown', handleKey)
		return () => {
			document.removeEventListener('keydown', handleKey)
		}
	}, [toggleVideo])

	return useMemo(
		() => ({
			videoRef,
			actions: { fullscreen, backward, forward, toggleVideo },
			video: { isPlaying, currentTime, progress, videoTime },
		}),
		[currentTime, isPlaying, progress, toggleVideo, videoTime]
	)
}
