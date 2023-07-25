import axios, { axiosClassic } from 'api/interceptors'

import { IGenreEdit } from '@/components/screens/admin/edit/genre/genre-edit.interface'

import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '@/config/api.config'

export const GenreService = {
	getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	getPopular() {
		return axiosClassic.get<IGenre[]>(getGenresUrl('/popular'))
	},
	getById(id: string) {
		return axios.get<IGenreEdit>(getGenresUrl(`/${id}`))
	},
	create() {
		return axios.post<string>(getGenresUrl(``))
	},
	delete(id: string) {
		return axios.delete<string>(getGenresUrl(`/${id}`))
	},
	update(id: string, data: IGenreEdit) {
		return axios.put<string>(getGenresUrl(`/${id}`), data)
	},
}
