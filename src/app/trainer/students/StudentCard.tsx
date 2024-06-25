'use client'

import { lato } from '@/fonts'
import { cn } from '@/lib/utils'
import { Redo2 } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface StudentCardProps {}

export const StudentCard: FC<StudentCardProps> = ({}) => {
	return (
		<div className='w-full border border-border p-4 rounded-xl'>
			<div className='w-full flex items-center justify-between'>
				<div className='flex gap-3 text-sm font-medium text-primary'>
					<span>Title of the task</span>/<span>Group</span>/
					<span className='text-[#243036]'>
						It took to answer:{' '}
						<span className={cn('text-primary', lato.className)}>1h</span>
					</span>
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
					href={'/trainer/answer'}
					className='font-semibold text-lg lg:text-2xl'
				>
					Introduction to testing
				</Link>

				<span className='text-base flex items-center gap-2 text-primary'>
					{' '}
					<Redo2 /> Submit the answer
				</span>
			</div>
		</div>
	)
}
