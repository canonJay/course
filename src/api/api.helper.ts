import Cookies from 'js-cookie'

export const getContentType = () => ({
	'Content-Type': 'application/json',
})

export function setAuthToken(token: string, id: number) {
	Cookies.set('token', token)

	Cookies.set('id', id.toString())
}

export function getAuthToken() {
	return Cookies.get('token')
}

//TODO: refactor it

// export const errorCatch = (error: any): string => {
// 	const message = error?.response?.data?.message

// 	return message
// 		? typeof error.response.data.message === 'object'
// 			? message[0]
// 			: message
// 		: error.message
// }
