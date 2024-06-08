import Image from 'next/image'
import Container from '../container/container'
import { Comment } from '../ui/comment'

export function Feedback() {
	return (
		<section className='py-12 w-full'>
			<Container>
				<div className='flex flex-col justify-center items-center'>
					<Image
						src={'/mobilelogo.svg'}
						alt={'mobilelogo'}
						width={30}
						height={8}
					/>

					<h2 className='text-2xl  lg:text-3xl  font-semibold mt-3'>
						Feedback from our students
					</h2>

					<span className='text-base text-center font-medium mt-4 text-[#A7AEB8]'>
						Your opinion matters to us
					</span>

					<div className='w-full flex flex-col lg:flex-row gap-10 mt-10'>
						<Comment />
						<Comment />
						<Comment />
					</div>
				</div>
			</Container>
		</section>
	)
}
