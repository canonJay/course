'use client'

import { lato } from '@/fonts'
import { Check, Mail } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface CourseCardProps {}

export const TrainerCard: FC<CourseCardProps> = ({}) => {
	return (
		<div className='w-full border border-border p-4 rounded-xl'>
			<div className='w-full flex items-center justify-between'>
				<div className='flex gap-3 text-sm font-medium text-primary'>
					<span className=''>
						Group <span className={lato.className}>1</span>
					</span>
					/
					<span>
						Group <span className={lato.className}>2</span>
					</span>
					/
					<span>
						Group <span className={lato.className}>3</span>
					</span>
				</div>

				<div className='flex items-center gap-2'>
					<span className='flex items-center gap-1 text-[11px] font-semibold '>
						<Mail size={13} className='text-primary' /> alma.lawson@example.com
					</span>
				</div>
			</div>

			<div className='w-full flex items-center justify-between'>
				<Link
					href={'/admin/trainers/1313'}
					className='font-semibold text-lg lg:text-2xl'
				>
					Trainer's full name
				</Link>

				<span className='flex items-center text-[#0F7C83] gap-1 text-sm font-semibold'>
					<Check size={15} /> Active course
				</span>
			</div>
		</div>
	)
}
