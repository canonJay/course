import { Certificates } from '@/components/ProfilePage/Certificates'
import { Profile } from '@/components/ProfilePage/Profile'
import Container from '@/components/container/container'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbPage,
} from '@/components/ui/breadcrumb'

export default function ProfilePage() {
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
					<Certificates />
				</section>
			</Container>
		</main>
	)
}
