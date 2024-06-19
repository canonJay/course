'use client'

import { List, LogIn, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { AuthForm } from '../AuthForm/AuthForm'
import Container from '../container/container'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'

interface BurgerMenuProps {}

export const BurgerMenu: FC<BurgerMenuProps> = ({}) => {
	const [open, setOpen] = useState<boolean>(false)

	return (
		<>
			<Button
				className='p-0 lg:hidden'
				variant={'ghost'}
				onClick={() => setOpen(!open)}
			>
				<Image src={'/menu.svg'} alt={'menu'} width={30} height={30} />
			</Button>

			{open && (
				<div className='z-50 absolute flex flex-col top-0 left-0 w-screen h-screen p-4 py-6 bg-white'>
					<Container>
						<div className='w-full flex justify-between'>
							<Image
								src={'/mobilelogo.svg'}
								alt={'logo'}
								width={46}
								height={11}
							/>

							<Button
								variant={'ghost'}
								onClick={() => setOpen(false)}
								className='flex items-center p-0 gap-2'
							>
								<span className='text-base text-primary'>Close</span>

								<X className='text-primary' size={18} />
							</Button>
						</div>

						<div>
							<ul className='w-full flex flex-col mt-60 gap-7 justify-center items-center '>
								<li>
									<Link className='text-3xl font-semibold' href={'#'}>
										All courses
									</Link>
								</li>
								<li>
									<Link className='text-3xl font-semibold' href={'#'}>
										Active courses
									</Link>
								</li>
								<li>
									<Link className='text-3xl font-semibold' href={'#'}>
										My questions
									</Link>
								</li>
								<li className='text-base'>
									<DropdownMenu>
										<DropdownMenuTrigger>
											<Link className='text-3xl font-semibold' href={'#'}>
												Account
											</Link>
										</DropdownMenuTrigger>

										<DropdownMenuContent className='flex  justify-center flex-col items-center p-2'>
											<Dialog>
												<DialogTrigger className='flex justify-start' asChild>
													<Button
														className='font-medium flex  justify-start gap-1 p-1 border-b border-border'
														variant={'ghost'}
													>
														<LogIn color={'#BB2734'} size={18} /> Login to
														account
													</Button>
												</DialogTrigger>

												<DialogContent className='h-full mt-[390px] lg:flex lg:flex-row p-0 lg:h-auto lg:mt-0'>
													<AuthForm isLogin />
												</DialogContent>
											</Dialog>

											<Dialog>
												<DialogTrigger className='flex justify-start' asChild>
													<Button
														className='font-medium flex gap-1 justify-start p-1 border-b border-border'
														variant={'ghost'}
													>
														<List color={'#BB2734'} size={18} /> Create an
														account
													</Button>
												</DialogTrigger>

												<DialogContent className='h-full mt-[260px] lg:flex lg:flex-row p-0 lg:h-auto lg:mt-0'>
													<AuthForm isLogin={false} />
												</DialogContent>
											</Dialog>
										</DropdownMenuContent>
									</DropdownMenu>
								</li>

								<div className='w-[20px] h-[1px] bg-primary'></div>

								<li>
									<Link
										className='text-3xl font-semibold text-primary'
										href={'#'}
									>
										Report a bug
									</Link>
								</li>
							</ul>
						</div>
					</Container>
					<div className='mt-auto w-full flex justify-center items-center'>
						<Button
							className='font-bold text-2xl text-[#A7AEB8]'
							variant={'ghost'}
						>
							Ru
						</Button>
						<Button className='font-bold text-2xl text-black' variant={'ghost'}>
							En
						</Button>
						<Button
							className='font-bold text-2xl text-[#A7AEB8]'
							variant={'ghost'}
						>
							De
						</Button>
					</div>
				</div>
			)}
		</>
	)
}
