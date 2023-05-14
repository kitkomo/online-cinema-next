import { axiosClassic } from 'api/interceptors'

import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '@/configs/api.config'

export const GenreService = {
	async getPopularGenres(limit = 4) {
		return axiosClassic.get<IGenre[]>(getGenresUrl('/popular'))
	}
}
