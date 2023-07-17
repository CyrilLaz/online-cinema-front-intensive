import axios, { axiosClassic } from 'api/interceptors'

import { IActor } from '@/shared/types/movie.types'

import { getActorsUrl } from '@/config/api.config'

export const ActorService = {
	getAll: (searchTerm?: string) =>
		axiosClassic.get<IActor[]>(getActorsUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		}),
	delete: (id: string) => axios.delete<string>(getActorsUrl(`/${id}`)),
}
