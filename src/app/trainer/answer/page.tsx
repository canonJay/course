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
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { lato } from '@/fonts'
import { cn } from '@/lib/utils'
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
									<BreadcrumbLink
										className='font-bold text-[13px] leading-4 text-[#A7AEB8]'
										href='/'
									>
										All courses
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbEllipsis className='text-primary' />
								<BreadcrumbItem>
									<BreadcrumbLink className='font-bold text-[13px] leading-4 text-[#A7AEB8]'>
										Course: Testing Basics
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbEllipsis className='text-primary' />
								<BreadcrumbItem>
									<BreadcrumbLink className='font-bold text-[13px] leading-4 text-[#A7AEB8]'>
										Tasks page: Testing Basics
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbEllipsis className='text-primary' />
								<BreadcrumbItem>
									<BreadcrumbPage className='font-bold text-[13px] leading-4 '>
										Title of the first lesson
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

				<div className='flex gap-2 mt-8'>
					<img src='/mobilelogo.svg' className='w-[30px]' alt=' mobilelogo ' />
					<span className='text-[#A7AEB8] font-medium text-sm'>
						Message from the trainer
					</span>
				</div>

				<h2 className='text-2xl lg:text-3xl font-semibold mt-2'>
					Trainer's full name
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

				<h2 className='text-2xl lg:text-3xl font-semibold mt-6'>
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

				<h2 className='text-2xl lg:text-3xl font-semibold mt-6'>
					The correct answer to the task
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

				<h2 className='text-2xl lg:text-3xl font-semibold mt-6'>
					Student answer
				</h2>

				<textarea
					name=''
					className='w-full border border-border p-3 rounded-lg h-[200px] mt-4'
					placeholder='Enter your answer...'
					id=''
					value='A software tester is a specialist who checks the functionality of an application, program or website. He looks for errors, makes sure that the web application does what the developers wanted it to do. The specialist launches the product on different platforms and operating systems to see how it will work there.
