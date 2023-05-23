import { FC } from "react"
import cl from './Videoplayer.module.scss'
import { IVideoplayer } from "./video.interface"
import { useVideo } from "./useVideo"
import { useAuth } from "@/hooks/useAuth"
import cn from 'classnames'
import MaterialIcon from "../MaterialIcon"
import AuthPlaceholder from "./AuthPlaceholder/AuthPlaceholder"

const Videoplayer: FC<IVideoplayer> = ({slug, videoSource}) => {

	const {videoRef, actions, video} = useVideo()
	const {user} = useAuth()

	return (
		<div
			className={cn(cl.wrapper, {
				'h-96': !user,
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

							<button
								onClick={actions.toggleVideo}
								className={cl.playButton}
							>
								<MaterialIcon
									name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
								/>
							</button>

							<button onClick={actions.forward}>
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

export default Videoplayer