import Container from '@/components/container/container'
import { Breadcrumb, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { StudentGroup } from './StudentGroup'

export function StudentsPage() {
	return (
		<section>
			<Container>
				<div className='w-full flex justify-between'>
					<Breadcrumb>
						<BreadcrumbPage>Students</BreadcrumbPage>
					</Breadcrumb>

					<Link
						href={'/trainer/students/arhive'}
						className='text-primary flex items-center gap-2'
					>
						<PlusCircle size={20} /> View archived answers
					</Link>
				</div>

				<div className='w-full flex items-center mt-12 justify-between'>
					<h1 className='text-3xl lg:text-5xl font-bold'>Student answers</h1>
					<span className='font-semibold text-xl '>
						Answers to check: <span className='text-primary'>12</span>
					</span>
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
