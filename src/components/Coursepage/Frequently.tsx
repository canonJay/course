import Image from 'next/image'
import Container from '../container/container'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../ui/accordion'

export function Frequently() {
	return (
		<section className='w-full py-12'>
			<Container>
				<div className='flex flex-col justify-center items-center'>
					<Image
						src={'/mobilelogo.svg'}
						alt={'mobilelogo'}
						width={30}
						height={8}
					/>
					<h2 className='text-2xl  lg:text-3xl font-semibold mt-3'>
						Frequently asked Questions
					</h2>
				</div>

				<div className='w-full mt-6'>
					<Accordion type='single' collapsible>
						<AccordionItem value='item-1' className='border-0'>
							<AccordionTrigger className='border-0 text-base font-medium'>
								<h3 className='text-xl transition-color font-semibold flex items-start text-start'>
									Are there age restrictions for using the platform?
								</h3>
							</AccordionTrigger>
							<AccordionContent className='border-0 text-base font-medium'>
								Upon completion of your training, you will receive a Wamocon
								Academy certificate. In addition, upon successful completion of
								the final exam, you will receive an ISTQB® certificate.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value='item-2' className='border-0'>
							<AccordionTrigger>
								<h3 className='text-xl text-xltransition-color font-semibold flex items-start text-start'>
									Is it possible to receive a certificate of completion of the
									testing course?
								</h3>
							</AccordionTrigger>
							<AccordionContent className='border-0 text-base font-medium'>
								Upon completion of your training, you will receive a Wamocon
								Academy certificate. In addition, upon successful completion of
								the final exam, you will receive an ISTQB® certificate.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value='item-3' className='border-0'>
							<AccordionTrigger className='border-0 text-base font-medium'>
								<h3 className='text-xl transition-color font-semibold flex items-start text-start'>
									What level of knowledge is required to successfully master the
									material on the platform?
								</h3>
							</AccordionTrigger>
							<AccordionContent className='border-0 text-base font-medium'>
								Upon completion of your training, you will receive a Wamocon
								Academy certificate. In addition, upon successful completion of
								the final exam, you will receive an ISTQB® certificate.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value='item-4' className='border-0'>
							<AccordionTrigger className='border-0 text-base font-medium'>
								<h3 className='text-xl transition-color font-semibold flex items-start text-start'>
									Is it possible to get feedback on completed assignments from
									teachers or other students?
								</h3>
							</AccordionTrigger>
							<AccordionContent className='border-0 text-base font-medium'>
								Upon completion of your training, you will receive a Wamocon
								Academy certificate. In addition, upon successful completion of
								the final exam, you will receive an ISTQB® certificate.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</Container>
		</section>
	)
}
