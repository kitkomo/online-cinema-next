import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import Heading from '../heading/Heading'

import cl from './Catalog.module.scss'
import { ICatalog } from './catalog.interface'
import SubHeading from '../heading/SubHeading'
import Description from '../heading/Description'
import GalleryItem from '../Gallery/GalleryItem'
import { getMovieUrl } from '@/configs/url.config'

const Catalog: FC<ICatalog> = ({ movies, title, description }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={cl.heading} />
			{/* {<SubHeading />} */}
			{description && <Description text={description} className={cl.description}/>}

			<section className={cl.movies}>
				{movies.map(movie => <GalleryItem key={movie._id} item={{
					name: movie.title,
					link:  getMovieUrl(movie.slug),
					posterPath: movie.bigPoster,
					content: {
						title: movie.title
					}

				}} variant='horizontal'/>)}
			</section>
		</Meta>
	)
}

export default Catalog
