'use client'

import Link from 'next/link'
import { FC } from 'react'

interface QuestionsCardProps {}

export const QuestionsCard: FC<QuestionsCardProps> = ({}) => {
	return (
		<div className='w-full border border-border p-4 rounded-xl'>
			<div className='w-full flex items-center justify-between'>
				<div className='flex gap-3 text-sm font-medium text-primary'>
					<span>Title of the task</span>/<span>Group</span>/
				</div>

				<div className='flex items-center gap-2'>
					<span className='flex items-center gap-1 text-[11px] font-semibold '>
						March, 6th
					</span>
					/
					<span className='flex items-center gap-1 text-[11px] font-semibold'>
						2pm
					</span>
				</div>
			</div>

			<div className='w-full flex items-center justify-between'>
				<Link
					href={'/trainer/questions/3'}
					className='font-semibold text-lg lg:text-2xl'
				>
					Introduction to testing
				</Link>
			</div>

			<span className='text-base'>
				A software tester is a specialist who checks the functionality of an
				application, program or website. He looks for errors, makes sure that
				the web application does what the developers wanted it to do. The
				specialist launches the product on different platforms and operating
				systems to see how it will work there.
			</span>
		</div>
	)
}
