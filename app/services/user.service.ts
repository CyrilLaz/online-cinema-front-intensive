import axios from 'api/interceptors'

import { IProfileInput } from '@/components/screens/profile/profile.interface'

import { TypeUser } from '@/shared/types/user.types'

import { getUsersUrl } from '@/config/api.config'

export const UserService = {
	getAll: (searchTerm?: string) =>
		axios.get<TypeUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		}),
	getProfile: () => axios.get<TypeUser>(getUsersUrl('/profile')),
	getById: (id: string) => axios.get<TypeUser>(getUsersUrl(`/${id}`)),
	update: (id: string, data: IProfileInput) =>
		axios.put<string>(getUsersUrl(`/${id}`), data),
	updateProfile: (data: IProfileInput) =>
		axios.put<string>(getUsersUrl('/profile'), data),
	deleteUser: (id: string) => axios.delete<string>(getUsersUrl(`/${id}`)),
}
