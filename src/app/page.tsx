import { Hero } from '@/components/AllCoursePage/Hero'
import Container from '@/components/container/container'
import { Breadcrumb, BreadcrumbPage } from '@/components/ui/breadcrumb'

export default function Home() {
	return (
		<main>
			<Container>
				<Breadcrumb className='mt-2'>
					<BreadcrumbPage className='text-base'>All course</BreadcrumbPage>
				</Breadcrumb>
			</Container>

			<Hero />
		</main>
	)
}
