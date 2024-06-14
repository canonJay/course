import Container from '@/components/container/container'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

export default function page() {
	return (
		<main>
			<Container>
				<section className='w-full h-[50vh] flex flex-col justify-center items-center'>
					<h1 className='text-3xl font-bold'>Your question history</h1>

					<span className='text-sm font-medium mt-4 text-[#A7AEB8]'>
						You can view all your previous questions here.
					</span>

					<div className='w-full mt-6'>
						<Accordion type='single' collapsible>
							<AccordionItem value='item-1' className='border-0'>
								<AccordionTrigger className='border-0 text-base font-medium'>
									<h3 className='text-xl transition-color font-semibold flex items-start text-start'>
										I have questions about completing the task “Task Name”. I
										would be very grateful if you could give me advice on how to
										quickly and correctly understand this topic. Thank you.
									</h3>
								</AccordionTrigger>
								<AccordionContent className='border-0 text-base font-medium'>
									In the task "title of the task" there is a question that is
									related to the previous topic. I recommend that you once again
									refer to the theoretical material from the last lesson. If you
									still have any questions, don't hesitate to reach out. I will
									be happy to help you understand this topic.
									<p className='mt-4'>
										<span className='text-primary'>Trainer:</span> Esther Howard
									</p>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</section>
			</Container>
		</main>
	)
}
