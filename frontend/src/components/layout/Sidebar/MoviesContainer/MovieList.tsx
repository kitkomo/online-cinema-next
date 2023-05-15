import { FC } from 'react'

import MovieItem from './MovieItem'
import cl from './MovieList.module.scss'
import { IMovieList } from './movie-list.interface'
import Link from 'next/link'

const MovieList: FC<IMovieList> = ({ link, title, movies }) => {
	return (
		<div className={cl.list}>
			<span className={cl.heading}>{title}</span>
			<ul>
				{movies.map((movie) => (
					<MovieItem key={movie._id} movie={movie} />
				))}
				<Link href={link} className={cl.button}>
					See more
				</Link>
			</ul>
		</div>
	)
}

export default MovieList
