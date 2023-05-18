import axios, { axiosClassic } from 'api/interceptors'

import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '@/configs/api.config'

export const GenreService = {
	async getPopularGenres(limit = 4) {
		return axiosClassic.get<IGenre[]>(getGenresUrl('/popular'))
	},
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},
	
	async deleteGenre(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`))
	}
}
