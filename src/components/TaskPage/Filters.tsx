import { lato } from '@/fonts'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, MessageCircleCode } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { Progress } from '../ui/progress'
import { Calendary } from './Calendary'

export function Filters() {
	return (
		<section className='w-full md:w-[620px]'>
			<div className='w-full flex gap-4 mt-4 pb-3 border-b border-border'>
				<Image
					src={'/testcoures.svg'}
					alt={'mobilelogo'}
					width={51}
					height={48}
				/>

				<h2 className='text-xl lg:text-2xl font-semibold'>
					Testing courses from WAMOCON ACADEMY
				</h2>
			</div>

			<div className='w-full flex flex-col gap-4 mt-4 pb-3 border-b border-border'>
				<div className='w-full flex justify-between items-center'>
					<h2 className='text-xl lg:text-2xl font-semibold'>
						March <span className={lato.className}>2024</span>
					</h2>

					<div className=' flex gap-2'>
						<ChevronLeft size={17} className='text-primary' />

						<ChevronRight size={17} className='text-primary' />
					</div>
				</div>
				<Calendary />
			</div>

			<div className='w-full mt-4'>
				<h2 className='text-xl lg:text-2xl font-semibold'>Your progress</h2>

				<div className='w-full flex flex-col  mt-3'>
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

			<div className='w-full mt-4'>
				<h2 className='text-xl lg:text-2xl font-semibold'>Reminder</h2>

				<Alert className='mt-3' variant={'orange'}>
					<MessageCircleCode size={20} />
					<AlertTitle>Trainer answered your question</AlertTitle>
					<AlertDescription>
						You can see the answer on the task page
					</AlertDescription>
				</Alert>
			</div>

			<div className='w-full mt-4'>
				<h2 className='text-xl lg:text-2xl font-semibold'>
					Course telegram chat
				</h2>

				<div className='w-full p-2 mt-4 gap-2 flex items-start bg-[#f0f1f3] rounded-xl'>
					<img src='/telegram.svg' className='mt-2' alt=' telegram ' />

					<div className='w-full'>
						<span className='text-sm font-medium '>
							<Link className='text-primary underline' href={'#'}>
								The course chat
							</Link>{' '}
							improves communication between participants, trainers and allows
							you to resolve questions and difficulties during the learning
							process.
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}
