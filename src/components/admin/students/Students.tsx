import Container from '@/components/container/container'
import { Breadcrumb, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
	LockKeyhole,
	Mail,
	PlusCircle,
	Send,
	Smartphone,
	User,
} from 'lucide-react'
import Image from 'next/image'
import { StudentsGroup } from './StudentsGroup'

export function Students() {
	return (
		<section>
			<Container>
				<div className='w-full flex justify-between'>
					<Breadcrumb>
						<BreadcrumbPage>Students</BreadcrumbPage>
					</Breadcrumb>

					<Dialog>
						<DialogTrigger>
							<span className='text-primary flex items-center gap-2'>
								<PlusCircle size={20} /> Add student
							</span>
						</DialogTrigger>

						<DialogContent className='h-full mt-[20px] p-0 lg:h-auto lg:mt-0'>
							<div className='flex flex-col w-full p-8'>
								<Image src={'/logo.svg'} alt={'logo'} width={120} height={42} />

								<h2 className='text-2xl font-semibold mt-5'>
									Create a student account
								</h2>

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

													// value={data?.name}
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

													// value={data?.phone}
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

													// value={data?.email}
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

													// value={data?.telegramTag}
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
										Create an account
									</Button>
								</form>
							</div>
						</DialogContent>
					</Dialog>
				</div>

				<h1 className='text-3xl lg:text-5xl font-bold mt-12'>
					List of students
				</h1>

				<Tabs className='mt-6' defaultValue='All'>
					<TabsList>
						<TabsTrigger value='All'>List of students</TabsTrigger>
						<TabsTrigger value='Active'>Student applications</TabsTrigger>
					</TabsList>

					<TabsContent value='All'>
						<StudentsGroup />
					</TabsContent>
					<TabsContent value='Active'>
						<StudentsGroup />
					</TabsContent>
				</Tabs>
			</Container>
		</section>
	)
}
