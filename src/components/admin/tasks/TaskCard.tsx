'use client'

import { Button } from '@/components/ui/button'
import { lato } from '@/fonts'
import { cn } from '@/lib/utils'
import { GripVertical, PencilLine, Star, Trash } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

interface CourseCardProps {}

export const TaskCard: FC<CourseCardProps> = ({}) => {
	const { push } = useRouter()

	return (
		<div className='w-full border flex flex-col lg:flex-row items-center justify-between border-border p-4 rounded-xl'>
			<div className='flex gap-2 items-center'>
				<GripVertical size={17} className='text-primary hidden lg:block' />
				<Link href={'/course/tasks/1'} className='text-xl font-semibold'>
					Task name
				</Link>
			</div>

			<div className='flex flex-row lg:flex-col'>
				<span
					className={cn(
						'flex items-center ml-auto justify-center text-sm',
						lato.className
					)}
				>
					<Star size={12} className='text-primary' />
					4.8
				</span>

				<div className='flex gap-2 items-center'>
					<Button
						onClick={() => push('/admin/course/coursetasks/create')}
						variant={'ghost'}
						className='text-sm h-0 p-0 text-primary'
					>
						<PencilLine size={12} className='text-primary' />
						Edit task
					</Button>
					/
					<Button variant={'ghost'} className='text-sm h-0 p-0 text-primary'>
						<Trash size={12} className='text-primary' /> Delete Task{' '}
					</Button>
				</div>
			</div>
		</div>
	)
}
