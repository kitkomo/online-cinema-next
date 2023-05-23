import { FC } from 'react'

import GalleryItem from '@/components/ui/gallery/GalleryItem'
import Description from '@/components/ui/heading/Description'
import Heading from '@/components/ui/heading/Heading'

import { Meta } from '@/utils/meta'

import { getMovieUrl } from '@/configs/url.config'

import cl from './Catalog.module.scss'
import { ICatalog } from './catalog.types'

const Catalog: FC<ICatalog> = ({ title, description, movies }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={cl.heading} />
			{description && (
				<Description text={description} className={cl.description} />
			)}

			<section className={cl.movies}>
				{movies.map((movie) => (
					<GalleryItem
						key={movie._id}
						variant="horizontal"
						item={{
							name: movie.title,
							posterPath: movie.bigPoster,
							url: getMovieUrl(movie.slug),
							content: {
								title: movie.title
							}
						}}
					/>
				))}
			</section>

			{/* <div className="text-center">
				<button className={cl.button}>Load more</button>
			</div> */}
		</Meta>
	)
}

export default Catalog
