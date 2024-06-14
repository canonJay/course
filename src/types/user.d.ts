interface userRegisterFormData {
	email: string
	password: string
	name?: string
	surname?: string
	patronymic?: string
	phone?: string
	telegramTag?: string
}

interface userRegisterResponse {
	message: string
	user_id: number
	token: string
}

interface userLoginFormData {
	email: string
	password: string
}

interface userLoginResponse {
	user_role: string
	user_id: number
	token: string
}
