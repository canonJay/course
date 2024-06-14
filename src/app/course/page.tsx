import { Content } from '@/components/Coursepage/Content'
import { Feedback } from '@/components/Coursepage/Feedback'
import { Frequently } from '@/components/Coursepage/Frequently'
import Hero from '@/components/Coursepage/Hero'
import { HowWork } from '@/components/Coursepage/HowWork'
import { Question } from '@/components/Coursepage/Question'
import { WeLearn } from '@/components/Coursepage/WeLearn'

export default function CoursePage() {
	return (
		<main>
			<Hero />
			<Question />
			<WeLearn />
			<HowWork />
			<Content />
			<Feedback />

			<Frequently />
		</main>
	)
}
