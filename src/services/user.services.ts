import { setAuthToken } from '@/api/api.helper'
import { axiosInstanceNoAuth, axiosInstanceWithAuth } from '@/api/axios'
import { API_URL } from '@/constants/api.constants'

class UserServices {
	constructor() {}

	private USER_PREFIX = 'user/'

	async registerGlobal(FormData: userRegisterFormData) {
		const res = await axiosInstanceNoAuth.post<userRegisterResponse>(
			`${API_URL}/register/global`,
			FormData
		)

		setAuthToken(res.data.token, res.data.user_id)

		return res.data
	}

	async login(FormData: userLoginFormData) {
		const res = await axiosInstanceNoAuth.post<userLoginResponse>(
			`${API_URL}/login`,
			FormData
		)

		setAuthToken(res.data.token, res.data.user_id)

		return res.data
	}

	async getAuthUser() {
		const res = await axiosInstanceWithAuth.get<userAuthResponse>(
			`${API_URL}/${
				this.USER_PREFIX
			}global/profile?user_id=${localStorage.getItem('userId')}`
		)

		return res.data
	}
}

export const userService = new UserServices()
