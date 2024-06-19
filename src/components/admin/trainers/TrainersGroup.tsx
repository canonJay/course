'use client'

import { FC } from 'react'
import { TrainerCard } from './TrainerCrad'

interface TasksGroupProps {}

export const TrainerGroup: FC<TasksGroupProps> = ({}) => {
	return (
		<div className='flex mt-5 flex-col gap-2'>
			<TrainerCard />
			<TrainerCard />
			<TrainerCard />
			<TrainerCard />
		</div>
	)
}
