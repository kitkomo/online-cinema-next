import Cookie from 'js-cookie'

import { IAuthResponse, ITokens } from '@/store/user/user.interface'

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}

export const saveTokensStorage = (data: ITokens) => {
	Cookie.set('accessToken', data.accessToken)
	Cookie.set('refreshToken', data.refreshToken)
}

export const cleanTokensStorage = () => {
	Cookie.remove('accessToken')
	Cookie.remove('refreshToken')
}

