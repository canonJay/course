import Container from '@/components/container/container'
import { Breadcrumb, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
	LockKeyhole,
	Mail,
	PersonStandingIcon,
	PlusCircle,
	Smartphone,
	User,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { TrainerGroup } from './TrainersGroup'

export function Trainers() {
	return (
		<section>
			<Container>
				<div className='w-full flex justify-between'>
					<Breadcrumb>
						<BreadcrumbPage>Trainers</BreadcrumbPage>
					</Breadcrumb>

					<Dialog>
						<DialogTrigger>
							<span className='text-primary flex text-sm items-center gap-2'>
								<PlusCircle size={20} /> Add a trainer
							</span>
						</DialogTrigger>

						<DialogContent className='h-full mt-[20px] p-0 lg:h-auto lg:mt-0'>
							<div className='flex flex-col w-full p-8'>
								<Image src={'/logo.svg'} alt={'logo'} width={120} height={42} />

								<div className='w-full flex  justify-between'>
									<h2 className='text-2xl font-semibold mt-5'>Add a trainer</h2>

									<Label
										className='font-medium flex items-center gap-2 text-base '
										htmlFor='active'
									>
										Active Account
										<Switch id='active' />
									</Label>
								</div>

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

											<div className='w-full realtive flex items-center'>
												<PersonStandingIcon
													size={16}
													className='absolute left-12 lg:left-[465px] text-[#A7AEB8]'
												/>
												<div className='flex gap-2'>
													<Select>
														<SelectTrigger className='border-[#c2d5da] w-72 pl-10 rounded-xl py-6 placeholder:text-[#A7AEB8] outline-none'>
															<SelectValue placeholder='Group' />
														</SelectTrigger>

														<SelectContent>
															<SelectGroup>
																<SelectItem value='1'>Group 1</SelectItem>
															</SelectGroup>
														</SelectContent>
													</Select>

													<Link
														href={'/admin/groups/create'}
														className='text-primary flex text-sm items-center gap-2'
													>
														<PlusCircle size={20} /> Add a group
													</Link>
												</div>
											</div>
										</div>
									</div>

									<span className='text-lg font-semibold'>List of groups</span>

									<span className='text-base'>
										You haven't added a group yet.
									</span>

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

				<h1 className='text-3xl lg:text-5xl font-bold mt-12'>
					List of trainers
				</h1>

				<Tabs className='mt-6' defaultValue='All'>
					<TabsList>
						<TabsTrigger value='All'>All</TabsTrigger>
						<TabsTrigger value='Active'>Active accounts</TabsTrigger>
						<TabsTrigger value='Inactive'>Inactive accounts</TabsTrigger>
					</TabsList>

					<TabsContent value='All'>
						<TrainerGroup />
					</TabsContent>
					<TabsContent value='Active'>
						<TrainerGroup />
					</TabsContent>
					<TabsContent value='Inactive'>
						<TrainerGroup />
					</TabsContent>
				</Tabs>
			</Container>
		</section>
	)
}
