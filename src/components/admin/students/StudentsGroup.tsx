'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Search } from 'lucide-react'
import { FC } from 'react'
import { StudentCard } from './StudentCard'

interface StudentsGroupProps {}

export const StudentsGroup: FC<StudentsGroupProps> = ({}) => {
	return (
		<div className='flex mt-5 flex-col gap-2'>
			<form className='w-full flex gap-2'>
				<Input placeholder='Student name' className='rounded-xl' />

				<Select>
					<SelectTrigger className='w-[480px] rounded-xl'>
						<SelectValue placeholder='All groups' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='1'>Group 1</SelectItem>
							<SelectItem value='2'>Group 2</SelectItem>
							<SelectItem value='3'>Group 3</SelectItem>
							<SelectItem value='4'>Group 4</SelectItem>
							<SelectItem value='5'>Group 5</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>

				<Select>
					<SelectTrigger className='w-[180px] rounded-xl'>
						<SelectValue placeholder='Active account' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='Active'>Active</SelectItem>
							<SelectItem value='Inactive'>Inactive</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>

				<Button className='bg-[#FA7A4B] px-8 rounded-2xl'>
					<Search size={15} className='text-white' />
				</Button>
			</form>

			<StudentCard />
			<StudentCard />
			<StudentCard />
			<StudentCard />
		</div>
	)
}
