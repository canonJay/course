'use client'

import { FC } from 'react'
import { GroupCard } from './GroupCard'

interface GroupsGroupeProps {}

export const GroupsGroupe: FC<GroupsGroupeProps> = ({}) => {
	return (
		<div className='flex mt-5 flex-col gap-2'>
			<GroupCard />
			<GroupCard />
			<GroupCard />
			<GroupCard />
		</div>
	)
}
