import { setAuthToken } from '@/api/api.helper'
import { axiosInstanceNoAuth } from '@/api/axios'
import { API_URL } from '@/constants/api.constants'

class UserServices {
	constructor() {}

	private USER_PREFIX = 'user/'

	async registerGlobal(FormData: userRegisterFormData) {
		const res = await axiosInstanceNoAuth.post<userRegisterResponse>(
			`${API_URL}/register/global`,
			FormData
		)

		setAuthToken(res.data.token)

		return res.data
	}

	async login(FormData: userLoginFormData) {
		const res = await axiosInstanceNoAuth.post<userLoginResponse>(
			`${API_URL}/login`,
			FormData
		)

		setAuthToken(res.data.token)

		return res.data
	}
}

export const userService = new UserServices()
