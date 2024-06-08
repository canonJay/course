import { Copyright, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../container/container'

export function Footer() {
	return (
		<footer className='w-full mt-auto bg-[#f9fafb] py-6'>
			<Container>
				<div className='flex flex-col lg:flex-row lg:justify-between justify-center items-center'>
					<Image src={'/footerlogo.svg'} alt={'logo'} width={200} height={42} />

					<div className='w-full lg:w-auto'>
						<ul className='w-full flex mt-6 lg:gap-2 justify-between'>
							<li className='text-base'>
								<Link href={'/'}>All courses</Link>
							</li>
							<li className='text-base'>Account</li>
							<li className='text-base'>About company</li>
						</ul>

						<div className=' w-full lg:hidden flex justify-between mt-2'>
							<span className='text-[8px] flex items-center gap-1 text-[#A7AEB8]'>
								<Copyright size={8} /> WAMOCON Academy 2000-3000 г.
							</span>
							<span className='text-[8px] flex items-center text-[#A7AEB8]'>
								Confidentiality, terms and conditions
							</span>
						</div>

						<span className='text-[#243036] w-full justify-center items-center text-center mt-4 flex gap-2 text-xs'>
							<Heart size={14} color={'#27BB86'} /> Developed by{' '}
							<span className='text-[#27BB86] uppercase'>Leafcode</span> team
						</span>
					</div>
				</div>
				<div className=' w-full hidden lg:flex  justify-between mt-2'>
					<span className='text-[8px] flex items-center gap-1 text-[#A7AEB8]'>
						<Copyright size={8} /> WAMOCON Academy 2000-3000 г.
					</span>
					<span className='text-[8px] flex items-center text-[#A7AEB8]'>
						Confidentiality, terms and conditions
					</span>
				</div>
			</Container>
		</footer>
	)
}
