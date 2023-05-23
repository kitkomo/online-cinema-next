import { FC } from 'react'
import cl from './Banner.module.scss'
import Image from 'next/image'

interface IBanner {
	imagePath: string
	Detail?: FC | null
}

const Banner: FC<IBanner> = ({imagePath, Detail}) => {
	return (
			<div className={cl.banner}>
			<Image
				alt=""
				src={imagePath}
				draggable={false}
				layout="fill"
				className="image-like-bg object-top"
				unoptimized
				priority
			/>
			{Detail && <Detail />}
		</div>
	)
}

export default Banner