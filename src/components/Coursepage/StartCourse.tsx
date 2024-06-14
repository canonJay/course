'use client'

import { ChevronRight, Lightbulb } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

interface StartCourseProps {}

export const StartCourse: FC<StartCourseProps> = ({}) => {
	const [modalState, setModalState] = useState('register')

	const { push } = useRouter()

	return (
		<Dialog>
			<DialogTrigger>
				<span className='mt-6 bg-primary text-white justify-center items-center font-medium px-4 py-1 w-[160px] flex gap-2  rounded-[21px]'>
					Start now <ChevronRight size={18} />
				</span>
			</DialogTrigger>

			<DialogContent className='h-full mt-[20px] lg:flex lg:flex-row p-0 lg:h-auto lg:mt-0'>
				<>
					<div className='flex flex-col w-full p-8'>
						<Image src={'/logo.svg'} alt={'logo'} width={120} height={42} />

						<h2 className='text-2xl font-semibold mt-5'>
							Your application has been approved
						</h2>

						<span className='text-sm font-medium mt-1 text-[#A7AEB8]'>
							You can start training right now.{' '}
						</span>

						<h2 className='text-2xl w-[318px] font-semibold text-primary mt-16'>
							Testing courses from WAMOCON ACADEMY
						</h2>

						<span className='text-sm w-full mt-4 text-[#A7AEB8]'>
							Testing courses develop the skills and knowledge needed for a
							successful career in the field. Training includes theory, practice
							and mentor support. Our graduates are ready to start working as
							testers.
						</span>

						<Image
							className='lg:hidden m-auto rounded-xl'
							src={'/start.svg'}
							alt={'course'}
							width={436}
							height={479}
						/>

						<Button
							onClick={() => {
								push('/course/tasks')
								toast.custom(t => (
									<div className='shadow-2xl border border-border rounded-xl p-4 flex gap-2 items-center'>
										<Lightbulb size={18} className='text-primary' />

										<span className='text-sm font-semibold'>
											The application has been sent for consideration.
										</span>
									</div>
								))
							}}
							className=' font-medium px-4 py-1 lg:mt-[40px] flex gap-2  rounded-[21px]'
						>
							Start now <ChevronRight size={18} />
						</Button>
					</div>

					<Image
						className='hidden lg:block rounded-xl'
						src={'/start.svg'}
						alt={'course'}
						width={436}
						height={479}
					/>
				</>
			</DialogContent>
		</Dialog>
	)
}
