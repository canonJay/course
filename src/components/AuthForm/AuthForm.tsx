'use client'

import { LockKeyhole, Mail, Send, Smartphone, User } from 'lucide-react'
import Image from 'next/image'
import { FC, useState } from 'react'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { Input } from '../ui/input'

import 'swiper/css'
import { Label } from '../ui/label'

interface AuthFormProps {
	isLogin: boolean
}

export const AuthForm: FC<AuthFormProps> = ({ isLogin }) => {
	const [isLoginForm, setIsLoginForm] = useState<boolean>(isLogin)

	return (
		<>
			<div className='flex flex-col w-full p-8'>
				<Image src={'/logo.svg'} alt={'logo'} width={120} height={42} />

				<h2 className='text-2xl font-semibold mt-5'>
					{isLoginForm ? 'Log in to your Account' : 'Create your account'}
				</h2>

				<span className='text-sm font-medium mt-1 text-[#A7AEB8]'>
					{isLoginForm
						? 'Welcome back! Glad to see you here again!!'
						: 'Welcome to WAMOCON ACADEMY!'}
				</span>

				<form
					className='w-full flex flex-col gap-4 mt-8'
					onSubmit={e => e.preventDefault()}
				>
					{isLoginForm ? (
						<>
							<div className='w-full realtive flex items-center'>
								<Mail size={16} className='absolute left-12 text-[#A7AEB8]' />
								<Input
									className='border-[#c2d5da] pl-10 rounded-xl py-6 placeholder:text-[#A7AEB8] outline-none'
									type='email'
									placeholder='Email'
								/>
							</div>

							<div className='w-full realtive flex items-center'>
								<LockKeyhole
									size={16}
									className='absolute left-12 text-[#A7AEB8]'
								/>
								<Input
									className='border-[#c2d5da] pl-10 rounded-xl py-6 placeholder:text-[#A7AEB8] outline-none'
									type='password'
									placeholder='Password'
								/>
							</div>
						</>
					) : (
						<>
							<div className='w-full flex gap-2 flex-col lg:flex-row'>
								<div className='w-full flex flex-col gap-2'>
									<div className='w-full realtive flex items-center'>
										<User
											size={16}
											className='absolute left-12 text-[#A7AEB8]'
										/>
										<Input
											className='border-[#c2d5da] pl-10 rounded-xl py-6 placeholder:text-[#A7AEB8] outline-none'
											type='text'
											placeholder='Full name'
										/>
									</div>
									<div className='w-full realtive flex items-center'>
										<Smartphone
											size={16}
											className='absolute left-12 text-[#A7AEB8]'
										/>
										<Input
											className='border-[#c2d5da] pl-10 rounded-xl py-6 placeholder:text-[#A7AEB8] outline-none'
											type='number'
											placeholder='Phone number'
										/>
									</div>
									<div className='w-full realtive flex items-center'>
										<Mail
											size={16}
											className='absolute left-12 text-[#A7AEB8]'
										/>
										<Input
											className='border-[#c2d5da] pl-10 rounded-xl py-6 placeholder:text-[#A7AEB8] outline-none'
											type='email'
											placeholder='Email'
										/>
									</div>
								</div>
								<div className='w-full flex flex-col gap-2'>
									<div className='w-full realtive flex items-center'>
										<Send
											size={16}
											className='absolute left-12 lg:left-[465px] text-[#A7AEB8]'
										/>
										<Input
											className='border-[#c2d5da] pl-10 rounded-xl py-6 placeholder:text-[#A7AEB8] outline-none'
											type='email'
											placeholder='Telegram'
										/>
									</div>

									<div className='w-full realtive flex items-center'>
										<LockKeyhole
											size={16}
											className='absolute left-12 lg:left-[465px] text-[#A7AEB8]'
										/>
										<Input
											className='border-[#c2d5da] pl-10 rounded-xl py-6 placeholder:text-[#A7AEB8] outline-none'
											type='password'
											placeholder='Password'
										/>
									</div>
									<div className='w-full realtive flex items-center'>
										<LockKeyhole
											size={16}
											className='absolute left-12 lg:left-[465px] text-[#A7AEB8]'
										/>
										<Input
											className='border-[#c2d5da] pl-10 rounded-xl py-6 placeholder:text-[#A7AEB8] outline-none'
											type='password'
											placeholder='Retype your password'
										/>
									</div>
								</div>
							</div>
						</>
					)}
					<div className='flex justify-between'>
						<div className='flex items-center space-x-2'>
							<Checkbox id='terms' />
							<Label className='text-sm text-[#A7AEB8]' htmlFor='terms'>
								Remember me
							</Label>
						</div>

						<span className='text-sm font-medium text-primary'>
							Forgot password?
						</span>
					</div>

					<Button className='text-white font-semibold rounded-3xl'>
						Log in
					</Button>
				</form>

				<span className='text-sm w-full mt-8 text-center text-[#A7AEB8]'>
					Don't have an account?{' '}
					<Button
						variant={'link'}
						onClick={() => setIsLoginForm(!isLoginForm)}
						className='text-primary'
					>
						Create an account
					</Button>
				</span>

				{isLoginForm ? (
					<div className='w-full mt-4 lg:hidden'>
						<div className='w-full flex justify-between rounded-lg items-center  bg-[#f0f1f3]'>
							<h3 className='text-center p-5 text-primary text-sm font-semibold'>
								Testing courses from <br /> WAMOCON ACADEMY
							</h3>

							<Image src={'/course.png'} alt={'logo'} width={120} height={42} />
						</div>
					</div>
				) : null}
			</div>

			{isLoginForm ? (
				<Image
					className='hidden lg:block rounded'
					src={'/course.svg'}
					alt={'course'}
					width={436}
					height={479}
				/>
			) : null}
		</>
	)
}
