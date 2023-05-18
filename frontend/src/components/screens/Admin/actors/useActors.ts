import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/components/UI/AdminTable/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { ActorService } from '@/services/actor.service'

import { toastrError } from '@/utils/toastr.error'

import { getAdminUrl } from '@/configs/url.config'

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['actors-list', debouncedSearch],
		() => ActorService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(actor): ITableItem => ({
						_id: actor._id,
						editUrl: getAdminUrl(`actors/edit/${actor._id}`),
						items: [actor.name, actor.slug]
					})
				),
			onError: (error) => {
				toastrError(error, 'Movie list')
			}
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(e.target.value)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete-actor',
		(actorId: string) => ActorService.deleteActor(actorId),
		{
			onError: (error) => {
				toastrError(error, 'Delete actor')
			},
			onSuccess: () => {
				toastr.success('Delete actor', 'actor successfully deleted')
				queryData.refetch()
			}
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync
		}),
		[queryData, searchTerm, deleteAsync]
	)
}
