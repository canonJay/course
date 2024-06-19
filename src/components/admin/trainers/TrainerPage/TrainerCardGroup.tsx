'use client'

import { lato } from '@/fonts'
import { cn } from '@/lib/utils'
import { FC } from 'react'

interface TrainerCardGroupProps {}

export const TrainerCardGroup: FC<TrainerCardGroupProps> = ({}) => {
	return (
		<div className='w-full border border-border p-4 rounded-xl'>
			<div className='w-full flex items-center justify-between'>
				<div className='flex gap-3 text-sm font-medium text-primary'>
					<span className='text-[#243036]'>
						Students in group:{' '}
						<span className={cn('text-primary', lato.className)}>20</span>
					</span>
					/<span>Active group task</span>
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
				<h3 className='font-semibold text-lg lg:text-2xl'>
					Introduction to testing
				</h3>
			</div>
		</div>
	)
}
