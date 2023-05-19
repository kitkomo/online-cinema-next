import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { MovieService } from '@/services/movie.service'

import { getKeys } from '@/utils/objects/getKeys'
import { toastrError } from '@/utils/toastr.error'

import { getAdminUrl } from '@/configs/url.config'

import { IMovieEditInput } from './movie-edit.interface'

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
	const { push, query } = useRouter()
	const movieId = String(query.id)
	const { isLoading } = useQuery(
		['movie', movieId],
		() => MovieService.getbyId(movieId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => setValue(key, data[key]))
			},
			onError(error) {
				toastrError(error, 'Get movie')
			},
			enabled: !!query.id
		}
	)

	const { mutateAsync } = useMutation(
		'update-movie',
		(data: IMovieEditInput) => MovieService.updateMovie(movieId, data),
		{
			onSuccess() {
				toastr.success('Update movie', 'update was succesful')
				push(getAdminUrl('movies'))
			},
			onError(error) {
				toastrError(error, 'Update movie')
			}
		}
	)

	const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return {onSubmit, isLoading}
}
