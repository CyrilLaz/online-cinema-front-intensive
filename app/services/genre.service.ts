import axios, { axiosClassic } from 'api/interceptors'

import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '@/config/api.config'

export const GenreService = {
	getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	
	getPopularGenre() {
		return axiosClassic.get<IGenre[]>(getGenresUrl('/popular'))
	},

	delete(id: string) {
		return axios.delete<string>(getGenresUrl(`/${id}`))
	},
}
