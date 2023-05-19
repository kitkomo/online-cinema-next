import axios, { axiosClassic } from 'api/interceptors'

import { IActorEditInput } from '@/components/screens/Admin/actorsEdit/actor-edit.interface'

import { IActor } from '@/shared/types/movie.types'

import { getActorsUrl } from '@/configs/api.config'

export const ActorService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getActorsUrl(''), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getbyId(_id: string) {
		return axios.get<IActorEditInput>(getActorsUrl(`/${_id}`))
	},

	async updateActor(_id: string, data: IActorEditInput) {
		return axios.put<string>(getActorsUrl(`/${_id}`), data)
	},

	async createActor() {
		return axios.post<string>(getActorsUrl('/'))
	},

	async deleteActor(_id: string) {
		return axios.delete<string>(getActorsUrl(`/${_id}`))
	}
}
