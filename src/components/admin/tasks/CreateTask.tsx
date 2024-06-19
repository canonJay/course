'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { ImageDown, PlusCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface CreateTaskProps {}

export const CreateTask: FC<CreateTaskProps> = ({}) => {
	return (
		<form className='w-full mt-8'>
			<span className='flex items-center gap-2 text-sm font-medium text-[#A7AEB8]'>
				<Image
					src={'/mobilelogo.svg'}
					width={24}
					height={6}
					alt='mobilelogo'
				></Image>
				The name of the task will be displayed in all lists (for trainers,
				administrators and students).
			</span>

			<div className='w-full mt-2 flex justify-between items-center'>
				<h3 className='text-2xl font-bold'>Task name</h3>

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
				The description will be displayed on the task page (for trainers,
				administrators and students).
			</span>

			<div className='w-full mt-2 flex justify-between items-center'>
				<h3 className='text-2xl font-bold'>Task Description</h3>

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

			<span className='flex items-center mt-8 gap-2 text-sm font-medium text-[#A7AEB8]'>
				<Image
					src={'/mobilelogo.svg'}
					width={24}
					height={6}
					alt='mobilelogo'
				></Image>
				The answer to the task will be available only to the trainer.
			</span>

			<div className='w-full mt-2 flex justify-between items-center'>
				<h3 className='text-2xl font-bold'>Answer to the task</h3>

				<div className='flex gap-3 items-center'>
					<span className='text-primary text-sm underline'>En</span>
					<span className='text-[#A7AEB8] text-sm '>De</span>
					<span className='text-[#A7AEB8] text-sm '>Ru</span>
				</div>
			</div>

			<textarea
				name=''
				className='w-full border border-border text-sm p-5 rounded-2xl h-[180px] mt-4'
				placeholder='Enter the answer to the task...'
				id=''
			></textarea>

			<span className='flex items-center mt-8 gap-2 text-sm font-medium text-[#A7AEB8]'>
				<Image
					src={'/mobilelogo.svg'}
					width={24}
					height={6}
					alt='mobilelogo'
				></Image>
				A hint for the assignment will be available to the student.
			</span>

			<div className='w-full mt-2 flex justify-between items-center'>
				<h3 className='text-2xl font-bold'>Hint for the task</h3>

				<div className='flex gap-3 items-center'>
					<span className='text-primary text-sm underline'>En</span>
					<span className='text-[#A7AEB8] text-sm '>De</span>
					<span className='text-[#A7AEB8] text-sm '>Ru</span>
				</div>
			</div>

			<textarea
				name=''
				className='w-full border border-border text-sm p-5 rounded-2xl h-[120px] mt-4'
				placeholder='Enter a hint for the task...'
				id=''
			></textarea>

			<span className='flex items-center mt-8 gap-2 text-sm font-medium text-[#A7AEB8]'>
				<Image
					src={'/mobilelogo.svg'}
					width={24}
					height={6}
					alt='mobilelogo'
				></Image>
				Selecting a bug category for a task.
			</span>

			<h3 className='text-2xl font-bold mt-2'>Selecting a task category</h3>

			<Select>
				<SelectTrigger className='w-[280px] mt-4 rounded-2xl '>
					<SelectValue placeholder='Authentication form' />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value='1'>Yas</SelectItem>
						<SelectItem value='2'>No</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>

			<span className='flex items-center mt-8 gap-2 text-sm font-medium text-[#A7AEB8]'>
				<Image
					src={'/mobilelogo.svg'}
					width={24}
					height={6}
					alt='mobilelogo'
				></Image>
				Select the bugs that will be in the task.
			</span>

			<h3 className='text-2xl font-bold mt-2'>Active bugs in the task</h3>

			<div className='flex justify-between'>
				<div className='w-1/2 flex flex-col py-2 gap-2'>
					<div>
						<div className='flex items-center space-x-2'>
							<Checkbox id='1' />
							<Label htmlFor='1'>Bug</Label>
						</div>
					</div>

					<div>
						<div className='flex items-center space-x-2'>
							<Checkbox id='2' />
							<Label htmlFor='2'>Bug</Label>
						</div>
					</div>

					<div>
						<div className='flex items-center space-x-2'>
							<Checkbox id='3' />
							<Label htmlFor='3'>Bug</Label>
						</div>
					</div>
				</div>
				<div className='w-1/2'>
					<div className='w-1/2 flex flex-col py-2 gap-2'>
						<div>
							<div className='flex items-center space-x-2'>
								<Checkbox id='4' />
								<Label htmlFor='4'>Bug</Label>
							</div>
						</div>

						<div>
							<div className='flex items-center space-x-2'>
								<Checkbox id='5' />
								<Label htmlFor='5'>Bug</Label>
							</div>
						</div>

						<div>
							<div className='flex items-center space-x-2'>
								<Checkbox id='6' />
								<Label htmlFor='6'>Bug</Label>
							</div>
						</div>
					</div>
				</div>
			</div>

			<span className='flex items-center mt-8 gap-2 text-sm font-medium text-[#A7AEB8]'>
				<Image
					src={'/mobilelogo.svg'}
					width={24}
					height={6}
					alt='mobilelogo'
				></Image>
				Adding a test part for the student.
			</span>

			<div className='w-full mt-2 flex justify-between items-center'>
				<h3 className='text-2xl font-bold'>Test</h3>

				<div className='flex gap-3 items-center'>
					<span className='text-primary text-sm underline'>En</span>
					<span className='text-[#A7AEB8] text-sm '>De</span>
					<span className='text-[#A7AEB8] text-sm '>Ru</span>
				</div>
			</div>

			<textarea
				name=''
				className='w-full border border-border text-sm p-5 rounded-2xl h-[120px] mt-4'
				placeholder='Enter a hint for the task...'
				id=''
			></textarea>

			<div className='w-full mt-6 flex justify-between items-center'>
				<h3 className='text-2xl font-bold'>Answer options</h3>

				<div className='flex gap-3 items-center'>
					<span className='text-primary text-sm underline'>En</span>
					<span className='text-[#1d1e1f] text-sm '>De</span>
					<span className='text-[#A7AEB8] text-sm '>Ru</span>
				</div>
			</div>

			<div className='flex items-center mt-5'>
				<span className='text-sm w-[160px] text-primary flex items-center gap-3'>
					<PlusCircle className='w-4 h-4' />
					Add an option
				</span>
				<Input
					className='w-full placeholder:text-[#A7AEB8] p-5 rounded-2xl'
					placeholder='Enter an option...'
				/>
			</div>

			<div className='w-full mt-6 flex justify-between items-center'>
				<h3 className='text-2xl font-bold'>Choose the correct answers</h3>

				<div className='flex gap-3 items-center'>
					<span className='text-primary text-sm underline'>En</span>
					<span className='text-[#1d1e1f] text-sm '>De</span>
					<span className='text-[#A7AEB8] text-sm '>Ru</span>
				</div>
			</div>

			<div className='flex flex-col pt-6 gap-3'>
				<div>
					<div className='flex items-center space-x-2'>
						<Checkbox id='4' />
						<Label htmlFor='4'>Bug</Label>
					</div>
				</div>

				<div>
					<div className='flex items-center space-x-2'>
						<Checkbox id='4' />
						<Label htmlFor='4'>Bug</Label>
					</div>
				</div>

				<div>
					<div className='flex items-center space-x-2'>
						<Checkbox id='4' />
						<Label htmlFor='4'>Bug</Label>
					</div>
				</div>
			</div>

			<span className='flex items-center mt-12 gap-2 text-sm font-medium text-[#A7AEB8]'>
				<Image
					src={'/mobilelogo.svg'}
					width={24}
					height={6}
					alt='mobilelogo'
				></Image>
				The student will see this video before taking the task.
			</span>

			<h3 className='text-2xl mt-2 font-bold'>
				Motivational video (before the task)
			</h3>

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
				The student will see this video after completing the task.
			</span>

			<h3 className='text-2xl mt-2 font-bold'>
				Motivational video (after the task)
			</h3>

			<div className='relative'>
				<input type='file' className='opacity-0 absolute w-0' id='file' />

				<Label
					htmlFor='file'
					className=' mt-3 px-6 py-2 flex w-36 justify-center items-center gap-1 rounded-2xl bg-primary text-white text-sm font-semibold'
				>
					Select File <ImageDown size={18} />
				</Label>
			</div>

			<div className='flex justify-center items-center gap-2 py-12'>
				<Link
					className='bg-border px-8 text-sm font-semibold rounded-2xl h-9 flex justify-center items-center'
					href={'/course/tasks/123'}
				>
					Task preview
				</Link>
				<Button className='rounded-2xl bg-primary text-white font-semibold px-8'>
					Create task
				</Button>
			</div>
		</form>
	)
}
