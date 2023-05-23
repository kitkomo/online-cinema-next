import cn from 'classnames'
import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { MaterialIcon } from '../icons/MaterialIcon'

import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder'
import cl from './VideoPlayer.module.scss'
import { useVideo } from './useVideo'
import { IVideoPlayer } from './video.types'

const VideoPlayer: FC<IVideoPlayer> = ({ videoSource, slug }) => {
	const { actions, videoRef, video } = useVideo()
	const { user } = useAuth()

	return (
		<div
			className={cn(cl.wrapper, {
				'h-96': !user
			})}
		>
			{user ? (
				<>
					<video
						ref={videoRef}
						className={cl.video}
						src={`${videoSource}#t=8`}
						preload="metadata"
					/>

					<div className={cl.progressBarContainer}>
						<div
							style={{ width: `${video.progress}%` }}
							className={cl.progressBar}
						/>
					</div>

					<div className={cl.controls}>
						<div>
							<button onClick={actions.revert}>
								<MaterialIcon name="MdHistory" />
							</button>

							<button onClick={actions.toggleVideo} className={cl.playButton}>
								<MaterialIcon
									name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
								/>
							</button>

							<button onClick={actions.fastForward}>
								<MaterialIcon name="MdUpdate" />
							</button>

							<div className={cl.timeControls}>
								<p className={cl.controlsTime}>
									{Math.floor(video.currentTime / 60) +
										':' +
										('0' + Math.floor(video.currentTime % 60)).slice(-2)}
								</p>
								<p> / </p>
								<p className={cl.controlsTime}>
									{Math.floor(video.videoTime / 60) +
										':' +
										('0' + Math.floor(video.videoTime % 60)).slice(-2)}
								</p>
							</div>
						</div>

						<div>
							<button onClick={actions.fullScreen}>
								<MaterialIcon name="MdFullscreen" />
							</button>
						</div>
					</div>
				</>
			) : (
				<AuthPlaceholder slug={slug} />
			)}
		</div>
	)
}

// If you wanna add change quality buttons
//kmoskwiak.github.io/videojs-resolution-switcher/
//https://stackoverflow.com/questions/38626993/change-video-quality-with-sources-pointing-to-different-quality-versions

export default VideoPlayer
