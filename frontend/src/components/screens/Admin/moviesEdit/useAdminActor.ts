import { useQuery } from 'react-query'

import { IOption } from '@/components/UI/Select/select.interface'

import { ActorService } from '@/services/actor.service'

import { toastrError } from '@/utils/toastr.error'

export const useAdminActor = () => {
	const queryData = useQuery('list-of-actors', () => ActorService.getAll(), {
		select: ({ data }) => {
			return data.map(
				(actor): IOption => ({
					label: actor.name,
					value: actor._id
				})
			)
		},
		onError: (error) => {
			toastrError(error, 'Get actors')
		}
	})

	return queryData
}
