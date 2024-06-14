'use client'

import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { Check, Clock, MessageCircle, Star, X } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface ITask {
	title: string
	slug: string
}

interface TaskProps {
	variant: 'completed' | 'incorrectly' | 'review' | 'available' | 'notAvailabl'

	task: ITask
}

const TaskVariants = cva(
	'flex flex-col gap-[2px] px-3 py-3 border border-border rounded-xl',
	{
		variants: {
			variant: {
				completed: 'border-border ',
				incorrectly: 'border-primary ',
				review: ' border-border ',
				available: ' border-primary ',
				notAvailabl: ' border-border',
			},
		},
	}
)

export const Task: FC<TaskProps> = ({ variant, task }) => {
	return (
		<Link
			href={'/course/tasks/' + task.slug}
			className={TaskVariants({ variant })}
		>
			<div className='flex items-center justify-between'>
				{variant === 'completed' && (
					<span className='text-[#0F7C83] flex gap-2 items-center text-[10px]'>
						Task completed <Check size={12} />
					</span>
				)}

				{variant === 'incorrectly' && (
					<div className='flex flex-col'>
						<span className='text-[#830F19] flex gap-2 items-center text-[10px]'>
							Task was solved incorrectly <X size={12} />
						</span>

						<span className='text-[#A7AEB8] flex gap-2 leading-[8px] items-center text-[10px]'>
							Consult with a trainer and try to solve the task again
						</span>
					</div>
				)}

				{variant === 'review' && (
					<div className='flex flex-col'>
						<span className='text-[#FA7A4B] flex gap-2 items-center text-[10px]'>
							Task was solved incorrectly <Clock size={12} />
						</span>

						<span className='text-[#A7AEB8] flex gap-2 leading-[8px] items-center text-[10px]'>
							The trainer checks your task. Wait for a decision...
						</span>
					</div>
				)}

				{variant === 'available' && (
					<div className='flex flex-col'>
						<span className='text-[#830F19]  flex gap-2 items-center text-[10px]'>
							Task was solved incorrectly
						</span>
					</div>
				)}

				{variant === 'notAvailabl' && (
					<div className='flex flex-col'>
						<span className='text-[#A7AEB8]  flex gap-2 items-center text-[10px]'>
							Task was solved incorrectly
						</span>
					</div>
				)}

				{variant !== 'notAvailabl' && (
					<MessageCircle size={18} className='text-[#A7AEB8]' />
				)}
			</div>
			<div className='flex items-center justify-between'>
				<span
					className={cn(
						'text-lg font-semibold',
						variant === 'notAvailabl' && 'text-[#A7AEB8]'
					)}
				>
					{task.title}
				</span>

				<span
					className={cn(
						'font-semibold text-xs flex gap-2 items-center',
						variant === 'notAvailabl' && 'text-[#A7AEB8]'
					)}
				>
					March, 3rd
					<span
						className={cn(
							'text-primary',
							variant === 'notAvailabl' && 'text-[#A7AEB8]'
						)}
					>
						<Star size={16} />
					</span>
					4.8{' '}
				</span>
			</div>
		</Link>
	)
}
