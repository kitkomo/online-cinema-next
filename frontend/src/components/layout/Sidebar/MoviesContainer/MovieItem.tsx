import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import { getGenresListEach } from '@/utils/movie/getGenresListEach'

import { getGenreUrl, getMovieUrl } from '@/configs/url.config'

import cl from './MovieList.module.scss'
import MaterialIcon from '@/components/UI/MaterialIcon'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={cl.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<Image
					src={movie.poster}
					width={65}
					height={97}
					alt={movie.title}
					priority
					draggable={false}
				/>
			</Link>
			<div className={cl.info}>
				<div>
					<span>{movie.title}</span>
					<div className={cl.genres}>
						{movie.genres.map((genre, idx) => (
							<Link key={genre._id} href={getGenreUrl(genre.slug)}>
								{getGenresListEach(idx, movie.genres.length, genre.name)}
							</Link>
						))}
					</div>
				</div>
				<div className={cl.rating}>
					<MaterialIcon name='MdStarRate'/>
					<span>{movie.rating.toFixed()}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
