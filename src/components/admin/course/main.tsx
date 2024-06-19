import Container from '@/components/container/container'
import { Breadcrumb, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FolderPlus } from 'lucide-react'
import Link from 'next/link'
import { CourseGroup } from './CourseGroup'

export function Main() {
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

				<h1 className='text-3xl lg:text-5xl font-bold mt-12'>
					List of courses
				</h1>

				<Tabs className='mt-6' defaultValue='All'>
					<TabsList>
						<TabsTrigger value='All'>All</TabsTrigger>
						<TabsTrigger value='Active'>Active courses</TabsTrigger>
						<TabsTrigger value='Inactive'>Inactive courses</TabsTrigger>
					</TabsList>

					<TabsContent value='All'>
						<CourseGroup />
					</TabsContent>
					<TabsContent value='Active'>
						<CourseGroup />
					</TabsContent>
					<TabsContent value='Inactive'>
						<CourseGroup />
					</TabsContent>
				</Tabs>
			</Container>
		</section>
	)
}
