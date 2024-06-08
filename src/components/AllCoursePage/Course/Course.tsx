import { lato } from '@/fonts'
import { cn } from '@/lib/utils'
import { Clock, LibraryBig, Star } from 'lucide-react'
import Image from 'next/image'

import Link from 'next/link'
import style from './Course.module.css'

export function Course() {
	return (
		<div className='flex flex-col items-center lg:flex-row p-2 gap-2 lg:gap-4 px-4 lg:p-4 border border-border rounded-xl'>
			<Image
				className='hidden lg:block w-[163px] h-[130px]'
				src={'/course.png'}
				alt={'course hero'}
				width={163}
				height={130}
			/>
			<div>
				<div className='w-full flex justify-between items-center'>
					<span className='text-[8px] font-medium text-[#A7AEB8]'>
						WAMOCON ACADEMY
					</span>

					<div className='flex gap-3'>
						<span className='font-semibold text-[10px] flex items-center gap-2'>
							<Clock className='text-primary' size={11} />
							<div>
								<span className={lato.className}>40</span> hours
							</div>
						</span>

						<span className='font-semibold text-[10px] flex items-center gap-2'>
							<LibraryBig className='text-primary' size={11} />
							<div>
								<span className={lato.className}>34</span> lessons
							</div>
						</span>

						<span className='font-semibold text-[10px] flex items-center gap-2'>
							<Star className='text-primary' size={11} />
							<div>
								<span className={lato.className}>4.8</span> rating
							</div>
						</span>
					</div>
				</div>

				<div className='w-full flex gap-4'>
					<Image
						className='lg:hidden'
						src={'/course.png'}
						alt={'course hero'}
						width={105}
						height={84}
					/>

					<div>
						<Link href={'/course'}>
							<h2 className='text-base lg:text-xl font-semibold text-primary '>
								Testing courses from WAMOCON ACADEMY
							</h2>
						</Link>

						<h3
							className={cn(
								'text-[0.775rem] leading-[1rem] lg:leading-[0.9rem] lg:text-[16px] font-medium text-[#A7AEB8] mt-1',
								style.smallText
							)}
						>
							Testing courses develop the skills and knowledge needed for a
							successful career in the field. Training includes theory, practice
							and mentor support. Our graduates are ready to start working as
							testers.
						</h3>
					</div>
				</div>
			</div>
		</div>
	)
}
