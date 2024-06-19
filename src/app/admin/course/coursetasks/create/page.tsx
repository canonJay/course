import { Main } from '@/components/admin/tasks/Main'
import Container from '@/components/container/container'
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import Link from 'next/link'

export default function CreateTaskPage() {
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
							<BreadcrumbPage>Create Task</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</Container>

			<Main />
		</main>
	)
}
