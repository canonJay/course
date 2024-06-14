'use client'

import { FC } from 'react'
import { Task } from './Task'

export const TasksDash: FC = ({}) => {
	return (
		<section className='w-full'>
			<h1 className='text-2xl mt-8 lg:text-3xl font-semibold'>My Tasks</h1>

			<div className='w-full flex justify-between mt-4 lg:max-w-[400px]'>
				<ul className='w-full flex justify-between'>
					<li className=' text-lg font-semibold flex flex-col justify-center items-center'>
						All
						<img className='w-[12px] h-[3px]' src='/mobilelogo.svg' alt='' />
					</li>
					<li className='text-[#A7AEB8] text-lg font-semibold'>Available</li>
					<li className='text-[#A7AEB8] text-lg font-semibold'>Completed</li>
					<li className='text-[#A7AEB8] text-lg font-semibold'>Under review</li>
				</ul>
			</div>

			<div className='flex flex-col gap-2 mt-4'>
				<Task variant='completed' task={{ title: 'title', slug: 'slug' }} />
				<Task variant='incorrectly' task={{ title: 'title', slug: 'slug' }} />
				<Task variant='review' task={{ title: 'title', slug: 'slug' }} />
				<Task variant='available' task={{ title: 'title', slug: 'slug' }} />
				<Task variant='notAvailabl' task={{ title: 'title', slug: 'slug' }} />
			</div>
		</section>
	)
}
