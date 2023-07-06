// register
import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from 'api/api.helpers'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '@/services/auth/auth.service'

import { toastError } from '@/utils/toast-error'

import { IAuthResponse, IEmailPassword } from './user.interface'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const userResponse = await AuthService.register(email, password)
			toastr.success('Registration', 'Completed successfully')
			return userResponse
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

// login
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const userResponse = await AuthService.login(email, password)
			toastr.success('Login', 'Completed successfully')
			return userResponse
		} catch (error) {
			console.log(error)
			toastError(error);
			return thunkApi.rejectWithValue(error)
		}
	}
)

// logout
export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
	AuthService.logout()
	toastr.success('Logout', 'Completed successfully')
})

// checkAuth
export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, { dispatch, rejectWithValue }) => {
		try {
			const userResponse = await AuthService.getRefreshToken()
			return userResponse
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error('Logout', 'Please login again')
				dispatch(logout())
			}			
			toastError(error)

			return rejectWithValue(error)
		}
	}
)
