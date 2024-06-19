'use server'

import { API_URL } from '@/constants/api.constants'
import { cookies } from 'next/headers'

export async function getUserSsrData(): Promise<userAuthResponse | null> {
	const id = cookies().get('id')

	const token = cookies().get('token')

	if (!id && !token) return null

	const res = await fetch(`${API_URL}/user/global/profile?user_id=${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})

	const user = res.json() as Promise<userAuthResponse>

	return user
}
