import { BugReport } from '@/components/MainTaskPage/BugReport'
import Container from '@/components/container/container'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { Checkbox } from '@/components/ui/checkbox'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Label } from '@/components/ui/label'
import { ShieldQuestion } from 'lucide-react'

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
										Student answers
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbEllipsis className='text-primary' />
								<BreadcrumbItem>
									<BreadcrumbLink className='font-bold text-[13px] leading-4 text-[#A7AEB8]'>
										Answer: Title of the lesson
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbEllipsis className='text-primary' />
								<BreadcrumbItem>
									<BreadcrumbPage className='font-bold text-[13px] leading-4 '>
										Task preview: Title of the lesson
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

				<h2 className='text-2xl lg:text-3xl font-semibold mt-12'>
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

				<h2 className='text-2xl lg:text-3xl font-semibold mt-6'>
					The correct answer to the task
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

				<h2 className='text-2xl lg:text-3xl font-semibold mt-6'>
					Student answer
				</h2>

				<textarea
					name=''
					className='w-full text-[#0F7C83] border border-border p-3 rounded-lg h-[200px] mt-4'
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
						<Checkbox id='terms' checked />
						<Label htmlFor='terms'>Option answer to the task</Label>
					</div>
					<div className='flex items-center text-[#0F7C83] space-x-2'>
						<Checkbox id='terms2' checked />
						<Label htmlFor='terms2'>Option answer to the task</Label>
					</div>
					<div className='flex items-center text-primary space-x-2'>
						<Checkbox id='terms3' />
						<Label htmlFor='terms3'>Option answer to the task</Label>
					</div>
				</div>

				<div className='flex justify-center flex-col items-center mt-24'>
					<img src='/mobilelogo.svg' className='w-[30px]' alt='' />

					<h2 className='text-3xl lg:mt-0 lg:text-4xl font-semibold'>
						The task was solved correctly
					</h2>

					<span className='text-base font-medium mt-7 text-[#A7AEB8] w-[400px] text-center'>
						The student completed the task correctly
					</span>
				</div>
			</Container>
		</section>
	)
}
