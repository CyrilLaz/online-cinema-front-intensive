import axios, { axiosClassic } from 'api/interceptors'

import { IMovieEdit } from '@/components/screens/admin/edit/movie/movie-edit.interface'

import { IMovie } from '@/shared/types/movie.types'

import { getMoviesUrl } from '@/config/api.config'

export const MovieService = {
	getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)
		return movies
	},
	async delete(id: string) {
		return await axios.delete<string>(getMoviesUrl(`/${id}`))
	},
	getById(id: string) {
		return axios.get<IMovieEdit>(getMoviesUrl(`/${id}`))
	},
	update(id: string, data: IMovieEdit) {
		return axios.put<string>(getMoviesUrl(`/${id}`), data)
	},
	create() {
		return axios.post<string>(getMoviesUrl(``))
	},
}
