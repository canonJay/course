import { BugReport } from '@/components/MainTaskPage/BugReport'
import Container from '@/components/container/container'
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { ChevronRight, Redo2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
	return (
		<section>
			<Container>
				<div className='w-full flex justify-between'>
					<div>
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbLink className='font-bold text-[13px] leading-4 text-[#A7AEB8]'>
										Student questions
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbEllipsis className='text-primary' />
								<BreadcrumbItem>
									<BreadcrumbPage className='font-bold text-[13px] leading-4 '>
										Question: Title of the lesson
									</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
					<BugReport />
				</div>

				<div className='w-full flex justify-between mt-8 items-center'>
					<h1 className='text-3xl lg:mt-0 lg:text-4xl font-semibold'>
						Student's full name
					</h1>

					<Dialog>
						<DialogTrigger>
							<div className='bg-[#FA7A4B] py-2 px-8 rounded-3xl'>
								<Redo2 size={16} className='text-white' />
							</div>
						</DialogTrigger>

						<DialogContent className='h-full mt-[20px] p-0 lg:h-auto lg:mt-0'>
							<div className='flex flex-col w-full p-8'>
								<div className='flex  items-center justify-between'>
									<h2 className='text-2xl font-semibold '>
										Student's full name
									</h2>

									<div className='flex gap-2 items-center'>
										<span className='text-sm text-primary'>Group</span>/
										<span className='text-sm '>March, 6th</span>
									</div>
								</div>

								<span className='text-[#A7AEB8] text-sm'>Student Question</span>

								<form
									className='w-full flex flex-col gap-4 mt-8'
									//onSubmit={handleSubmit(onSubmit)}
								>
									<div className='w-full flex gap-2 flex-col lg:flex-row'>
										<div className='w-full flex flex-col gap-2'>
											<div className='w-full realtive flex items-center'>
												<Input
													// {...register('name', {
													// 	required: 'Name is required',
													// })}

													// value={data?.name}
													className='border-[#c2d5da]  rounded-xl py-6 placeholder:text-[#A7AEB8] outline-none'
													type='text'
													placeholder="Trainer's full name"
												/>
											</div>
											<div className='w-full realtive flex items-center'>
												<Input
													// {...register('name', {
													// 	required: 'Name is required',
													// })}

													// value={data?.name}
													className='border-[#c2d5da]  rounded-xl py-6 placeholder:text-[#A7AEB8] outline-none'
													type='text'
													placeholder="Trainer's full name"
												/>
											</div>
											<div className='w-full realtive flex items-center'>
												<Input
													// {...register('name', {
													// 	required: 'Name is required',
													// })}

													// value={data?.name}
													className='border-[#c2d5da]  rounded-xl py-6 placeholder:text-[#A7AEB8] outline-none'
													type='text'
													placeholder="Trainer's full name"
												/>
											</div>
										</div>
										<div className='w-full flex flex-col gap-2'>
											<div className='w-full realtive flex items-center'>
												<Input
													// {...register('name', {
													// 	required: 'Name is required',
													// })}

													// value={data?.name}
													className='border-[#c2d5da]  rounded-xl py-6 placeholder:text-[#A7AEB8] outline-none'
													type='text'
													placeholder="Trainer's full name"
												/>
											</div>

											<div className='w-full realtive flex items-center'>
												<Input
													// {...register('name', {
													// 	required: 'Name is required',
													// })}

													// value={data?.name}
													className='border-[#c2d5da]  rounded-xl py-6 placeholder:text-[#A7AEB8] outline-none'
													type='text'
													placeholder="Trainer's full name"
												/>
											</div>
											<div className='w-full realtive flex items-center'>
												<Input
													// {...register('name', {
													// 	required: 'Name is required',
													// })}

													// value={data?.name}
													className='border-[#c2d5da]  rounded-xl py-6 placeholder:text-[#A7AEB8] outline-none'
													type='text'
													placeholder="Trainer's full name"
												/>
											</div>
										</div>
									</div>

									<div className='w-full mt-3'>
										<span className='flex items-center gap-2 text-sm font-medium text-[#A7AEB8]'>
											<Image
												src={'/mobilelogo.svg'}
												width={24}
												height={6}
												alt='mobilelogo'
											></Image>
											Write a comment for another trainer
										</span>

										<textarea
											name=''
											className='w-full mt-2 border border-border p-3 rounded-lg h-[100px] '
											placeholder='Enter your comment...'
											id=''
										></textarea>
									</div>

									<Button
										type='submit'
										className='text-white font-semibold rounded-3xl'
										//disabled={loginPending || registerPending}
									>
										Send
									</Button>
								</form>
							</div>
						</DialogContent>
					</Dialog>
				</div>

				<h2 className='text-2xl lg:text-3xl font-semibold mt-12'>
					Title of the task/topic of the task
				</h2>

				<div className='mt-4'></div>

				<span className='text-base font-medium mt-7'>
					A software tester is a specialist who checks the functionality of an
					application, program or website. He looks for errors, makes sure that
					the web application does what the developers wanted it to do. The
					specialist launches the product on different platforms and operating
					systems to see how it will work there. Sometimes testers are called QA
					engineers - specialists responsible for quality control. In most
					projects, the work of a tester is the last stage. They double-check
					the developers, programmers, designers, point out errors to them if
					there are any, or hand over the project to the customer if everything
					works.
				</span>

				<div className='w-full py-12 flex justify-center items-center flex-col'>
					<Image src={'/mobilelogo.svg'} alt={'logo'} width={30} height={8} />

					<h2 className='text-2xl lg:text-3xl font-semibold mt-3'>
						Please answer
					</h2>

					<span className='text-sm font-medium w-1/2 text-center mt-2 text-[#A7AEB8]'>
						Please write a detailed answer to the student's question. Try to
						explain to him all the difficult points in as much detail and detail
						as possible.
					</span>
					<textarea
						name=''
						className='w-full border border-border p-3 rounded-lg h-[200px] mt-4'
						placeholder='Enter your answer...'
						id=''
					></textarea>

					<Link
						href={'/trainer/questions/preview'}
						className='mt-6 bg-primary text-white justify-center items-center font-medium px-4 py-1 w-[160px] flex gap-2  rounded-[21px]'
					>
						Answer
						<ChevronRight size={18} />
					</Link>
				</div>
			</Container>
		</section>
	)
}
