import axios, { axiosClassic } from 'api/interceptors'

import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '@/configs/api.config'
import { IGenreEditInput } from '@/components/screens/Admin/genresEdit/genre-edit.interface'

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

	async getbyId(_id: string) {
		return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
	},
	
	async deleteGenre(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`))
	},

	async updateGenre(_id: string, data: IGenreEditInput) {
		return axios.put<string>(getGenresUrl(`/${_id}`), data)
	}
}
