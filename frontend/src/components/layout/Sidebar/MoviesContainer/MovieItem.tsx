import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'

import { getGenresListEach } from '@/utils/movie/getGenresList'

import { getGenreUrl, getMovieUrl } from '@/configs/url.config'

import cl from './MovieList.module.scss'
import { IWidgetMovie } from './movie.types'

const MovieItem: FC<{ movie: IWidgetMovie }> = ({ movie }) => {
	return (
		<div className={cl.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<Image
					alt={movie.title}
					width={65}
					height={97}
					src={movie.poster}
					draggable={false}
					priority
				/>
			</Link>
			<div className={cl.info}>
				<div>
					<div className={cl.title}>{movie.title}</div>
					<div className={cl.genres}>
						{movie.genres.map(({ slug, name, _id }, idx) => (
							<Link key={_id} href={getGenreUrl(slug)}>
								{getGenresListEach(idx, movie.genres.length, name)}
							</Link>
						))}
					</div>
				</div>
				<div className={cl.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
