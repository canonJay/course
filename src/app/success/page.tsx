import Link from 'next/link'

export default function successPage() {
	return (
		<main className='flex h-screen justify-center items-center flex-col py-12'>
			<h1 className='text-3xl font-bold'>
				Your question has been accepted for consideration
			</h1>

			<span className='text-sm font-medium mt-4 text-[#A7AEB8]'>
				Wait for the trainer's response.
			</span>

			<Link
				className='py-2 px-4 bg-[#DFE8EC] rounded-xl flex justify-center text-base font-semibold items-center mt-8'
				href={'/profile/history'}
			>
				Check history
			</Link>
		</main>
	)
}
