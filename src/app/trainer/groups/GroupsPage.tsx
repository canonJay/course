import Container from '@/components/container/container'
import { Breadcrumb, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GropesGroups } from './GropesGroups'

export function GroupsPage() {
	return (
		<section>
			<Container>
				<div className='w-full flex justify-between'>
					<Breadcrumb>
						<BreadcrumbPage>All groups</BreadcrumbPage>
					</Breadcrumb>
				</div>

				<h1 className='text-3xl lg:text-5xl font-bold mt-12'>List of groups</h1>

				<Tabs className='mt-6' defaultValue='All'>
					<TabsList>
						<TabsTrigger value='All'>All</TabsTrigger>
						<TabsTrigger value='Active'>Groups waiting to start</TabsTrigger>
						<TabsTrigger value='Inactive'>Completed groups</TabsTrigger>
					</TabsList>

					<TabsContent value='All'>
						<GropesGroups />
					</TabsContent>
					<TabsContent value='Active'>
						<GropesGroups />
					</TabsContent>
					<TabsContent value='Inactive'>
						<GropesGroups />
					</TabsContent>
				</Tabs>
			</Container>
		</section>
	)
}
