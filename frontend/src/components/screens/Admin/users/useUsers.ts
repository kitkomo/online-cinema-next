import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/components/UI/AdminTable/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { UserService } from '@/services/user.service'

import { convertMongoDate } from '@/utils/date/convertMongoDate'
import { toastrError } from '@/utils/toastr.error'

import { getAdminUrl } from '@/configs/url.config'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['users-list', debouncedSearch],
		() => UserService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(user): ITableItem => ({
						_id: user._id,
						editUrl: getAdminUrl(`users/edit/${user._id}`),
						items: [user.email, convertMongoDate(user.createdAt)]
					})
				),
			onError: (error) => {
				toastrError(error, 'User list')
			}
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(e.target.value)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete-user',
		(userId: string) => UserService.deleteUser(userId),
		{
			onError: (error) => {
				toastrError(error, 'Delete user')
			},
			onSuccess: () => {
				toastr.success('Delete user', 'user successfully deleted')
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
