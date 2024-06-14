'use client'

import { lato } from '@/fonts'
import { cn } from '@/lib/utils'
import { Download, FileCheck } from 'lucide-react'
import { FC } from 'react'
import { Button } from '../ui/button'

interface CertificatComponentProps {}

export const CertificatComponent: FC<CertificatComponentProps> = ({}) => {
	return (
		<div className='w-full flex flex-col border border-border rounded-2xl p-4'>
			<h4 className='text-xl font-semibold'>
				Testing courses from WAMOCON Academy
			</h4>

			<div className='flex flex-col lg:flex-row gap-4 mt-4'>
				<div className='w-full border-b border-border pb-4 lg:pb-0 lg:border-b-0 lg:border-r lg:pr-4'>
					<span className='flex items-center gap-2 mt-1 text-base font-semibold text-primary'>
						<FileCheck size={16} />
						Certificate for completing the course.
					</span>

					<span className='text-sm font-medium'>
						Certificate code:{' '}
						<span className={cn(lato.className, 'font-medium')}>
							{' '}
							1456_6758_99
						</span>
					</span>

					<Button className='mt-6 w-full   flex gap-2 font-bold rounded-[21px]'>
						Download certificate <Download size={18} />
					</Button>
				</div>
				<div className='w-full '>
					<span className='flex items-center gap-2 mt-1 text-base font-semibold text-primary'>
						<FileCheck size={16} />
						Certificate for passing the exam.
					</span>

					<span className='text-sm font-medium'>
						Certificate code:{' '}
						<span className={cn(lato.className, 'font-medium')}>
							{' '}
							1456_6758_99
						</span>
					</span>

					<Button className='mt-6 w-full   flex gap-2 font-bold rounded-[21px]'>
						Download certificate <Download size={18} />
					</Button>
				</div>
			</div>
		</div>
	)
}
