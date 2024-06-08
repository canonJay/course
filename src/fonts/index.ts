import { Lato, Rosario } from 'next/font/google'

export const rosario = Rosario({
	subsets: ['latin'],
	weight: ['300', '500', '400', '700'],

	// variable: '--font-rosario',
})

export const lato = Lato({
	subsets: ['latin'],
	weight: ['100', '400', '700', '900'],

	// variable: '--font-lato',
})
