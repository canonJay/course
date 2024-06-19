import Main from '@/components/admin/course/Create/Main'
import Container from '@/components/container/container'
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import Link from 'next/link'

export default function CreateCoursePage() {
	return (
		<main>
			<Container>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<Link
								className='text-sm font-medium text-[#A7AEB8]'
								href={'/admin/course'}
							>
								Courses
							</Link>
						</BreadcrumbItem>

						<BreadcrumbEllipsis />

						<BreadcrumbItem>
							<BreadcrumbPage>Create Course</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</Container>

			<Main />
		</main>
	)
}
