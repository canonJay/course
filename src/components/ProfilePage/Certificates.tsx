'use client'

import { FC } from 'react'
import { CertificatComponent } from './CertificatComponent'

interface CertificatesProps {}

export const Certificates: FC<CertificatesProps> = ({}) => {
	return (
		<div className='w-full flex flex-col mt-4 '>
			<h3 className='text-2xl font-semibold'>My Certificates</h3>

			<div className='w-full flex flex-col mt-4 gap-3'>
				<CertificatComponent />
				<CertificatComponent />
				<CertificatComponent />
			</div>
		</div>
	)
}
