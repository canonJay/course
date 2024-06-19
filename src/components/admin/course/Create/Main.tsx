'use client'

import Container from '@/components/container/container'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import Image from 'next/image'
import { CreateForm } from './CreateForm'

export default function Main() {
	return (
		<section>
			<Container>
				<div className='w-full mt-12 flex justify-between items-center'>
					<h1 className='text-3xl lg:text-5xl font-bold '>Create Course</h1>

					<span className='font-medium flex items-center gap-3'>
						<Dialog>
							<DialogTrigger>
								<Label className='font-medium text-base' htmlFor='active'>
									Active course
								</Label>
							</DialogTrigger>

							<DialogContent className='h-full flex flex-col mt-[800px] lg:h-auto lg:mt-0'>
								<Image src={'/logo.svg'} alt={'logo'} width={120} height={42} />

								<h2 className='text-2xl font-semibold mt-4'>
									Are you sure you want to activate the course?
								</h2>
								<span className='text-sm text-[#A7AEB8]'>
									All groups will have to be activated manually.
								</span>

								<Button onClick={() => {}} className='mt-4 w-full rounded-3xl'>
									Activate course
								</Button>
							</DialogContent>
						</Dialog>
						<Switch id='active' />
					</span>
				</div>

				<CreateForm />
			</Container>
		</section>
	)
}
