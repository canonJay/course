'use client'

import { Progress } from '@/components/ui/progress'
import { lato } from '@/fonts'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC } from 'react'

interface GroupCardProps {}

export const GroupCard: FC<GroupCardProps> = ({}) => {
	return (
		<div className='w-full border border-border p-4 rounded-xl'>
			<div className='w-full flex items-center justify-between'>
				<div className='flex gap-3 text-sm font-medium text-primary'>
					<span className='text-[#243036]'>
						Students:{' '}
						<span className={cn('text-primary', lato.className)}>15</span>
					</span>
					/
					<span className='text-[#243036]'>
						Trainers:{' '}
						<span className={cn('text-primary', lato.className)}>3</span>
					</span>
					/
					<span className='text-[#243036]'>
						Days from start of course:{' '}
						<span className={cn('text-primary', lato.className)}>21</span>
					</span>
					/
					<span className='text-[#243036]'>
						Questions not answered:{' '}
						<span className={cn('text-primary', lato.className)}>3</span>
					</span>
					/
					<span className='text-[#243036]'>
						Not verified answers:{' '}
						<span className={cn('text-primary', lato.className)}>3</span>
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

			<div className='w-full flex flex-col items-start'>
				<Link
					href={'/trainer/groups/1313'}
					className='font-semibold text-lg lg:text-2xl'
				>
					Introduction to testing
				</Link>
				<div className='w-96 flex flex-col  mt-2'>
					<span className='text-[13px] leading-4 font-bold '>
						Lesson{' '}
						<span className={cn(lato.className, 'text-primary')}>21</span> out
						of <span className={lato.className}>34</span> (
						<span className={lato.className}>62</span>%){' '}
					</span>

					<div className='w-full gap-2 flex mt-3'>
						<Progress value={100} />
						<Progress value={60} />
						<Progress value={0} />
					</div>
				</div>
			</div>
		</div>
	)
}
