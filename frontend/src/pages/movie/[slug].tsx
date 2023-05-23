import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Catalog from '@/components/UI/CatalogMovies/Catalog'
import { IGalleryItem } from '@/components/UI/Gallery/gallery.interface'
import Movie from '@/components/screens/Movie/Movie'

import { IMovie } from '@/shared/types/movie.types'

import { MovieService } from '@/services/movie.service'

import { getMovieUrl } from '@/configs/url.config'

export interface IMoviePage {
	simularMovies: IGalleryItem[]
	movie: IMovie
}

const MoviePage: NextPage<IMoviePage> = ({ simularMovies, movie }) => {
	return <Movie simularMovies={simularMovies || []} movie={movie} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		const paths = movies.map((a) => ({
			params: { slug: a.slug }
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
		const { data: movie } = await MovieService.getBySlug(String(params?.slug))
		const { data: dataSimilarMovies } = await MovieService.getByGenres(
			movie.genres.map((g) => g._id)
		)

		const similarMovies: IGalleryItem[] = dataSimilarMovies
			.filter((m) => m._id !== movie._id)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				link: getMovieUrl(m.slug)
			}))

		return {
			props: { similarMovies, movie }
		}
	} catch (error) {
		return {
			notFound: true
		}
	}
}

export default MoviePage
