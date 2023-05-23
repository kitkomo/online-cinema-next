import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Catalog from '@/components/UI/CatalogMovies/Catalog'

import { IGenre, IMovie } from '@/shared/types/movie.types'

import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'


interface IGenrePage {
	movies: IMovie[]
	genre: IGenre
}

const GenrePage: NextPage<IGenrePage> = ({ movies, genre }) => {
	
	return (
	
	<Catalog
			movies={movies || []}
			title={genre.name}
			description={genre.description}
		/> 
	
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const {data: genres} = await GenreService.getAll()
		const paths = genres.map(g => ({
			params: {slug: g.slug}
		}))
		return {
			paths: paths,
			fallback: 'blocking'
		}
	} catch (error) {
		return {
			paths: [],
			fallback: false
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: genre } = await GenreService.getBySlug(String(params?.slug))
		const { data: movies } = await MovieService.getByGenres([genre._id])
		return {
			props: { movies, genre }
		}
	} catch (error) {
		return {
			notFound: true
		}
	}
}

export default GenrePage
