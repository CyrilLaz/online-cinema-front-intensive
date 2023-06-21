import { axiosClassic } from 'api/interceptors'

import { IMovie } from '@/shared/types/movie.types'

import { getMoviesUrl } from '@/config/api.config'

export const MovieService = {
	getMovies(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
}
