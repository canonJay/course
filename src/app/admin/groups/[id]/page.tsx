import Container from '@/components/container/container'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
} from '@/components/ui/breadcrumb'
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
import { lato } from '@/fonts'
import { cn } from '@/lib/utils'
import {
	Check,
	ChevronRight,
	LockKeyhole,
	Mail,
	PencilLine,
	PersonStandingIcon,
	PlusCircle,
	Send,
	Smartphone,
	Star,
	Trash,
	User,
	X,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function GroupePage() {
	return (
		<main>
			<Container>
				<Breadcrumb className='mt-3'>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbPage>Groups</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</Container>

			<section className='w-full flex flex-col'>
				<Container>
					<h1 className='text-2xl lg:text-3xl font-semibold'>Group name</h1>

					<div className='w-full flex flex-col lg:flex-row mt-8 lg:items-center justify-between'>
						<h4 className='text-xl font-semibold'>Course name</h4>

						<div className=' flex items-center -ml-auto gap-2'>
							<span className='text-sm text-primary'>Course is active</span>/
							<span className='text-sm'>
								Days from start of course:{' '}
								<span className='text-primary text-sm'>21</span>
							</span>
							/<span className='text-sm'>March, 6th</span>
						</div>
					</div>

					<div className='flex flex-col lg:flex-row gap-8 mt-8 items-center'>
						<div className='w-full flex flex-col gap-3'>
							<h2 className='text-2xl font-semibold'>Course Description</h2>
							<span>
								A software tester is a specialist who checks the functionality
								of an application, program or website. He looks for errors,
								makes sure that the web application does what the developers
								wanted it to do. The specialist launches the product on
								different platforms and operating systems to see how it will
								work there. Sometimes testers are called QA engineers -
								specialists responsible for quality control. In most projects,
								the work of a tester is the last stage. They double-check the
								developers, programmers, designers, point out errors to them if
								there are any, or hand over the project to the customer if
								everything works.
							</span>
						</div>
						<Image
							src={'/232.svg'}
							width={500}
							height={500}
							alt='course image'
						/>
					</div>
				</Container>
			</section>

			<section className='mt-8'>
				<Container>
					<span className='flex items-center gap-2 text-sm font-medium text-[#A7AEB8]'>
						<Image
							src={'/mobilelogo.svg'}
							width={24}
							height={6}
							alt='mobilelogo'
						></Image>
						All trainers assigned to the group
					</span>
					<div className='w-full flex mt-4 justify-between'>
						<h3 className='text-2xl font-bold'>List of trainers</h3>

						<Dialog>
							<DialogTrigger>
								<span className='text-primary flex text-sm items-center gap-2'>
									<PlusCircle size={20} /> Add a trainer
								</span>
							</DialogTrigger>

							<DialogContent className='h-full mt-[20px] p-0 lg:h-auto lg:mt-0'>
								<div className='flex flex-col w-full p-8'>
									<Image
										src={'/logo.svg'}
										alt={'logo'}
										width={120}
										height={42}
									/>

									<div className='w-full flex  justify-between'>
										<h2 className='text-2xl font-semibold mt-5'>
											Add a trainer
										</h2>

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

										<span className='text-lg font-semibold'>
											List of groups
										</span>

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

					<div className='w-full flex flex-col py-4 gap-3'>
						<div className='w-full border flex justify-between border-border p-4 rounded-lg '>
							<Link
								href={'/admin/trainers/1313'}
								className='text-lg font-semibold'
							>
								Trainer's full name
							</Link>

							<span className='text-primary text-sm flex items-center gap-2'>
								<Trash size={15} />
								Delete trainer
							</span>
						</div>

						<div className='w-full border flex justify-between border-border p-4 rounded-lg '>
							<Link
								href={'/admin/trainers/1313'}
								className='text-lg font-semibold'
							>
								Trainer's full name
							</Link>

							<span className='text-primary text-sm flex items-center gap-2'>
								<Trash size={15} />
								Delete trainer
							</span>
						</div>

						<div className='w-full border flex justify-between border-border p-4 rounded-lg '>
							<Link
								href={'/admin/trainers/1313'}
								className='text-lg font-semibold'
							>
								Trainer's full name
							</Link>
							<span className='text-primary text-sm flex items-center gap-2'>
								<Trash size={15} />
								Delete trainer
							</span>
						</div>

						<div className='w-full border flex justify-between border-border p-4 rounded-lg '>
							<Link
								href={'/admin/trainers/1313'}
								className='text-lg font-semibold'
							>
								Trainer's full name
							</Link>

							<span className='text-primary text-sm flex items-center gap-2'>
								<Trash size={15} />
								Delete trainer
							</span>
						</div>
					</div>
				</Container>
			</section>

			<section className='mt-8'>
				<Container>
					<span className='flex items-center gap-2 text-sm font-medium text-[#A7AEB8]'>
						<Image
							src={'/mobilelogo.svg'}
							width={24}
							height={6}
							alt='mobilelogo'
						></Image>
						All students assigned to the group
					</span>

					<div className='w-full flex mt-4 justify-between'>
						<h3 className='text-2xl font-bold'>List of students</h3>

						<Dialog>
							<DialogTrigger>
								<span className='text-primary flex items-center gap-2'>
									<PlusCircle size={20} /> Add student
								</span>
							</DialogTrigger>

							<DialogContent className='h-full mt-[20px] p-0 lg:h-auto lg:mt-0'>
								<div className='flex flex-col w-full p-8'>
									<Image
										src={'/logo.svg'}
										alt={'logo'}
										width={120}
										height={42}
									/>

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

					<div className='w-full flex flex-col py-4 gap-3'>
						<div className='w-full border flex flex-col border-border p-4 rounded-lg '>
							<div className='flex gap-2'>
								<span className='flex mt-1 text-sm text-[#0F7C83] items-center gap-2'>
									<Check size={13} /> Active account
								</span>

								<span className='flex mt-1 text-sm text-[#0F7C83] items-center gap-2'>
									<Check size={13} /> Exam passed
								</span>

								<span className='flex mt-1 text-sm text-[#0F7C83] items-center gap-2'>
									<Check size={13} /> Course completed
								</span>
							</div>

							<div className='flex justify-between w-full'>
								<Link
									href={'/admin/groups/student/1313'}
									className='text-lg font-semibold'
								>
									Student's full name
								</Link>

								<span className='text-primary text-sm flex items-center gap-2'>
									<Trash size={15} />
									Delete Student
								</span>
							</div>
						</div>

						<div className='w-full border flex flex-col border-border p-4 rounded-lg '>
							<div className='flex gap-2'>
								<span className='flex mt-1 text-sm text-[#0F7C83] items-center gap-2'>
									<Check size={13} /> Active account
								</span>

								<span className='flex mt-1 text-sm text-[#0F7C83] items-center gap-2'>
									<Check size={13} /> Exam passed
								</span>

								<span className='flex mt-1 text-sm text-[#0F7C83] items-center gap-2'>
									<Check size={13} /> Course completed
								</span>
							</div>

							<div className='flex justify-between w-full'>
								<Link
									href={'/admin/groups/student/1313'}
									className='text-lg font-semibold'
								>
									Student's full name
								</Link>

								<span className='text-primary text-sm flex items-center gap-2'>
									<Trash size={15} />
									Delete Student
								</span>
							</div>
						</div>

						<div className='w-full border flex flex-col border-border p-4 rounded-lg '>
							<div className='flex gap-2'>
								<span className='flex mt-1 text-sm text-primary items-center gap-2'>
									<X size={13} /> Active account
								</span>

								<span className='flex mt-1 text-sm text-primary items-center gap-2'>
									<X size={13} /> Exam passed
								</span>

								<span className='flex mt-1 text-sm text-primary  items-center gap-2'>
									<X size={13} /> Course completed
								</span>
							</div>

							<div className='flex justify-between w-full'>
								<Link
									href={'/admin/groups/student/1313'}
									className='text-lg font-semibold'
								>
									Student's full name
								</Link>

								<span className='text-primary text-sm flex items-center gap-2'>
									<Trash size={15} />
									Delete Student
								</span>
							</div>
						</div>
					</div>
				</Container>
			</section>

			<section className='mt-8 pb-12'>
				<Container>
					<span className='flex items-center gap-2 text-sm font-medium text-[#A7AEB8]'>
						<Image
							src={'/mobilelogo.svg'}
							width={24}
							height={6}
							alt='mobilelogo'
						></Image>
						List of tasks for the course to which the group is attached
					</span>

					<div className='w-full flex mt-4 justify-between'>
						<h3 className='text-2xl font-bold'>Course tasks</h3>

						<Link
							className='text-primary text-sm flex items-center gap-2'
							href={'/admin/course/create'}
						>
							<PencilLine size={15} /> Edit Course
						</Link>
					</div>

					<div className='w-full flex flex-col mt-4 gap-3'>
						<div className='w-full border flex justify-between border-border p-4 rounded-lg '>
							<span className='text-lg font-semibold'>Lesson title</span>

							<span
								className={cn(
									'text-sm flex items-center gap-2',
									lato.className
								)}
							>
								<Star className='text-primary' size={15} />
								4.8
							</span>
						</div>

						<div className='w-full border flex justify-between border-border p-4 rounded-lg '>
							<span className='text-lg font-semibold'>Lesson title</span>

							<span
								className={cn(
									'text-sm flex items-center gap-2',
									lato.className
								)}
							>
								<Star className='text-primary' size={15} />
								4.8
							</span>
						</div>

						<div className='w-full border flex justify-between border-border p-4 rounded-lg '>
							<span className='text-lg font-semibold'>Lesson title</span>

							<span
								className={cn(
									'text-sm flex items-center gap-2',
									lato.className
								)}
							>
								<Star className='text-primary' size={15} />
								4.8
							</span>
						</div>
					</div>
				</Container>

				<div className='w-full flex py-12 justify-center items-center'>
					<Button className='rounded-3xl font-semibold'>
						Start course <ChevronRight size={18} />
					</Button>
				</div>
			</section>
		</main>
	)
}
