'use client'

import { FC } from 'react'
import { GroupCard } from './GroupCard'

interface GropesGroupsProps {}

export const GropesGroups: FC<GropesGroupsProps> = ({}) => {
	return (
		<div className='flex mt-5 flex-col gap-2'>
			<GroupCard />
			<GroupCard />
			<GroupCard />
			<GroupCard />
		</div>
	)
}
