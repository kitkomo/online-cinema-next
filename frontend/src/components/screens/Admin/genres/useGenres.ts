import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/components/UI/AdminTable/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { GenreService } from '@/services/genre.service'

import { toastrError } from '@/utils/toastr.error'

import { getAdminUrl } from '@/configs/url.config'
import { useRouter } from 'next/router'

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)
const {push} = useRouter()
	const queryData = useQuery(
		['genres-list', debouncedSearch],
		() => GenreService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(genre): ITableItem => ({
						_id: genre._id,
						editUrl: `genre/edit/${genre._id}`,
						items: [genre.name, genre.slug]
					})
				),
			onError: (error) => {
				toastrError(error, 'Movie list')
			}
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(e.target.value)

	const { mutateAsync: createAsync } = useMutation(
		'create-genre',
		() => GenreService.createGenre(),
		{
			onError: (error) => {
				toastrError(error, 'Create genre')
			},
			onSuccess: ({data: _id}) => {
				toastr.success('Create genre', 'genre successfully created')
				push(`genre/edit/${_id}`)
			}
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete-genre',
		(genreId: string) => GenreService.deleteGenre(genreId),
		{
			onError: (error) => {
				toastrError(error, 'Delete genre')
			},
			onSuccess: () => {
				toastr.success('Delete genre', 'genre successfully deleted')
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
