import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { GenreService } from '@/services/genre.service'

import { getKeys } from '@/utils/objects/getKeys'
import { toastrError } from '@/utils/toastr.error'

import { getAdminUrl } from '@/configs/url.config'

import { IGenreEditInput } from './genre-edit.interface'

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEditInput>) => {
	const { push, query } = useRouter()
	const genreId = String(query.id)
	const { isLoading } = useQuery(
		['genre', genreId],
		() => GenreService.getbyId(genreId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => setValue(key, data[key]))
			},
			onError(error) {
				toastrError(error, 'Get genre')
			},
			enabled: !!query.id
		}
	)

	const { mutateAsync } = useMutation(
		'update-genre',
		(data: IGenreEditInput) => GenreService.updateGenre(genreId, data),
		{
			onSuccess() {
				toastr.success('Update genre', 'update was succesful')
				push('/manage/genres')
			},
			onError(error) {
				toastrError(error, 'Update genre')
			}
		}
	)

	const onSubmit: SubmitHandler<IGenreEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return {onSubmit, isLoading}
}
