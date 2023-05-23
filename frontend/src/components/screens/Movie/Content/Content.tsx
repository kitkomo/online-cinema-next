import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import { getActorUrl, getGenreUrl } from '@/configs/url.config'

import cl from './Content.module.scss'
import ContentList from './ContentList/ContentList'
import MaterialIcon from '@/components/UI/MaterialIcon'

const Content: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={cl.content}>
			<h1>{movie.title}</h1>
			<div className={cl.details}>
				<span>{movie.parameters.year} · </span>
				<span>{movie.parameters.country} · </span>
				<span>{movie.parameters.duration} min.</span>
			</div>
			<ContentList
				name="Genres"
				links={movie.genres.slice(0, 3).map((g) => ({
					_id: g._id,
					link: getGenreUrl(g.slug),
					title: g.name
				}))}
			/>
			<ContentList
				name="Actors"
				links={movie.actors.slice(0, 3).map((a) => ({
					_id: a._id,
					link: getActorUrl(a.slug),
					title: a.name
				}))}
			/>
			<div className={cl.rating}>
				<MaterialIcon name='MdStarRate'/>
				<span>{movie.rating.toFixed(1)}</span>
			</div>
		</div>
	)
}

export default Content
