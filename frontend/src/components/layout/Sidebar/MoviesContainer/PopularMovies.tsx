import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/UI/SkeletonLoader'

import { MovieService } from '@/services/movie.service'

import MovieList from './MovieList'

const PopularMovies: FC = () => {
	const { isLoading, data } = useQuery('popular-movies-sidebar', () =>
		MovieService.getMostPopular()
	)

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList link="/trending" movies={data || []} title="Popular movies" />
	)
}

export default PopularMovies
