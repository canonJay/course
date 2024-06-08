import Image from 'next/image'
import Container from '../container/container'

export function WeLearn() {
	return (
		<section className='w-full mt-12'>
			<Container>
				<div className='w-full flex flex-col lg:flex-row lg:gap-12 lg:justify-between'>
					<div className='lg:w-[1100px]'>
						<Image
							src={'/mobilelogo.svg'}
							alt={'mobilelogo'}
							width={30}
							height={8}
						/>

						<h2 className='text-2xl lg:text-3xl font-semibold mt-4'>
							What will you learn?
						</h2>

						<Image
							className='mt-4'
							src={'/whatwelearn.png'}
							alt='what we learn'
							width={370}
							height={370}
						/>
					</div>

					<div className='lg:flex'>
						<div className='w-full mt-10 flex flex-col gap-6'>
							<div className='flex flex-col lg:flex-row lg:gap-8'>
								<div className='w-full  flex flex-col gap-2'>
									<Image src={'/1.svg'} alt='icon' width={34} height={34} />
									<h3 className='text-lg font-semibold'>Testing Basics</h3>

									<span className='text-base font-medium text-[#A7AEB8]'>
										The basics of website testing include various techniques and
										processes aimed at finding and fixing errors and problems in
										web applications or websites.
									</span>
								</div>
								<div className='w-full flex  flex-col gap-2'>
									<Image src={'/2.svg'} alt='icon' width={34} height={34} />
									<h3 className='text-lg font-semibold'>Types of testing</h3>

									<span className='text-base font-medium text-[#A7AEB8]'>
										Types of testing are various types of software checks aimed
										at identifying errors and defects. There are several main
										types of testing, each of which has its own characteristics.
									</span>
								</div>
							</div>
							<div className='lg:flex lg:gap-8'>
								<div className='w-full flex  flex-col gap-2'>
									<Image src={'/3.svg'} alt='icon' width={34} height={34} />
									<h3 className='text-lg font-semibold'>Interface Testing</h3>

									<span className='text-base font-medium text-[#A7AEB8]'>
										Includes testing of graphic elements such as buttons, links,
										input fields, menus, icons and other visual components, as
										well as checking their correct interaction with scripts and
										program logic.
									</span>
								</div>
								<div className='w-full flex flex-col gap-2'>
									<Image src={'/4.svg'} alt='icon' width={34} height={34} />
									<h3 className='text-lg font-semibold'>Security testing</h3>

									<span className='text-base font-medium text-[#A7AEB8]'>
										Types of testing are various types of software checks aimed
										at identifying errors and defects. There are several main
										types of testing, each of which has its own characteristics.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
