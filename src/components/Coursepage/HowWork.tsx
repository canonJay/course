'use client'

import Image from 'next/image'
import Container from '../container/container'

import { lato } from '@/fonts'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Buttons } from '../Button'

export function HowWork() {
	return (
		<section className='w-full mt-12 py-12'>
			<Container>
				<div className='w-full flex flex-col lg:flex-row lg:gap-12'>
					<div className='lg:w-[320px]'>
						<Image
							src={'/mobilelogo.svg'}
							alt={'mobilelogo'}
							width={30}
							height={8}
						/>

						<h2 className='text-2xl lg:text-3xl font-semibold mt-4'>
							How does training work on the platform?
						</h2>

						<Swiper slidesPerView={1}>
							<SwiperSlide>
								<div className='mt-4'>
									<h3 className='text-lg font-semibold'>
										<span className='text-primary'>
											Step <span className={lato.className}>1</span>.{' '}
										</span>
										Registration
									</h3>

									<span className='text-base font-medium mt-4 text-[#A7AEB8]'>
										To begin a course, you must submit a request to enroll in
										the course. Once the request is approved, you can begin
										studying the material.
									</span>

									<div className='lg:hidden'>
										<Image
											className='mt-8'
											src={'/howwork.png'}
											alt='how work'
											width={538}
											height={538}
										/>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='mt-4'>
									<h3 className='text-lg font-semibold'>
										<span className='text-primary'>
											Step <span className={lato.className}>2</span>.{' '}
										</span>
										Registration
									</h3>

									<span className='text-base font-medium mt-4 text-[#A7AEB8]'>
										To begin a course, you must submit a request to enroll in
										the course. Once the request is approved, you can begin
										studying the material.
									</span>

									<div className='lg:hidden'>
										<Image
											className='mt-8'
											src={'/howwork.png'}
											alt='how work'
											width={538}
											height={538}
										/>
									</div>
								</div>
							</SwiperSlide>

							<Buttons />
						</Swiper>
					</div>

					<div className='hidden lg:block'>
						<Image
							priority
							src={'/howwork2.png'}
							alt='how work'
							width={2140}
							height={465}
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}
