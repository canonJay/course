import Container from '@/components/container/container'
import { Breadcrumb, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FolderPlus } from 'lucide-react'
import Link from 'next/link'
import { GroupsGroupe } from './GroupsGroupe'

export function Groups() {
	return (
		<section>
			<Container>
				<div className='w-full flex justify-between'>
					<Breadcrumb>
						<BreadcrumbPage>Courses</BreadcrumbPage>
					</Breadcrumb>

					<Link
						className='text-primary flex items-center gap-2'
						href={'/admin/course/create'}
					>
						<FolderPlus size={20} /> Сreate course
					</Link>
				</div>

				<h1 className='text-3xl lg:text-5xl font-bold mt-12'>List of groups</h1>

				<Tabs className='mt-6' defaultValue='All'>
					<TabsList>
						<TabsTrigger value='All'>All</TabsTrigger>
						<TabsTrigger value='Active'>Groups waiting to start</TabsTrigger>
						<TabsTrigger value='Inactive'>Completed groups</TabsTrigger>
					</TabsList>

					<TabsContent value='All'>
						<GroupsGroupe />
					</TabsContent>
					<TabsContent value='Active'>
						<GroupsGroupe />
					</TabsContent>
					<TabsContent value='Inactive'>
						<GroupsGroupe />
					</TabsContent>
				</Tabs>
			</Container>
		</section>
	)
}
