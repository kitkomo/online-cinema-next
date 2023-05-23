import { IMoviePage } from 'pages/movie/[slug]'
import { FC } from 'react'

import Banner from '@/components/UI/Banner/Banner'
import Gallery from '@/components/UI/Gallery/Gallery'
import SubHeading from '@/components/UI/heading/SubHeading'

import Meta from '@/utils/meta/Meta'
import Content from './Content/Content'
import dynamic from 'next/dynamic'
import { useUpdateCountOpened } from './useUpdateCountOpened'

const DynamicPlayer = dynamic(() => import('@/components/UI/Videoplayer/Videoplayer'), {
	ssr: false
})
const DynamiRating = dynamic(() => import('./RateMovie/RateMovie'), {
	ssr: false
})

const Movie: FC<IMoviePage> = ({ simularMovies, movie }) => {
	useUpdateCountOpened(movie.slug)
	return (
		<Meta title={movie.title} description={`Watch ${movie.title}`}>
			<Banner imagePath={movie.bigPoster} Detail={() => <Content movie={movie}/>} />
			<DynamicPlayer slug={movie.slug} videoSource={movie.videoUrl}/>
			<div className="mt-12">
				<SubHeading title="Similar" />
				<Gallery items={simularMovies} />
			</div>
			<DynamiRating slug={movie.slug} id={movie._id}/>
		</Meta>
	)
}

export default Movie
