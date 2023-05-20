import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/components/UI/AdminTable/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { MovieService } from '@/services/movie.service'

import { convertMongoDate } from '@/utils/date/convertMongoDate'
import { toastrError } from '@/utils/toastr.error'

import { getAdminUrl } from '@/configs/url.config'
import { getGenresList } from '@/utils/movie/getGenresListEach'
import { useRouter } from 'next/router'

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const {push} = useRouter()

	const queryData = useQuery(
		['movies-list', debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(movie): ITableItem => ({
						_id: movie._id,
						editUrl: `movie/edit/${movie._id}`,
						items: [movie.title, getGenresList(movie.genres),String(movie.rating)]
					})
				),
			onError: (error) => {
				toastrError(error, 'Movie list')
			}
		}
	)

	const { mutateAsync: createAsync } = useMutation(
		'create-genre',
		() => MovieService.createMovie(),
		{
			onError: (error) => {
				toastrError(error, 'Create genre')
			},
			onSuccess: ({data: _id}) => {
				toastr.success('Create movie', 'movie successfully created')
				push(`movie/edit/${_id}`)
			}
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(e.target.value)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete-movie',
		(userId: string) => MovieService.deleteMovie(userId),
		{
			onError: (error) => {
				toastrError(error, 'Delete movie')
			},
			onSuccess: () => {
				toastr.success('Delete movie', 'movie successfully deleted')
				queryData.refetch()
			}
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync
		}),
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}
