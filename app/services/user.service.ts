import { instance as axios } from 'api/interceptors'

import { TypeUser } from '@/shared/types/user.types'

import { getUsersUrl } from '@/config/api.config'

export const UserService = {
	getAll: (searchTerm?: string) =>
		axios.get<TypeUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		}),
	deleteUser: (id: string) => axios.delete<string>(getUsersUrl(`/${id}`)),
}
