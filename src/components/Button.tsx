'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useSwiper } from 'swiper/react'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Button } from './ui/button'

export function Buttons() {
	const swiper = useSwiper()
	const [active, setActive] = useState<number>(swiper.realIndex)

	return (
		<div className='w-full flex justify-center lg:justify-start items-center lg:mt-56 '>
			<button
				onClick={() => {
					swiper.slidePrev()
					setActive(active - 1)
				}}
				className='w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-black hover:bg-white/80 dark:bg-slate-800/90 dark:text-white dark:hover:bg-slate-800'
			>
				<ChevronLeft className='w-4 h-4' />
			</button>

			<div className='flex gap-2 items-center'>
				<Button
					variant={'ghost'}
					className='p-0'
					onClick={() => {
						swiper.slideTo(0)
						setActive(0)
					}}
				>
					<span
						className={
							(cn('border border-border rounded-full p-1'),
							active === 0
								? 'border border-primary rounded-full p-1 bg-primary '
								: 'border border-border rounded-full p-1')
						}
					></span>
				</Button>

				<Button
					variant={'ghost'}
					className='p-0'
					onClick={() => {
						swiper.slideTo(1)
						setActive(1)
					}}
				>
					<span
						className={
							(cn('border border-border rounded-full p-1'),
							active === 1
								? 'border border-primary rounded-full p-1 bg-primary '
								: 'border border-border rounded-full p-1')
						}
					></span>
				</Button>
			</div>

			<button
				onClick={() => {
					swiper.slideNext()
					setActive(active + 1)
				}}
				className='w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-black hover:bg-white/80 dark:bg-slate-800/90 dark:text-white dark:hover:bg-slate-800'
			>
				<ChevronRight className='w-4 h-4' />
			</button>
		</div>
	)
}
