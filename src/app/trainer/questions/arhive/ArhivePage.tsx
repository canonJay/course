import Container from '@/components/container/container'
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArhiveGroup } from './ArhiveGroup'

export function ArhivePage() {
	return (
		<section>
			<Container>
				<div className='w-full flex justify-between'>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink>Student Questions</BreadcrumbLink>
							</BreadcrumbItem>

							<BreadcrumbEllipsis />

							<BreadcrumbPage>Archive of questions</BreadcrumbPage>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div className='w-full flex items-center mt-12 justify-between'>
					<h1 className='text-3xl lg:text-5xl font-bold'>Student Questions</h1>
					<span className='font-semibold text-xl '>
						Questions to check: <span className='text-primary'>12</span>
					</span>
				</div>

				<Tabs className='mt-6' defaultValue='All'>
					<TabsList>
						<TabsTrigger value='All'>All</TabsTrigger>
						<TabsTrigger value='Active'>From other groups</TabsTrigger>
					</TabsList>

					<TabsContent value='All'>
						<ArhiveGroup />
					</TabsContent>
					<TabsContent value='Active'>
						<ArhiveGroup />
					</TabsContent>
				</Tabs>
			</Container>
		</section>
	)
}
