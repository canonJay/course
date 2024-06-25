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
import { cn } from '@/lib/utils'
import { Check, ChevronRight, Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
	return (
		<main>
			<Container>
				<Breadcrumb className='mt-3'>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink>All groups</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbEllipsis />

						<BreadcrumbItem>
							<BreadcrumbPage>Group name</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</Container>

			<section className='w-full flex flex-col mt-6'>
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
					</div>

					<div className='w-full flex flex-col py-4 gap-3'>
						<div className='w-full flex items-center gap-2 py-4 rounded-lg '>
							<Dot />

							<Link
								href={'/admin/trainers/1313'}
								className='text-lg font-semibold'
							>
								Trainer's full name
							</Link>
						</div>

						<div className='w-full flex items-center gap-2 py-4 rounded-lg '>
							<Dot />

							<Link
								href={'/admin/trainers/1313'}
								className='text-lg font-semibold'
							>
								Trainer's full name
							</Link>
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
					</div>

					<div className='w-full flex flex-col py-4 gap-3'>
						<div className='w-full border flex flex-col border-border py-2 px-4 rounded-lg '>
							<div className='flex gap-2'>
								<span className='flex mt-1 text-sm  items-center gap-2'>
									No questions answered:{' '}
									<span className='text-primary'>15</span>
								</span>
								/
								<span className='flex mt-1 text-sm  items-center gap-2'>
									Answers not rated: <span className='text-primary'>15</span>
								</span>
							</div>

							<div className='flex justify-between w-full'>
								<Link
									href={'/admin/groups/student/1313'}
									className='text-lg font-semibold'
								>
									Student's full name
								</Link>
							</div>
						</div>

						<div className='w-full border flex flex-col border-border py-2 px-4 rounded-lg '>
							<div className='flex gap-2'>
								<span className='flex mt-1 text-sm  items-center gap-2'>
									No questions answered:{' '}
									<span className='text-primary'>15</span>
								</span>
								/
								<span className='flex mt-1 text-sm  items-center gap-2'>
									Answers not rated: <span className='text-primary'>15</span>
								</span>
							</div>

							<div className='flex justify-between w-full'>
								<Link
									href={'/admin/groups/student/1313'}
									className='text-lg font-semibold'
								>
									Student's full name
								</Link>
							</div>
						</div>
						<div className='w-full border flex flex-col border-border py-2 px-4 rounded-lg '>
							<div className='flex gap-2'>
								<span className='flex mt-1 text-sm  items-center gap-2'>
									No questions answered:{' '}
									<span className='text-primary'>15</span>
								</span>
								/
								<span className='flex mt-1 text-sm  items-center gap-2'>
									Answers not rated: <span className='text-primary'>15</span>
								</span>
							</div>

							<div className='flex justify-between w-full'>
								<Link
									href={'/admin/groups/student/1313'}
									className='text-lg font-semibold'
								>
									Student's full name
								</Link>
							</div>
						</div>
						<div className='w-full border flex flex-col border-border py-2 px-4 rounded-lg '>
							<div className='flex gap-2'>
								<span className='flex mt-1 text-sm  items-center gap-2'>
									No questions answered:{' '}
									<span className='text-primary'>15</span>
								</span>
								/
								<span className='flex mt-1 text-sm  items-center gap-2'>
									Answers not rated: <span className='text-primary'>15</span>
								</span>
							</div>

							<div className='flex justify-between w-full'>
								<Link
									href={'/admin/groups/student/1313'}
									className='text-lg font-semibold'
								>
									Student's full name
								</Link>
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
					</div>

					<div className='w-full flex flex-col mt-4 gap-3'>
						<div className='w-full border flex justify-between border-border p-4 rounded-lg '>
							<span className='text-lg font-semibold'>Lesson title</span>

							<span
								className={cn('text-sm flex items-center gap-2 text-[#0F7C83]')}
							>
								<Check size={15} />
								Task active
							</span>
						</div>

						<div className='w-full border flex justify-between border-border p-4 rounded-lg '>
							<span className='text-lg font-semibold'>Lesson title</span>
						</div>

						<div className='w-full border flex justify-between border-border p-4 rounded-lg '>
							<span className='text-lg font-semibold'>Lesson title</span>
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
