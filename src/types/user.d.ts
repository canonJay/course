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

interface userAuthResponse {
	name: string
	surname: string
	patronymic: string
	role: string
	email: string
	phone: string
	telegramTag: string
	status: number
	Certs: [[]]
	user_courses: ICourse[]
}

interface ICourse {
	course_id: number
	status: number
	name_ru: string
	name_en: string | null
	name_de: string | null
	description_ru: string | null
	description_en: string | null
	description_de: string | null
	mainImage: string
	courseDuration: number
	rate: null
	landingLink: string
	taskNumber: number
	taskNumberResolved: number
}
