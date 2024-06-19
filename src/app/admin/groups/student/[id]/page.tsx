import { CertificatComponent } from '@/components/ProfilePage/CertificatComponent'
import { Profile } from '@/components/ProfilePage/Profile'
import Container from '@/components/container/container'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { Dot } from 'lucide-react'

export default function page() {
	return (
		<main>
			<Container>
				<Breadcrumb className='mt-3'>
					<BreadcrumbItem>
						<BreadcrumbPage>Account</BreadcrumbPage>
					</BreadcrumbItem>
				</Breadcrumb>
			</Container>

			<Container>
				<section className='flex flex-col gap-8 mt-7 lg:flex-row-reverse'>
					<Profile />
					<div className='w-full flex flex-col mt-4 '>
						<h3 className='text-2xl font-semibold'>Student Certificates</h3>

						<div className='w-full flex flex-col mt-4 gap-3'>
							<CertificatComponent />
						</div>

						<h3 className='text-2xl mt-8 font-semibold'>
							Tasks in which the student used a hint
						</h3>

						<div className='flex flex-col w-full pt-2 gap-3'>
							<div className='w-full border border-border p-4 rounded-xl flex justify-between'>
								<h3 className='text-xl font-semibold'>Lesson title</h3>

								<div className='flex gap-2 text-sm font-semibold items-center'>
									<span>March, 6th</span>/<span>2pm</span>
								</div>
							</div>

							<div className='w-full border border-border p-4 rounded-xl flex justify-between'>
								<h3 className='text-xl font-semibold'>Lesson title</h3>

								<div className='flex gap-2 text-sm font-semibold items-center'>
									<span>March, 6th</span>/<span>2pm</span>
								</div>
							</div>

							<div className='w-full border border-border p-4 rounded-xl flex justify-between'>
								<h3 className='text-xl font-semibold'>Lesson title</h3>

								<div className='flex gap-2 text-sm font-semibold items-center'>
									<span>March, 6th</span>/<span>2pm</span>
								</div>
							</div>

							<div className='w-full border border-border p-4 rounded-xl flex justify-between'>
								<h3 className='text-xl font-semibold'>Lesson title</h3>

								<div className='flex gap-2 text-sm font-semibold items-center'>
									<span>March, 6th</span>/<span>2pm</span>
								</div>
							</div>
						</div>

						<h3 className='text-2xl mt-8 font-semibold'>
							Page browsing history
						</h3>

						<div className='flex flex-col w-full pt-2 pb-12 gap-3'>
							<div className='w-full  rounded-xl flex justify-between'>
								<h3 className='text-md font-semibold flex gap-2 items-center'>
									<Dot size={18} className='text-primary' /> Page title
								</h3>

								<div className='flex gap-2 text-sm font-semibold items-center'>
									<span>March, 6th</span>/<span>2pm</span>
								</div>
							</div>

							<div className='w-full  rounded-xl flex justify-between'>
								<h3 className='text-md font-semibold flex gap-2 items-center'>
									<Dot size={18} className='text-primary' /> Page title
								</h3>

								<div className='flex gap-2 text-sm font-semibold items-center'>
									<span>March, 6th</span>/<span>2pm</span>
								</div>
							</div>

							<div className='w-full  rounded-xl flex justify-between'>
								<h3 className='text-md font-semibold flex gap-2 items-center'>
									<Dot size={18} className='text-primary' /> Page title
								</h3>

								<div className='flex gap-2 text-sm font-semibold items-center'>
									<span>March, 6th</span>/<span>2pm</span>
								</div>
							</div>

							<div className='w-full  rounded-xl flex justify-between'>
								<h3 className='text-md font-semibold flex gap-2 items-center'>
									<Dot size={18} className='text-primary' /> Page title
								</h3>

								<div className='flex gap-2 text-sm font-semibold items-center'>
									<span>March, 6th</span>/<span>2pm</span>
								</div>
							</div>

							<div className='w-full rounded-xl flex justify-between'>
								<h3 className='text-md font-semibold flex gap-2 items-center'>
									<Dot size={18} className='text-primary' /> Page title
								</h3>

								<div className='flex gap-2 text-sm font-semibold items-center'>
									<span>March, 6th</span>/<span>2pm</span>
								</div>
							</div>

							<div className='w-full rounded-xl flex justify-between'>
								<h3 className='text-md font-semibold flex gap-2 items-center'>
									<Dot size={18} className='text-primary' /> Page title
								</h3>

								<div className='flex gap-2 text-sm font-semibold items-center'>
									<span>March, 6th</span>/<span>2pm</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Container>
		</main>
	)
}
