import classNames from 'classnames'
import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import MaterialIcon from '../MaterialIcon'

import { AuthPlaceHolder } from './AuthPlaceHolder/AuthPlaceHolder'
import styles from './VideoPlayer.module.scss'
import { useVideo } from './useVideo'
import { IVideoPlayer } from './video.interface'

const VideoPlayer: FC<IVideoPlayer> = ({ slug, videoSource }) => {
	const { actions, video, videoRef } = useVideo()
	const { user } = useAuth()

	return (
		<div className={classNames(styles.wrapper, { 'h-96': !user })}>
			{user ? (
				<>
					<video
						ref={videoRef}
						className={styles.video}
						src={videoSource + '#t=8'}
						preload="metadata"
					/>
					<div>
						<div style={{ width: `${video.progress}%` }}></div>
					</div>
					<div>
						<div>
							<div>
								<button onClick={actions.backward}>
									<MaterialIcon name="MdHistory" />
								</button>
							</div>
							<div>
								<button onClick={actions.toggleVideo}>
									<MaterialIcon
										name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
									/>
								</button>
							</div>
							<div>
								<button onClick={actions.forward}>
									<MaterialIcon name="MdUpdate" />
								</button>
							</div>
							<div>
								<button>
									<MaterialIcon name="MdHistory" />
								</button>
							</div>

							<div>
								<p>
									{Math.floor(video.currentTime / 60) +
										':' +
										('0' + Math.floor(video.currentTime % 60)).slice(-2)}
								</p>
								<p>&nbsp;/&nbsp;</p>
								<p>
									{Math.floor(video.videoTime / 60) +
										':' +
										('0' + Math.floor(video.videoTime % 60)).slice(-2)}
								</p>
							</div>
						</div>

						<div>
							<button onClick={actions.fullscreen}>
								<MaterialIcon name="MdFullscreen" />
							</button>
						</div>
					</div>
				</>
			) : (
				<AuthPlaceHolder slug={slug} />
			)}
		</div>
	)
}
export default VideoPlayer
