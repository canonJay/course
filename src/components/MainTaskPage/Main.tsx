import { ChevronRight, ShieldQuestion } from 'lucide-react'
import Link from 'next/link'
import Container from '../container/container'
import { Alert, AlertDescription } from '../ui/alert'
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
} from '../ui/breadcrumb'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Label } from '../ui/label'

export function Main() {
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

					<Button variant={'link'} className='p-0 text-primary'>
						Report a bug
					</Button>
				</div>

				<div className='w-full flex justify-between mt-8 items-center'>
					<h1 className='text-3xl lg:mt-0 lg:text-4xl font-semibold'>
						Title of the first lesson
					</h1>

					<DropdownMenu>
						<DropdownMenuTrigger>
							<div className='bg-[#FA7A4B] py-2 px-8 rounded-3xl'>
								<ShieldQuestion size={16} className='text-white' />
							</div>
						</DropdownMenuTrigger>

						<DropdownMenuContent className='p-0 border-0 w-[400px] left-24'>
							<Alert variant={'orange'}>
								<ShieldQuestion size={15} className='text-white' />

								<AlertDescription className='mt-0'>
									Check the presence and correctness of HTML tags, the correct
									structure of the code and the absence of syntax errors.
								</AlertDescription>
							</Alert>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<div className='flex gap-2 mt-8'>
					<img src='/mobilelogo.svg' className='w-[30px]' alt=' mobilelogo ' />
					<span className='text-[#A7AEB8] font-medium text-sm'>
						Read the task carefully
					</span>
				</div>

				<h2 className='text-2xl lg:text-3xl font-semibold mt-2'>
					Title of the task/topic of the task
				</h2>

				<div className='mt-4'></div>

				<span className='text-base font-medium mt-7'>
					A software tester is a specialist who checks the functionality of an
					application, program or website. He looks for errors, makes sure that
					the web application does what the developers wanted it to do. The
					specialist launches the product on different platforms and operating
					systems to see how it will work there. <br /> Sometimes testers are
					called QA engineers - specialists responsible for quality control. In
					most projects, the work of a tester is the last stage. They
					double-check the developers, programmers, designers, point out errors
					to them if there are any, or hand over the project to the customer if
					everything works.
				</span>

				<div className='flex gap-2 mt-8'>
					<img src='/mobilelogo.svg' className='w-[30px]' alt=' mobilelogo ' />
					<span className='text-[#A7AEB8] font-medium text-sm'>
						Give a detailed answer to the task
					</span>
				</div>

				<h2 className='text-2xl lg:text-3xl font-semibold mt-2'>Your Answer</h2>

				<textarea
					name=''
					className='w-full border border-border p-3 rounded-lg h-[200px] mt-4'
					placeholder='Enter your answer...'
					id=''
				></textarea>

				<div className='flex gap-2 mt-8'>
					<img src='/mobilelogo.svg' className='w-[30px]' alt=' mobilelogo ' />
					<span className='text-[#A7AEB8] font-medium text-sm'>
						Read the task carefully and choose the correct answer(s)
					</span>
				</div>

				<h2 className='text-2xl lg:text-3xl font-semibold mt-2'>
					Test for the task "Title of the task"
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
					<div className='flex items-center space-x-2'>
						<Checkbox id='terms' />
						<Label htmlFor='terms'>Option answer to the task</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<Checkbox id='terms2' />
						<Label htmlFor='terms2'>Option answer to the task</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<Checkbox id='terms3' />
						<Label htmlFor='terms3'>Option answer to the task</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<Checkbox id='terms4' />
						<Label htmlFor='terms4'>Option answer to the task</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<Checkbox id='terms5' />
						<Label htmlFor='terms5'>Option answer to the task</Label>
					</div>
				</div>

				<div className='flex justify-center flex-col items-center mt-24'>
					<img src='/mobilelogo.svg' className='w-[30px]' alt='' />

					<h2 className='text-3xl lg:mt-0 lg:text-4xl font-semibold'>
						You have completed the task
					</h2>

					<span className='text-base font-medium mt-7 text-[#A7AEB8] w-[400px] text-center'>
						Make sure you have filled everything out correctly and send the task
						to your trainer for review.
					</span>

					<Button className='mt-6 w-[160px] flex gap-2 font-bold rounded-[21px]'>
						Send task <ChevronRight size={18} />
					</Button>
				</div>

				<div className='flex justify-center flex-col items-center mt-12'>
					<h2 className='text-3xl lg:mt-0 lg:text-4xl font-semibold'>
						Do you have any questions?
					</h2>

					<span className='text-base font-medium mt-7 text-[#A7AEB8] w-[400px] text-center'>
						Ask your question to the trainer. He will help you figure out the
						task.
					</span>

					<textarea
						name=''
						className='w-full border border-border p-3 rounded-lg h-[95px] mt-4'
						placeholder='Enter your answer...'
						id=''
					></textarea>

					<div className='flex justify-center gap-2 mt-8 pb-8'>
						<Link
							className='bg-[#DFE8EC] font-semibold text-sm px-6 py-2 h-9 rounded-[21px] flex justify-center items-center'
							href={'#'}
						>
							Check history
						</Link>
						<Button className=' w-[160px] flex gap-2 font-bold rounded-[21px]'>
							Send question <ChevronRight size={18} />
						</Button>
					</div>
				</div>
			</Container>
		</section>
	)
}
