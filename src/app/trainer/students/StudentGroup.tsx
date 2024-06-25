'use client'

import { FC } from 'react'
import { StudentCard } from './StudentCard'

interface StudentGroupProps {}

export const StudentGroup: FC<StudentGroupProps> = ({}) => {
	return (
		<div className='flex mt-5 flex-col gap-2'>
			<StudentCard />
			<StudentCard />
			<StudentCard />
			<StudentCard />
		</div>
	)
}
