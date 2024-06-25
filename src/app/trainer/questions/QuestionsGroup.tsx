'use client'

import { FC } from 'react'
import { QuestionsCard } from './QuestionsCard'

interface QuestionsGroupProps {}

export const QuestionsGroup: FC<QuestionsGroupProps> = ({}) => {
	return (
		<div className='flex mt-5 flex-col gap-2 pb-12'>
			<QuestionsCard />
			<QuestionsCard />
			<QuestionsCard />
			<QuestionsCard />
		</div>
	)
}
