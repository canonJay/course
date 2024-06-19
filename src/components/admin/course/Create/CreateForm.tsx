'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { ImageDown } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

interface CreateFormProps {}

export const CreateForm: FC<CreateFormProps> = ({}) => {
	return (
		<form className='w-full mt-8'>
			<span className='flex items-center gap-2 text-sm font-medium text-[#A7AEB8]'>
				<Image
					src={'/mobilelogo.svg'}
					width={24}
					height={6}
					alt='mobilelogo'
				></Image>
				The name of the course will be displayed in all lists (for trainers,
				administrators and students).
			</span>

			<div className='w-full mt-2 flex justify-between items-center'>
				<h3 className='text-2xl font-bold'>Course name</h3>

				<div className='flex gap-3 items-center'>
					<span className='text-primary text-sm underline'>En</span>
					<span className='text-[#A7AEB8] text-sm '>De</span>
					<span className='text-[#A7AEB8] text-sm '>Ru</span>
				</div>
			</div>

			<Input
				className='w-full placeholder:text-[#A7AEB8] mt-3 p-5 rounded-2xl'
				placeholder='Enter course name...'
			/>

			<span className='flex items-center mt-8 gap-2 text-sm font-medium text-[#A7AEB8]'>
				<Image
					src={'/mobilelogo.svg'}
					width={24}
					height={6}
					alt='mobilelogo'
				></Image>
				The description will be displayed on the group page (for trainers and
				administrators).
			</span>

			<div className='w-full mt-2 flex justify-between items-center'>
				<h3 className='text-2xl font-bold'>Course Description</h3>

				<div className='flex gap-3 items-center'>
					<span className='text-primary text-sm underline'>En</span>
					<span className='text-[#A7AEB8] text-sm '>De</span>
					<span className='text-[#A7AEB8] text-sm '>Ru</span>
				</div>
			</div>

			<textarea
				name=''
				className='w-full border border-border text-sm p-5 rounded-2xl h-[200px] mt-4'
				placeholder='Enter your answer...'
				id=''
			></textarea>

			<span className='flex items-center mt-12 gap-2 text-sm font-medium text-[#A7AEB8]'>
				<Image
					src={'/mobilelogo.svg'}
					width={24}
					height={6}
					alt='mobilelogo'
				></Image>
				The image will be displayed on the group page (for trainers and
				administrators).
			</span>

			<h3 className='text-2xl mt-2 font-bold'>Add an image</h3>

			<div className='relative'>
				<input type='file' className='opacity-0 absolute w-0' id='file' />

				<Label
					htmlFor='file'
					className=' mt-3 px-6 py-2 flex w-36 justify-center items-center gap-1 rounded-2xl bg-primary text-white text-sm font-semibold'
				>
					Select File <ImageDown size={18} />
				</Label>
			</div>

			<span className='flex items-center mt-12 gap-2 text-sm font-medium text-[#A7AEB8]'>
				<Image
					src={'/mobilelogo.svg'}
					width={24}
					height={6}
					alt='mobilelogo'
				></Image>
				The video will be shown to the student after passing the exam.
			</span>

			<h3 className='text-2xl mt-2 font-bold'>Add a motivational video</h3>

			<div className='relative'>
				<input type='file' className='opacity-0 absolute w-0' id='file' />

				<Label
					htmlFor='file'
					className=' mt-3 px-6 py-2 flex w-36 justify-center items-center gap-1 rounded-2xl bg-primary text-white text-sm font-semibold'
				>
					Select File <ImageDown size={18} />
				</Label>
			</div>

			<span className='flex items-center gap-2 mt-12 text-sm font-medium text-[#A7AEB8]'>
				<Image
					src={'/mobilelogo.svg'}
					width={24}
					height={6}
					alt='mobilelogo'
				></Image>
				Feature for students.
			</span>

			<div className='w-full mt-2 flex justify-between items-center'>
				<h3 className='text-2xl font-bold'>
					Redirect to URL when clicking on course
				</h3>

				<Switch />
			</div>

			<Input
				className='w-full placeholder:text-[#A7AEB8] mt-3 p-5 rounded-2xl'
				placeholder='Enter course name...'
			/>

			<span className='flex items-center gap-2 mt-12 text-sm font-medium text-[#A7AEB8]'>
				<Image
					src={'/mobilelogo.svg'}
					width={24}
					height={6}
					alt='mobilelogo'
				></Image>
				The duration of the course is displayed for the administrator and the
				student.
			</span>

			<div className='w-full mt-2 flex justify-between items-center'>
				<h3 className='text-2xl font-bold'>Duration of the course</h3>
			</div>

			<div className='flex gap-2 items-center'>
				<Input
					placeholder='...'
					className='w-10 h-10 p-2 flex justify-center items-center'
				/>

				<span className='text-sm font-medium'>hours</span>
			</div>

			<div className='flex justify-center items-center py-12'>
				<Button className='rounded-2xl bg-primary text-white font-semibold px-8'>
					Create Course
				</Button>
			</div>
		</form>
	)
}
