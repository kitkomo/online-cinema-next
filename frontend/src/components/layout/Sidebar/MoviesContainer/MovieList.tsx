import Link from 'next/link'
import { FC } from 'react'

import MovieItem from './MovieItem'
import cl from './MovieList.module.scss'
import { IMovieList } from './movie.types'

const MovieList: FC<{ list: IMovieList }> = ({
	list: { link, movies, title }
}) => {
	return (
		<div className={cl.list}>
			<div className={cl.heading}>{title}</div>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link} className={cl.button}>
				See more
			</Link>
		</div>
	)
}

export default MovieList
