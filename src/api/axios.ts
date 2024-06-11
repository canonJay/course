import { API_URL } from '@/constants/api.constants'

import axios, { CreateAxiosDefaults } from 'axios'
import { getAuthToken, getContentType } from './api.helper'

export const axiosOptions: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: getContentType(),
	withCredentials: true,
}

export const axiosInstanceNoAuth = axios.create(axiosOptions)

export const axiosInstanceWithAuth = axios.create(axiosOptions)

axiosInstanceWithAuth.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${getAuthToken()}`

	return config
})
