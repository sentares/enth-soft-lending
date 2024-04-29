'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
	const { ref } = useSectionInView('Главная')

	return (
		<motion.section
			ref={ref}
			className='mt-0 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28  '
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id='about'
		>
			{/* <h3 className='text-xl'>Виртуальный хостинг для сайта</h3> */}
		</motion.section>
	)
}
