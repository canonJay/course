'use client'

import { FC } from 'react'
import { ArhiveCard } from './ArhiveCard'

interface ArhiveGroupProps {}

export const ArhiveGroup: FC<ArhiveGroupProps> = ({}) => {
	return (
		<div className='flex mt-5 flex-col gap-2 pb-12'>
			<ArhiveCard />
			<ArhiveCard />
			<ArhiveCard />
			<ArhiveCard />
		</div>
	)
}
