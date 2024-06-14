'use client'

import { lato } from '@/fonts'
import { cn } from '@/lib/utils'
import { Check, Mail, PencilLine, Send, Smartphone } from 'lucide-react'
import { Progress } from '../ui/progress'

export function Profile() {
	return (
		<div className='flex flex-col mt-4 w-full lg:max-w-[360px]'>
			<h3 className='text-2xl font-semibold'>Student's Full Name</h3>
			<span className='flex mt-1 text-sm text-[#0F7C83] items-center gap-2'>
				<Check size={13} /> Active account
			</span>

			<div className='w-full h-[1px] bg-border mt-6'></div>

			<div className='flex justify-between items-center mt-4'>
				<h3 className='text-2xl font-semibold'>Contact details</h3>

				<button className='text-sm  font-semibold gap-2 text-primary '>
					<PencilLine size={16} /> Edit
				</button>
			</div>

			<div className='mt-4'>
				<span className='flex items-center gap-2 mt-1 text-base text-primary'>
					<Mail size={16} /> Email
				</span>

				<span className='w-full font-medium text-sm'>
					alma.lawson@example.com
				</span>
			</div>
			<div className='mt-4'>
				<span className='flex items-center gap-2 mt-1 text-base text-primary'>
					<Smartphone size={16} /> Phone number
				</span>

				<span className='w-full font-medium text-sm'>(406) 555-0120</span>
			</div>
			<div className='mt-4'>
				<span className='flex items-center gap-2 mt-1 text-base text-primary'>
					<Send size={16} />
					Telegram
				</span>

				<span className='w-full font-medium text-sm'>@almalawson</span>
			</div>

			<div className='w-full h-[1px] bg-border mt-6'></div>

			<h3 className='text-2xl mt-4 font-semibold'>
				Testing courses from WAMOCON Academy
			</h3>

			<div className='w-full flex flex-col  mt-2'>
				<span className='text-[13px] leading-4 font-bold '>
					Lesson <span className={cn(lato.className, 'text-primary')}>21</span>{' '}
					out of <span className={lato.className}>34</span> (
					<span className={lato.className}>62</span>%){' '}
				</span>

				<div className='w-full gap-2 flex mt-3'>
					<Progress value={100} />
					<Progress value={60} />
					<Progress value={0} />
				</div>
			</div>
		</div>
	)
}
