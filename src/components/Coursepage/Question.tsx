import Image from 'next/image'
import Container from '../container/container'

export function Question() {
	return (
		<section className='w-full mt-12 bg-[#F0F1F3] py-6'>
			<Container>
				<div className='w-full flex flex-col lg:flex-row lg:justify-between lg:gap-12 mt-6 py-12'>
					<div>
						<Image
							src={'/mobilelogo.svg'}
							alt={'mobilelogo'}
							width={30}
							height={8}
						/>
						<h2 className='text-2xl lg:text-3xl  font-semibold mt-3'>
							Why are testers a <br className='lg:block hidden' /> sought-after
							profession?
						</h2>
					</div>

					<span className='mt-4 lg:w-[740px] font-medium text-base text-[#243036]'>
						Internet resource testers play an important role in the development
						and maintenance of websites and Internet applications. Their mission
						is{' '}
						<span className='text-primary'>
							to ensure quality, reliability, safety and user satisfaction.
						</span>
						Testers help find and fix bugs and defects, verify functionality,
						appearance, performance and security, and meet user expectations.
						This helps{' '}
						<span className='text-primary'>
							maintain the organization's reputation, save time and resources,
							and ensure the security and ease of use of Internet resources.
						</span>
					</span>
				</div>
			</Container>
		</section>
	)
}
