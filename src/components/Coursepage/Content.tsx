import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Container from '../container/container'

export function Content() {
	return (
		<section className='w-full bg-[#F0F1F3]'>
			<Container>
				<div className='flex flex-col justify-center items-center py-12'>
					<Image
						src={'/mobilelogo.svg'}
						alt={'mobilelogo'}
						width={30}
						height={8}
					/>

					<h2 className='text-2xl  lg:text-3xl  font-semibold mt-3'>
						Course content
					</h2>

					<span className='text-base text-center lg:w-2/4 font-medium mt-4 text-[#A7AEB8]'>
						The course is designed for those who want to learn the fundamentals
						of software testing and gain the knowledge and skills needed to be
						successful in the field.
					</span>

					<div className='w-full flex flex-col gap-5 mt-10'>
						<div className='w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 border-b-[1px] border-[#A7AEB8] pb-4'>
							<h3 className='font-semibold text-lg lg:text-2xl'>
								Introduction to testing
							</h3>

							<span className='font-medium text-base'>
								Definition, goals and objectives, types of testing.
							</span>
						</div>
						<div className='w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 border-b-[1px] border-[#A7AEB8] pb-4'>
							<h3 className='font-semibold text-lg lg:text-2xl'>
								Requirements testing
							</h3>

							<span className='font-medium text-base'>
								Analysis and verification of compliance with software
								requirements.
							</span>
						</div>
						<div className='w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 border-b-[1px] border-[#A7AEB8] pb-4'>
							<h3 className='font-semibold text-lg lg:text-2xl'>
								Functional testing
							</h3>

							<span className='font-medium text-base'>
								Checking the performance of basic software functions.
							</span>
						</div>
						<div className='w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 border-b-[1px] border-[#A7AEB8] pb-4'>
							<h3 className='font-semibold text-lg lg:text-2xl'>
								Integration testing
							</h3>

							<span className='font-medium text-base'>
								Combining software components to test how they work together.
							</span>
						</div>

						<div className='w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 border-b-[1px] border-[#A7AEB8] pb-4'>
							<h3 className='font-semibold text-lg lg:text-2xl'>
								Load testing
							</h3>

							<span className='font-medium text-base'>
								Determining software performance and stability under high loads.
							</span>
						</div>
					</div>

					<span className='text-primary text-base flex items-center gap-1 mt-4'>
						See all <ChevronDown />
					</span>
				</div>
			</Container>
		</section>
	)
}
