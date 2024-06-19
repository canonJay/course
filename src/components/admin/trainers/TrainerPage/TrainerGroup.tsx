'use client'

import { FC } from 'react'
import { TrainerCardGroup } from './TrainerCardGroup'

interface TrainerGroupProps {}

export const TrainerGroup: FC<TrainerGroupProps> = ({}) => {
	return (
		<div className='flex mt-5 flex-col gap-2'>
			<TrainerCardGroup />
			<TrainerCardGroup />
			<TrainerCardGroup />
			<TrainerCardGroup />
		</div>
	)
}
