import Container from '@/components/container/container'
import { Breadcrumb, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { StudentGroup } from '../StudentGroup'

export function ArhivePage() {
	return (
		<section>
			<Container>
				<div className='w-full flex justify-between'>
					<Breadcrumb>
						<BreadcrumbPage>Students</BreadcrumbPage>
					</Breadcrumb>
				</div>

				<div className='w-full flex items-center mt-12 justify-between'>
					<h1 className='text-3xl lg:text-5xl font-bold'>Archive of answers</h1>
				</div>

				<Tabs className='mt-6' defaultValue='All'>
					<TabsList>
						<TabsTrigger value='All'>All</TabsTrigger>
						<TabsTrigger value='Active'>From other groups</TabsTrigger>
					</TabsList>

					<TabsContent value='All'>
						<StudentGroup />
					</TabsContent>
					<TabsContent value='Active'>
						<StudentGroup />
					</TabsContent>
				</Tabs>
			</Container>
		</section>
	)
}
