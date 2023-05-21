import { errorCatch } from '@/api/api.helpers'
import { IGalleryItem } from '@/components/UI/Gallery/gallery.interface'
import { ISlide } from '@/components/UI/Slider/slider.interface'
import Home from '@/components/screens/Home/Home'

import { IHome } from '@/components/screens/Home/home.interface'
import { getActorUrl, getMovieUrl } from '@/configs/url.config'
import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'
import { getGenresList } from '@/utils/movie/getGenresListEach'
import { GetStaticProps, NextPage } from 'next'

const HomePage: NextPage<IHome> = ({actors, slides, trendingMovies}) => {
	return (
		<Home actors={actors} slides={slides} trendingMovies={trendingMovies}/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		const { data: dataActors } = await ActorService.getAll()
		const dataTrendingMovies = await MovieService.getMostPopular()

		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			subTitle: getGenresList(m.genres),
			title: m.title,
			bigPoster: m.bigPoster,
		}))

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((a) => ({
			name: a.name,
			posterPath: a.photo,
			link: getActorUrl(a.slug),
			content: {
				title: a.name,
				subTitle: `+${a.countMovies} movies`,
			},
		}))

		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				link: getMovieUrl(m.slug),
			}))

		return {
			props: {
				actors,
				slides,
				trendingMovies,
			} as IHome,
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				actors: [],
				slides: [],
				trendingMovies: [],
			} as IHome,
		}
	}
}

export default HomePage