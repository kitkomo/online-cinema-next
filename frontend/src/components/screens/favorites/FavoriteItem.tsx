import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton'

import cl from './Favorites.module.scss'
import { IFavoriteItem } from './favorites.interface'

const FavoriteItem: FC<{ item: IFavoriteItem }> = ({ item }) => {
	return (
		<div className={cl.itemWrapper}>
			<FavoriteButton movieId={item._id} />
			<Link href={item.url} className={cl.item}>
				<Image
					alt={item.name}
					src={item.posterPath}
					layout="fill"
					draggable={false}
					priority
				/>

				<div className={cl.title}>{item.title}</div>
			</Link>
		</div>
	)
}

export default FavoriteItem
