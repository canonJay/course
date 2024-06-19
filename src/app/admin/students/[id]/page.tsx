import { CertificatComponent } from '@/components/ProfilePage/CertificatComponent'
import { StudentProfile } from '@/components/admin/students/SyudentPage/StudentProfile'
import Container from '@/components/container/container'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbPage,
} from '@/components/ui/breadcrumb'

export default function StudentAdminePage() {
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
					<StudentProfile />/{' '}
					<div className='w-full flex flex-col mt-4 '>
						<h3 className='text-2xl font-semibold'>My Certificates</h3>

						<div className='w-full flex flex-col mt-4 gap-3'>
							<CertificatComponent />
							<CertificatComponent />
							<CertificatComponent />
						</div>
					</div>
				</section>
			</Container>
		</main>
	)
}
