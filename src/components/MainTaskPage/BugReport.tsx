'use client'

import { axiosInstanceWithAuth } from '@/api/axios'
import { useMutation } from '@tanstack/react-query'
import { ShieldAlert } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

interface BugReportProps {}

export const BugReport: FC<BugReportProps> = ({}) => {
	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['bug-report'],
		mutationFn: async (data: {
			message: string
			task_id: number
			adminEmail: string
		}) => {
			axiosInstanceWithAuth.post('/task/warning')
		},
	})

	const [message, setMessage] = useState('')

	return (
		<Dialog>
			<DialogTrigger>
				<span className='p-0 text-sm hover:underline cursor-pointer flex items-center gap-2 text-primary'>
					<ShieldAlert size={16} /> Report a bug
				</span>
			</DialogTrigger>

			<DialogContent>
				<Image src={'/logo.svg'} alt={'logo'} width={120} height={42} />

				<h2 className='text-2xl font-semibold mt-4'>Report a bug</h2>
				<span className='text-sm text-[#A7AEB8]'>
					Describe in detail the bug you encountered.
				</span>

				<textarea
					onChange={e => setMessage(e.target.value)}
					className='h-[95px] p-4 border border-border rounded-md mt-4
							text-sm'
					value={message}
					placeholder='Enter a description of the bug...'
					id=''
				></textarea>

				<Button
					onClick={() => {
						mutate({
							task_id: 1,
							message,
							adminEmail: 'ganiev97_97@mail.ru',
						})
						push('/success')
					}}
					className='mt-4 w-full rounded-3xl'
				>
					Report a bug
				</Button>
			</DialogContent>
		</Dialog>
	)
}
