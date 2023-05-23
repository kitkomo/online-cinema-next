import { RatingService } from "@/services/rating.service"
import { toastrError } from "@/utils/toastr.error"
import { useState } from "react"
import { SubmitHandler } from "react-hook-form"
import { useMutation, useQuery } from "react-query"
import { toastr } from "react-redux-toastr"

export const useRateMovie = (movieId: string) => {
	const [rating, setRating] = useState(0)
	const [isSended, setIsSended] = useState(false)


	const { refetch } = useQuery(
		['movie-movie-rating', movieId],
		() => RatingService.getByUserMovie(movieId),
		{
			onSuccess({ data }) {
				setRating(data)
			},
			onError(error) {
				toastrError(error, 'Get rating')
			},
			enabled: !!movieId
		}
	)

	const { mutateAsync } = useMutation(
		'set-rating-movie',
		({value}: {value: number}) => RatingService.setRating(movieId, value),
		{
			onSuccess() {
				toastr.success('rate movie', 'Thanks for rating a movie!')
				setIsSended(true)
				refetch()
				setTimeout(() => {
					setIsSended(false)
				}, 2400)
			},
			onError(error) {
				toastrError(error, 'Rate movie')
			}
		}
	)

	const handleClick = async (nextValue: number) => {
		setRating(nextValue)
		await mutateAsync({value: nextValue})
	}

	return {
		isSended,
		rating,
		handleClick
	}
}	