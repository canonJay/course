import Container from '@/components/container/container'
import { CreateTask } from './CreateTask'

export function Main() {
	return (
		<section>
			<Container>
				<div className='w-full mt-12 flex justify-between items-center'>
					<h1 className='text-3xl lg:text-5xl font-bold '>Create Task</h1>
				</div>

				<CreateTask />
			</Container>
		</section>
	)
}
