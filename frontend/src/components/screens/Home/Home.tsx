import { FC } from 'react'

import Gallery from '@/components/UI/Gallery/Gallery'
import Slider from '@/components/UI/Slider/Slider'
import Heading from '@/components/UI/heading/Heading'
import SubHeading from '@/components/UI/heading/SubHeading'

import Meta from '@/utils/meta/Meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch movies online and TV shows right from your browser"
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>
			{slides.length && <Slider slides={slides} />}
			<div className="my-10">
				<SubHeading title="Trending now" />
				{trendingMovies.length && <Gallery items={trendingMovies} /> }
			</div>
			<div className="my-10">
				<SubHeading title="Best actors" />
				{trendingMovies.length && <Gallery items={actors} /> }
			</div>
		</Meta>
	)
}

export default Home
