import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import { getMovieUrl } from '@/configs/url.config'

import cl from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<ul className={cl.list}>
			{movies.length ? (
				movies.map((item) => (
					<li key={item._id}>
						<Link href={getMovieUrl(item.slug)}>
							<Image
								src={item.poster}
								width={50}
								height={50}
								alt={item.title}
								className="object-cover object-top"
								draggable={false}
							/>
							<span>{item.title}</span>
						</Link>
					</li>
				))
			) : (
				<li className="text-white text-center my-4">Movies not found</li>
			)}
		</ul>
	)
}

export default SearchList
