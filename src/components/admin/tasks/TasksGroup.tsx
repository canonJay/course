'use client'

import { FC } from 'react'
import { TaskCard } from './TaskCard'

interface TasksGroupProps {}

export const TasksGroup: FC<TasksGroupProps> = ({}) => {
	return (
		<div className='flex mt-5 flex-col gap-2'>
			<TaskCard />
			<TaskCard />
			<TaskCard />
			<TaskCard />
		</div>
	)
}
