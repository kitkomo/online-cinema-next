import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Catalog from '@/components/UI/CatalogMovies/Catalog'

import { IActor, IMovie } from '@/shared/types/movie.types'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

interface IActorPage {
	movies: IMovie[]
	actor: IActor
}

const ActorPage: NextPage<IActorPage> = ({ movies, actor }) => {
	return <Catalog movies={movies || []} title={actor.name} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await ActorService.getAll()
		const paths = actors.map((a) => ({
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
		const { data: actor } = await ActorService.getBySlug(String(params?.slug))
		const { data: movies } = await MovieService.getByActor(actor._id)
		return {
			props: { movies, actor }
		}
	} catch (error) {
		return {
			notFound: true
		}
	}
}

export default ActorPage
