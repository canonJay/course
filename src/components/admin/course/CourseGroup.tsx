'use client'

import { FC } from 'react'
import { CourseCard } from './CourseCard'

interface CourseGroupProps {}

export const CourseGroup: FC<CourseGroupProps> = ({}) => {
	return (
		<div className='flex mt-5 flex-col gap-2'>
			<CourseCard />
			<CourseCard />
			<CourseCard />
			<CourseCard />
		</div>
	)
}
