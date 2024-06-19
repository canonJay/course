import { TrainerAccount } from '@/components/admin/trainers/TrainerPage/Account'
import { TrainerGroup } from '@/components/admin/trainers/TrainerPage/TrainerGroup'
import Container from '@/components/container/container'
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import Link from 'next/link'

export default function TrainerAdminPaga() {
	return (
		<main>
			<Container>
				<Breadcrumb className='mt-3'>
					<BreadcrumbList>
						<BreadcrumbItem>
							<Link href={'/admin/trainers'}>Trainers</Link>
						</BreadcrumbItem>

						<BreadcrumbEllipsis />

						<BreadcrumbItem>
							<BreadcrumbPage>Trainers page</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</Container>

			<Container>
				<section className='flex flex-col gap-8 mt-7 lg:flex-row-reverse'>
					<TrainerAccount />
					<section className='w-full flex flex-col'>
						<h3 className='text-2xl font-bold'>Trainer Groups</h3>

						<TrainerGroup />
					</section>
				</section>
			</Container>
		</main>
	)
}
