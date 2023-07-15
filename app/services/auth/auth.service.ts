import { axiosClassic } from 'api/interceptors'

import { getAuthUrl } from '@/config/api.config'

import { IAuthResponse } from '@/store/user/user.interface'

import { removeTokensStorage, saveToStorage } from './auth.helper'
import Cookies from 'js-cookie'

export const AuthService = {
	register: async (email: string, password: string) => {
		const { data } = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/register'),
			{ email, password }
		)
		if (data.accessToken) saveToStorage(data)
		return data
	},
	login: async (email: string, password: string) => {
		const { data } = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/login'),
			{ email, password }
		)
		
		if (data.accessToken) saveToStorage(data)
		return data
	},
	logout: () => {
		removeTokensStorage()
		localStorage.removeItem('user')
	},

	getRefreshToken: async () => {
		const refreshToken = Cookies.get('refreshToken')
		
		const { data } = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/login/access-token'),
			{ refreshToken }
		)

		if (data.accessToken) saveToStorage(data)
		return data
	},
}
