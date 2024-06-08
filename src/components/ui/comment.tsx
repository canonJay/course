import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

export function Comment() {
	return (
		<div className='w-full flex flex-col relative p-4 border-2 border-border rounded-2xl'>
			<Avatar className='absolute -top-5'>
				<AvatarImage sizes='5rem' src='/Avatr1.png' />

				<AvatarFallback>JD</AvatarFallback>
			</Avatar>

			<span className='text-base font-medium mt-2 pb-3 border-b-[1px] border-[#C8CCD3] '>
				The testing course was very informative and useful. I learned a lot
				about testing and how to improve my skills in this area. Thanks for the
				new knowledge!
			</span>

			<div className='flex items-center justify-between mt-3'>
				<div className='flex flex-col'>
					<span className='text-base font-semibold'>Esther Howard</span>
					<span className='text-sm '>
						Course: <span className='text-primary'>“Testing courses”</span>
					</span>
				</div>

				<div className='flex items-center gap-2'>
					<Image src={'/stars.svg'} alt={'star'} width={62} height={15} />
				</div>
			</div>
		</div>
	)
}
