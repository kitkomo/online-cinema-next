import { FC } from 'react';
import cl from './RateMovie.module.scss'
import { useAuth } from '@/hooks/useAuth';
import { useRateMovie } from './useRateMovie';
import AuthButton from '@/components/UI/Videoplayer/AuthPlaceholder/AuthButton';
import StarRating from 'react-star-rating-component'

interface IRateMovie {
	id: string
	slug: string
}

const RateMovie: FC<IRateMovie> = ({id, slug}) => {
	const {user} = useAuth()
	const {handleClick, isSended, rating} = useRateMovie(id)

	return (
		<div className={cl.wrapper}>
			<h3>How do you like the movie?</h3>
			<p>Ratings improve recommendations</p>
			{user ? (
				<>
					{isSended ? (
						<div className={cl.thanks}>Thanks for rating!</div>
					) : (
						<StarRating
							name="star-rating"
							value={rating}
							onStarClick={handleClick}
							emptyStarColor="#4f4f4f"
						/>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default RateMovie