'use client'

import { useSectionInView } from '@/lib/hooks'
import SectionHeading from './section-heading'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import HostsCarusel from '@/shared/carusel/Carusel'
import { hostsData, skillsData } from '@/lib/data'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
}
export default function Hosts() {
	const { ref } = useSectionInView('Тарифы')

	const OPTIONS: EmblaOptionsType = { align: 'start' }
	const SLIDES = hostsData

	return (
		<section
			id='hosts'
			ref={ref}
			className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
		>
			<SectionHeading>Хостинги</SectionHeading>
			<div className='px-6'>
				<HostsCarusel slides={SLIDES} options={OPTIONS} />
			</div>

			<div className='mt-20'>
				<h3 className='text-3xl font-medium  mb-8 text-center'>
					На любом тарифе мы предлагаем
				</h3>
				<ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
					{skillsData.map((skill, index) => (
						<motion.li
							className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
							key={index}
							variants={fadeInAnimationVariants}
							initial='initial'
							whileInView='animate'
							viewport={{
								once: true,
							}}
							custom={index}
						>
							{skill}
						</motion.li>
					))}
				</ul>
			</div>
		</section>
	)
}
