import Container from '@/components/container/container'
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ImageDown, PlusCircleIcon, Trash, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { TasksGroup } from './TasksGroup'

export function Tasks() {
	return (
		<section>
			<Container>
				<div className='w-full flex justify-between'>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<Link href={'/admin/course'}>Courses</Link>
							</BreadcrumbItem>

							<BreadcrumbEllipsis />

							<BreadcrumbItem>
								<BreadcrumbPage>Course tasks</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>

					<span className='text-primary flex items-center gap-2'>
						<Trash size={20} /> Delete course
					</span>
				</div>

				<h1 className='text-3xl lg:text-5xl font-bold mt-12'>
					List of course tasks
				</h1>

				<Tabs className='mt-6' defaultValue='All'>
					<TabsList className='w-full flex justify-between'>
						<div className='flex gap-3'>
							<TabsTrigger value='All'>Phase 1</TabsTrigger>
							<TabsTrigger value='Active'>Phase 2</TabsTrigger>
							<TabsTrigger value='Inactive'>Phase 3</TabsTrigger>
						</div>

						<div className='flex gap-3'>
							<Link
								href={'/admin/course/coursetasks/create'}
								className='bg-[#FA7A4B] flex justify-center items-center px-8 py-2 rounded-2xl'
							>
								<PlusCircleIcon size={15} className='text-white' />
							</Link>

							<Dialog>
								<DialogTrigger>
									<span className='bg-[#FA7A4B] flex justify-center items-center px-8 py-2 rounded-2xl'>
										<Video size={15} className='text-white' />
									</span>
								</DialogTrigger>

								<DialogContent className='h-full flex flex-col mt-[600px] lg:h-auto lg:mt-0'>
									<Image
										src={'/logo.svg'}
										alt={'logo'}
										width={120}
										height={42}
									/>

									<h3 className='text-2xl mt-2 font-bold'>
										Add a motivational video (before stage)
									</h3>

									<div className='relative'>
										<input
											type='file'
											className='opacity-0 absolute w-0'
											id='file'
										/>

										<Label
											htmlFor='file'
											className=' px-6 py-2 flex w-36 justify-center items-center gap-1 rounded-2xl bg-primary text-white text-sm font-semibold'
										>
											Select File <ImageDown size={18} />
										</Label>
									</div>

									<h3 className='text-2xl mt-2 font-bold'>
										Add a motivational video (after stage)
									</h3>

									<div className='relative'>
										<input
											type='file'
											className='opacity-0 absolute w-0'
											id='file'
										/>

										<Label
											htmlFor='file'
											className=' px-6 py-2 flex w-36 justify-center items-center gap-1 rounded-2xl bg-primary text-white text-sm font-semibold'
										>
											Select File <ImageDown size={18} />
										</Label>
									</div>

									<Button className='mt-4 w-full rounded-3xl'>Confirm</Button>
								</DialogContent>
							</Dialog>
						</div>
					</TabsList>

					<TabsContent value='All'>
						<TasksGroup />
					</TabsContent>
					<TabsContent value='Active'>
						<TasksGroup />
					</TabsContent>
					<TabsContent value='Inactive'>
						<TasksGroup />
					</TabsContent>
				</Tabs>
			</Container>
		</section>
	)
}
