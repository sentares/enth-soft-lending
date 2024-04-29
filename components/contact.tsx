'use client'

import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import SectionHeading from './section-heading'

export default function Contact() {
	const { ref } = useSectionInView('Связаться')

	return (
		<motion.section
			id='contact'
			ref={ref}
			className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<SectionHeading>Связаться с нами</SectionHeading>

			<div className='flex items-center justify-center gap-4'>
				<a
					href='https://t.me/+9960708019019'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaTelegram
						size={44}
						className='cursor-pointer hover:scale-105 text-blue-500 transition'
					/>
				</a>
				<a
					href='https://wa.me/+9960708019019'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaWhatsapp
						size={44}
						className='cursor-pointer hover:scale-105 text-primary-500 transition'
					/>
				</a>
			</div>
		</motion.section>
	)
}
