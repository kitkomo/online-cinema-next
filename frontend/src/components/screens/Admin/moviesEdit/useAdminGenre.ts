import { useQuery } from 'react-query'

import { IOption } from '@/components/UI/Select/select.interface'

import { GenreService } from '@/services/genre.service'

import { toastrError } from '@/utils/toastr.error'

export const useAdminGenre = () => {
	const queryData = useQuery('list-of-genres-admin', () => GenreService.getAll(), {
		select: ({ data }) => {
			return data.map(
				(genre): IOption => ({
					label: genre.name,
					value: genre._id
				})
			)
		
		},
		onError: (error) => {
			toastrError(error, 'Get genres')
		}
	})

	return queryData
}
