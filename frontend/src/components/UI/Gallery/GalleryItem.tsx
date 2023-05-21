import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import cl from './Gallery.module.scss'
import { IGalleryItemProps } from './gallery.interface'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<Link href={item.link} className={cn(cl.item, {
					[cl.withText]: item.content,
					[cl.horizontal]: variant === 'horizontal',
					[cl.vertical]: variant === 'vertical',
				})}>
				
	
				<Image
					alt={item.name}
					src={item.posterPath}
					draggable={false}
					priority
				/>
				{item.content && (
					<div className={cl.content}>
						<div className={cl.title}>{item.content.title}</div>
						{item.content.subTitle && (
							<div className={cl.subTitle}> {item.content.subTitle}</div>
						)}
					</div>
				)}
		
		</Link>
	)
}

export default GalleryItem
