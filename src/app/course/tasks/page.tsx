import { Filters } from '@/components/TaskPage/Filters'
import { TasksDash } from '@/components/TaskPage/TasksDash'
import Container from '@/components/container/container'
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
} from '@/components/ui/breadcrumb'

export default function TasksPage() {
	return (
		<main>
			<Container>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink className='font-bold text-[13px] leading-4 '>
								Course: Testing Basics
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbEllipsis className='text-primary' />

						<BreadcrumbPage className='font-bold text-[13px] leading-4 '>
							Tasks page: Testing Basics
						</BreadcrumbPage>
					</BreadcrumbList>
				</Breadcrumb>

				<div className='flex flex-col w-full md:gap-10 md:flex-row-reverse'>
					<Filters />
					<TasksDash />
				</div>
			</Container>
		</main>
	)
}
