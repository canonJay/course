'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { userService } from '@/services/user.services'
import { useQuery } from '@tanstack/react-query'
import {
	Check,
	Key,
	LockKeyhole,
	Mail,
	PencilLine,
	Send,
	Smartphone,
	User,
} from 'lucide-react'
import Image from 'next/image'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export function TrainerAccount() {
	const { data } = useQuery({
		queryKey: ['profile'],
		queryFn: userService.getAuthUser,
	})

	return (
		<div className='flex flex-col mt-4 w-full lg:max-w-[360px]'>
			<h3 className='text-2xl font-semibold'>Student's Full Name</h3>
			<span className='flex mt-1 text-sm text-[#0F7C83] items-center gap-2'>
				<Check size={13} /> Active account
			</span>

			<div className='w-full h-[1px] bg-border mt-6'></div>

			<div className='flex justify-between items-center mt-4'>
				<h3 className='text-2xl font-semibold'>Contact details</h3>

				<Dialog>
					<DialogTrigger>
						<span className='text-sm flex items-center font-semibold gap-2 text-primary '>
							<PencilLine size={16} /> Edit
						</span>
					</DialogTrigger>

					<DialogContent className='h-full mt-[20px] p-0 lg:h-auto lg:mt-0'>
						<div className='flex flex-col w-full p-8'>
							<Image src={'/logo.svg'} alt={'logo'} width={120} height={42} />

							<h2 className='text-2xl font-semibold mt-5'>Edit profile</h2>

							<form
								className='w-full flex flex-col gap-4 mt-8'
								//onSubmit={handleSubmit(onSubmit)}
							>
								<div className='w-full flex gap-2 flex-col lg:flex-row'>
									<div className='w-full flex flex-col gap-2'>
										<div className='w-full realtive flex items-center'>
											<User
												size={16}
												className='absolute left-12 text-[#A7AEB8]'
											/>
											<Input
												// {...register('name', {
												// 	required: 'Name is required',
												// })}

												value={data?.name}
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
												// {...register('phone', {
												// 	required: 'Phone number is required',
												// })}

												value={data?.phone}
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
												// {...register('email', {
												// 	required: 'Email is required',
												// 	pattern: {
												// 		value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												// 		message: 'Invalid email address',
												// 	},
												// })}

												value={data?.email}
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
												// {...register('telegramTag', {
												// 	required: 'Telegram is required',
												// })}

												value={data?.telegramTag}
												className='border-[#c2d5da] pl-10 rounded-xl py-6 placeholder:text-[#A7AEB8] outline-none'
												type='text'
												placeholder='Telegram'
											/>
										</div>

										<div className='w-full realtive flex items-center'>
											<LockKeyhole
												size={16}
												className='absolute left-12 lg:left-[465px] text-[#A7AEB8]'
											/>
											<Input
												// {...register('password', {
												// 	required: 'Password is required',
												// 	minLength: {
												// 		value: 6,
												// 		message: 'Password must be at least 6 characters',
												// 	},
												// })}

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

								<Button
									type='submit'
									className='text-white font-semibold rounded-3xl'
									//disabled={loginPending || registerPending}
								>
									Confirm
								</Button>
							</form>
						</div>
					</DialogContent>
				</Dialog>
			</div>

			<div className='mt-4'>
				<span className='flex items-center gap-2 mt-1 text-base text-primary'>
					<Mail size={16} /> Email
				</span>

				<span className='w-full font-medium text-sm'>
					alma.lawson@example.com
				</span>
			</div>
			<div className='mt-4'>
				<span className='flex items-center gap-2 mt-1 text-base text-primary'>
					<Smartphone size={16} /> Phone number
				</span>

				<span className='w-full font-medium text-sm'>(406) 555-0120</span>
			</div>
			<div className='mt-4'>
				<span className='flex items-center gap-2 mt-1 text-base text-primary'>
					<Key size={16} />
					Password
				</span>

				<span className='w-full font-medium text-sm'>Xv567Gff5xd</span>
			</div>
		</div>
	)
}
