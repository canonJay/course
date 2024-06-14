'use client'

import { FC } from 'react'

interface PlayerProps {}

export const Player: FC<PlayerProps> = ({}) => {
	return (
		<div>
			<video autoPlay width={'100%'} height={'100%'} src='/630869.mp4'></video>
		</div>
	)
}
