import axios from 'axios'
import Cookies from 'js-cookie'

import { removeTokensStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

import { API_URL } from '@/config/api.config'

import { errorCatch, getContentType } from './api.helpers'

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
})

const instance = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
})

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken')
	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})

instance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config

		if (
			(errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided' ||
				error.response.status === 401) &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getRefreshToken()
				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeTokensStorage()
			}
		}
		throw error
	}
)

export default instance