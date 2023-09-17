export interface IVideoPlayer {
	videoSource: string
	slug: string
}

export interface IVideoElement extends HTMLVideoElement {
	mozRequestFullScreen?: () => void
	webkitRequestFullscreen?: () => void
	msRequestFullscreen?: () => void
}
