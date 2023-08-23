import axios, { axiosClassic } from 'api/interceptors'

import { IActorEdit } from '@/components/screens/admin/edit/actor/actor-edit.interface'

import { IActor } from '@/shared/types/movie.types'

import { getActorsUrl } from '@/config/api.config'

export const ActorService = {
	getAll: (searchTerm?: string) =>
		axiosClassic.get<IActor[]>(getActorsUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		}),
	delete: (id: string) => axios.delete<string>(getActorsUrl(`/${id}`)),
	getById(id: string) {
		return axios.get<IActorEdit>(getActorsUrl(`/${id}`))
	},
	getBySlug(slug: string) {
		return axios.get<IActor>(getActorsUrl(`/by-slug/${slug}`))
	},
	update(id: string, data: IActorEdit) {
		return axios.put<string>(getActorsUrl(`/${id}`), data)
	},
	create() {
		return axios.post<string>(getActorsUrl('/'))
	},
}
