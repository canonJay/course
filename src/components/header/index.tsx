import { getUserSsrData } from '@/actiots/actions'
import { ChevronDown, List, LogIn } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { AuthForm } from '../AuthForm/AuthForm'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import Container from '../container/container'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export const Header = async ({}) => {
	const user = await getUserSsrData()

	console.log(user)

	return (
		<header>
			<Container>
				<div className='w-full flex justify-between py-4'>
					<Image
						className='lg:hidden'
						src={'/mobilelogo.svg'}
						alt={'logo'}
						width={56}
						height={21}
					/>

					<Image
						className='hidden lg:block'
						src={'/logo.svg'}
						alt={'logo'}
						width={200}
						height={42}
					/>

					<ul className='hidden lg:flex gap-8 items-center'>
						<li className='text-base text-primary'>
							<Link href={'/admin/course'}>Courses</Link>
						</li>

						<li className='text-base '>
							<Link href={'/admin/groups'}>Groups</Link>
						</li>

						<li className='text-base '>
							<Link href={'/admin/trainers'}>Trainers</Link>
						</li>

						<li className='text-base '>
							<Link href={'/admin/students'}>Students</Link>
						</li>

						<li className='text-base'>
							<DropdownMenu>
								<DropdownMenuTrigger>
									<Link className='flex items-center gap-2' href={'#'}>
										Account <ChevronDown size={16} />
									</Link>
								</DropdownMenuTrigger>

								<DropdownMenuContent className='flex  justify-center flex-col items-center p-2'>
									<Dialog>
										<DialogTrigger className='flex justify-start' asChild>
											<Button
												className='font-medium flex  justify-start gap-1 p-1 border-b border-border'
												variant={'ghost'}
											>
												<LogIn color={'#BB2734'} size={18} /> Login to account
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
												<List color={'#BB2734'} size={18} /> Create an account
											</Button>
										</DialogTrigger>

										<DialogContent className='h-full mt-[260px] lg:flex lg:flex-row p-0 lg:h-auto lg:mt-0'>
											<AuthForm isLogin={false} />
										</DialogContent>
									</Dialog>
								</DropdownMenuContent>
							</DropdownMenu>
						</li>
					</ul>

					<div className='hidden lg:block'>
						<DropdownMenu>
							<DropdownMenuTrigger>
								<span className='flex items-center text-base gap-0'>
									En <ChevronDown color={'#BB2734'} size={16} />
								</span>
							</DropdownMenuTrigger>

							<DropdownMenuContent className='px-1 absolute right-[-15px]'>
								<DropdownMenuItem className='flex justify-center px-1 items-center gap-2'>
									<Link className='flex flex-col' href={'#'}>
										En
										<Image
											src={'/mobilelogo.svg'}
											alt={'en'}
											width={15}
											height={15}
										/>
									</Link>
									<Link href={'#'}>De</Link>
									<Link href={'#'}>Ru</Link>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					<BurgerMenu />
				</div>
			</Container>
		</header>
	)
}
