import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ActorService } from '@/services/actor.service'

import { getKeys } from '@/utils/objects/getKeys'
import { toastrError } from '@/utils/toastr.error'

import { getAdminUrl } from '@/configs/url.config'

import { IActorEditInput } from './actor-edit.interface'

export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
	const { push, query } = useRouter()
	const actorId = String(query.id)
	const { isLoading } = useQuery(
		['actor', actorId],
		() => ActorService.getbyId(actorId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => setValue(key, data[key]))
			},
			onError(error) {
				toastrError(error, 'Get actor')
			},
			enabled: !!query.id
		}
	)

	const { mutateAsync } = useMutation(
		'update-actor',
		(data: IActorEditInput) => ActorService.updateActor(actorId, data),
		{
			onSuccess() {
				toastr.success('Update actor', 'update was succesful')
				push(getAdminUrl('actors'))
			},
			onError(error) {
				toastrError(error, 'Update actor')
			}
		}
	)

	const onSubmit: SubmitHandler<IActorEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return {onSubmit, isLoading}
}
