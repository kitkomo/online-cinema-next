import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '@/services/auth/auth.service'

import { toastrError } from '@/utils/toastr.error'

import { IAuthResponse, IEmailPassword } from './user.interface'
import { errorCatch } from 'api/api.helpers'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const res = await AuthService.register(email, password)
			toastr.success('Registration', 'Completed successfully')
			return res.data
		} catch (error) {
			toastrError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const res = await AuthService.login(email, password)
			toastr.success('Login', 'Completed successfully')
			return res.data
		} catch (error) {
			toastrError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
	await AuthService.logout()
})


export const checkAuth = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const res = await AuthService.getNewTokens()
			return res.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error('Logout', 'Your tokens are too old, please authorize again')
				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(error)
		}
	}
)