import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import cl from './Slider.module.scss'
import { ISlide } from './slider.interface'


interface ISlideItem {
	slide: ISlide
	buttonTitle?: string
}

const SlideItem: FC<ISlideItem> = ({ slide, buttonTitle = 'Watch' }) => {
	const { push } = useRouter()

	return (
		<div className={cl.slide}>
			{slide.bigPoster && (
				<Image
					layout="fill"
					className={cl.image}
					src={slide.bigPoster}
					alt={slide.title}
					draggable={false}
					unoptimized
					priority
				/>
			)}
			<div className={cl.content}>
				<div className={cl.heading}>{slide.title}</div>
				<div className={cl.subHeading}>{slide.subTitle}</div>
				<button className={cl.button} onClick={() => push(slide.link)}>
					{buttonTitle}
				</button>
			</div>
		</div>
	)
}

export default SlideItem
