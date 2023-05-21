import { FC } from 'react'

import { IGalleryItem } from './gallery.interface'
import GalleryItem from './GalleryItem'

import cl from './Gallery.module.scss'

const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	return (
		<div className={cl.gallery}>
			{items.map(item => (
				<GalleryItem key={item.link} item={item} variant='vertical' />
			))}
		</div>
	)
}

export default Gallery
