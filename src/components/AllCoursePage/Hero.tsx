import Image from 'next/image'
import Container from '../container/container'
import { Course } from './Course/Course'

export function Hero() {
	return (
		<section className='w-full py-12'>
			<Container>
				<div className='w-full flex items-center gap-4'>
					<Image
						src={'/mobilelogo.svg'}
						alt={'mobilelogo'}
						width={30}
						height={8}
					/>

					<h2 className='text-2xl lg:text-3xl font-semibold '>New courses</h2>
				</div>
				<div className='flex flex-col gap-4 mt-6 lg:mt-10'>
					<div className='w-full flex-col lg:flex-row flex gap-4'>
						<Course />
						<Course />
					</div>

					<div className='w-full flex-col lg:flex-row flex gap-4'>
						<Course />
						<Course />
					</div>
				</div>
			</Container>
		</section>
	)
}
