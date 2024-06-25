import Container from '@/components/container/container'
import { Breadcrumb, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { QuestionsGroup } from './QuestionsGroup'

export function QuestionsPage() {
	return (
		<section>
			<Container>
				<div className='w-full flex justify-between'>
					<Breadcrumb>
						<BreadcrumbPage>Student Questions</BreadcrumbPage>
					</Breadcrumb>

					<Link
						href={'/trainer/questions/arhive'}
						className='text-primary flex items-center gap-2'
					>
						<PlusCircle size={20} /> View archived Questions
					</Link>
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
						<QuestionsGroup />
					</TabsContent>
					<TabsContent value='Active'>
						<QuestionsGroup />
					</TabsContent>
				</Tabs>
			</Container>
		</section>
	)
}
