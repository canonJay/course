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
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { lato } from '@/fonts'
import { cn } from '@/lib/utils'
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
				</div>

				<h2 className='text-2xl lg:text-3xl font-semibold mt-12'>
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

				<h2 className='text-2xl lg:text-3xl font-semibold mt-6'>
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
					<div className='flex w-full flex-col justify-center items-center gap-2 pb-12'>
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