'
				></textarea>

				<h2 className='text-2xl lg:text-3xl font-semibold mt-2'>
					Student's answer to the test task
				</h2>

				<div className='mt-4'></div>
				<span className='text-base font-medium mt-7'>
					A software tester is a specialist who checks the functionality of an
					application, program or website. He looks for errors, makes sure that
					the web application does what the developers wanted it to do. The
					specialist launches the product on different platforms and operating
					systems to see how it will work there.
				</span>

				<div className='mt-4 flex flex-col gap-2'>
					<div className='flex items-center text-[#0F7C83] space-x-2'>
						<Checkbox id='terms' />
						<Label htmlFor='terms'>Option answer to the task</Label>
					</div>
					<div className='flex items-center text-[#0F7C83] space-x-2'>
						<Checkbox id='terms2' />
						<Label htmlFor='terms2'>Option answer to the task</Label>
					</div>
					<div className='flex items-center text-[#0F7C83] space-x-2'>
						<Checkbox id='terms3' />
						<Label htmlFor='terms3'>Option answer to the task</Label>
					</div>
					<div className='flex items-center text-primary space-x-2'>
						<Checkbox id='terms4' />
						<Label htmlFor='terms4'>Option answer to the task</Label>
					</div>
					<div className='flex items-center text-primary space-x-2'>
						<Checkbox id='terms5' />
						<Label htmlFor='terms5'>Option answer to the task</Label>
					</div>
				</div>

				<div className='flex justify-center flex-col items-center mt-28'>
					<h2 className='text-3xl lg:mt-0 lg:text-4xl font-semibold'>
						Evaluate the student's answer to the task
					</h2>

					<span className='text-base font-medium mt-7 text-[#A7AEB8] w-[400px] text-center'>
						If there are errors in a student's answer, please point them out so
						that he can improve his knowledge. However, the good things in his
						work should also be noted in order to encourage and support him.
					</span>

					<textarea
						name=''
						className='w-full border border-border p-3 rounded-lg h-[95px] mt-4'
						placeholder='Enter your answer...'
						id=''
					></textarea>

					<div className='flex justify-center  gap-2 mt-8 pb-8'>
						<Link
							className='bg-[#830F19] text-white font-semibold text-sm px-6 py-2 h-9 rounded-[21px] flex justify-center items-center'
							href={'#'}
						>
							The answer incorrect
						</Link>
						<Button className=' w-[160px] bg-[#0F7C83] hover:bg-[#0F7C83] flex gap-2 font-bold rounded-[21px]'>
							The answer is correct <ChevronRight size={18} />
						</Button>
					</div>

					<div className='flex w-full flex-col justify-center items-center gap-2 py-12'>
						<Image
							src={'/mobilelogo.svg'}
							width={24}
							height={6}
							alt={'mobilelogo'}
						/>

						<h2 className='text-2xl lg:text-3xl font-semibold'>
							Answer history
						</h2>

						<span className='text-base font-medium text-[#A7AEB8]'>
							History of student answers to this task.
						</span>

						<div className='w-full border mt-6 border-border p-4 rounded-xl'>
							<div className='w-full flex items-center justify-between'>
								<div className='flex gap-3 text-sm font-medium text-primary'>
									<span>Title of the task</span>/<span>Group</span>/
									<span className='text-[#243036]'>
										It took to answer:{' '}
										<span className={cn('text-primary', lato.className)}>
											1h
										</span>
									</span>
								</div>

								<div className='flex items-center gap-2'>
									<span className='flex items-center gap-1 text-[11px] font-semibold '>
										March, 6th
									</span>
									/
									<span className='flex items-center gap-1 text-[11px] font-semibold'>
										2pm
									</span>
								</div>
							</div>

							<div className='w-full flex items-center justify-between'>
								<Link
									href={'/trainer/answer/history/131'}
									className='font-semibold text-lg lg:text-2xl'
								>
									Introduction to testing
								</Link>
							</div>
						</div>

						<div className='w-full border border-border p-4 rounded-xl'>
							<div className='w-full flex items-center justify-between'>
								<div className='flex gap-3 text-sm font-medium text-primary'>
									<span>Title of the task</span>/<span>Group</span>/
									<span className='text-[#243036]'>
										It took to answer:{' '}
										<span className={cn('text-primary', lato.className)}>
											1h
										</span>
									</span>
								</div>

								<div className='flex items-center gap-2'>
									<span className='flex items-center gap-1 text-[11px] font-semibold '>
										March, 6th
									</span>
									/
									<span className='flex items-center gap-1 text-[11px] font-semibold'>
										2pm
									</span>
								</div>
							</div>

							<div className='w-full flex items-center justify-between'>
								<Link
									href={'/trainer/answer/history/131'}
									className='font-semibold text-lg lg:text-2xl'
								>
									Introduction to testing
								</Link>
							</div>
						</div>

						<div className='w-full border border-border p-4 rounded-xl'>
							<div className='w-full flex items-center justify-between'>
								<div className='flex gap-3 text-sm font-medium text-primary'>
									<span>Title of the task</span>/<span>Group</span>/
									<span className='text-[#243036]'>
										It took to answer:{' '}
										<span className={cn('text-primary', lato.className)}>
											1h
										</span>
									</span>
								</div>

								<div className='flex items-center gap-2'>
									<span className='flex items-center gap-1 text-[11px] font-semibold '>
										March, 6th
									</span>
									/
									<span className='flex items-center gap-1 text-[11px] font-semibold'>
										2pm
									</span>
								</div>
							</div>

							<div className='w-full flex items-center justify-between'>
								<Link
									href={'/trainer/answer/history/131'}
									className='font-semibold text-lg lg:text-2xl'
								>
									Introduction to testing
								</Link>
							</div>
						</div>

						<div className='w-full border border-border p-4 rounded-xl'>
							<div className='w-full flex items-center justify-between'>
								<div className='flex gap-3 text-sm font-medium text-primary'>
									<span>Title of the task</span>/<span>Group</span>/
									<span className='text-[#243036]'>
										It took to answer:{' '}
										<span className={cn('text-primary', lato.className)}>
											1h
										</span>
									</span>
								</div>

								<div className='flex items-center gap-2'>
									<span className='flex items-center gap-1 text-[11px] font-semibold '>
										March, 6th
									</span>
									/
									<span className='flex items-center gap-1 text-[11px] font-semibold'>
										2pm
									</span>
								</div>
							</div>

							<div className='w-full flex items-center justify-between'>
								<Link
									href={'/trainer/answer/history/131'}
									className='font-semibold text-lg lg:text-2xl'
								>
									Introduction to testing
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
