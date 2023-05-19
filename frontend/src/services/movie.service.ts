import axios, { axiosClassic } from 'api/interceptors'

import { IMovie } from '@/shared/types/movie.types'

import { getMoviesUrl } from '@/configs/api.config'
import { IMovieEditInput } from '@/components/screens/Admin/moviesEdit/movie-edit.interface'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getMostPopular() {
		const { data } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)
		return data
	},

	async getbyId(_id: string) {
		return axios.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
	},

	async updateMovie(_id: string, data: IMovieEditInput) {
		return axios.put<string>(getMoviesUrl(`/${_id}`), data)
	},

	async createMovie() {
		return axios.post<string>(getMoviesUrl('/'))
	},
	
	async deleteMovie(_id: string) {
		return axios.delete<string>(getMoviesUrl(`/${_id}`))
	}
}
