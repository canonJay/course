import { lato } from '@/fonts'
import { cn } from '@/lib/utils'
import { ChevronRight, Clock, LibraryBig, Star } from 'lucide-react'
import Image from 'next/image'
import Container from '../container/container'

import { ArrowDownLeft } from 'lucide-react'
import Link from 'next/link'
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
} from '../ui/breadcrumb'
import { Button } from '../ui/button'
import { Progress } from '../ui/progress'

export default function Hero() {
	return (
		<section>
			<Container>
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
							<BreadcrumbPage className='font-bold text-[13px] leading-4 '>
								Course: Testing Basics
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<div className='flex flex-col lg:flex-row lg:justify-between lg:mt-12 gap-20 '>
					<div className='lg:w-2/4'>
						<div className='w-full flex flex-col mt-6'>
							<div className='lg:hidden'>
								<Image
									src={'/mobilelogo.svg'}
									alt={'mobilelogo'}
									width={30}
									height={8}
								/>
							</div>

							<div className='hidden lg:block'>
								<Image
									src={'/mobilelogo.svg'}
									alt={'mobilelogo'}
									width={60}
									height={15}
								/>
							</div>

							<h1 className='text-3xl lg:text-5xl font-[600] mt-3 lg:mt-6 leading-[37px]'>
								Testing courses from <br className='hidden lg:block' /> WAMOCON
								ACADEMY
							</h1>

							<Link href={'/course/tasks'}>
								<Button className='mt-6 w-[160px] flex gap-2 font-bold rounded-[21px]'>
									Start now <ChevronRight size={18} />
								</Button>
							</Link>
						</div>

						<div className='w-full flex flex-col lg:mt-24 mt-6'>
							<span className='text-[13px] leading-4 font-bold '>
								Lesson{' '}
								<span className={cn(lato.className, 'text-primary')}>21</span>{' '}
								out of <span className={lato.className}>34</span> (
								<span className={lato.className}>62</span>%){' '}
							</span>

							<div className='w-full gap-2 flex mt-3'>
								<Progress value={100} />
								<Progress value={60} />
								<Progress value={0} />
							</div>
						</div>

						<div className='w-full flex mt-10 lg:mt-20 flex-col'>
							<ArrowDownLeft size={25} color='#A7AEB8' />

							<span className='text-[13px] leading-4 text-[#A7AEB8] font-bold mt-1'>
								Testing courses develop the skills and knowledge needed for a
								successful career in the field. Training includes theory,
								practice and mentor support. Our graduates are ready to start
								working as testers.
							</span>
						</div>
					</div>

					<div>
						<div className='w-full flex justify-center items-center flex-col mt-6 gap-4'>
							<Image
								src={'/hero.png'}
								alt={'heroimage'}
								width={470}
								height={370}
							/>

							<div className='border-2 border-border rounded-xl px-3 py-2 flex justify-center gap-3 items-center'>
								<span className='font-semibold text-[13px] flex items-center gap-2'>
									<Clock className='text-primary' size={14} />
									<div>
										<span className={lato.className}>40</span> hours
									</div>
								</span>

								<span className='font-semibold text-[13px] flex items-center gap-2'>
									<LibraryBig className='text-primary' size={14} />
									<div>
										<span className={lato.className}>34</span> lessons
									</div>
								</span>

								<span className='font-semibold text-[13px] flex items-center gap-2'>
									<Star className='text-primary' size={14} />
									<div>
										<span className={lato.className}>4.8</span> rating
									</div>
								</span>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
