'use client'

import { useActiveSectionContext } from '@/context/active-section-context'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import Typist from 'react-typist'

export default function Intro() {
	const { ref } = useSectionInView('Главная', 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

	return (
		<section
			ref={ref}
			id='home'
			className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
		>
			<div className='flex items-center justify-center'>
				<div className='relative'>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							duration: 0.2,
						}}
						className='text-4xl font-bold text-white px-5 drop-shadow-md shadow-green-600'
					>
						ENTH SOFT
					</motion.div>
				</div>
			</div>

			<motion.h1
				className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<Typist
					avgTypingDelay={70}
					className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-primary-100'
					cursor={{ show: true, blink: true }} // Задаем мигание курсора
				>
					<span className='font-bold'>Надежность безопасность скорость</span>
				</Typist>
			</motion.h1>

			<motion.div
				className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href='#contact'
					className='group text-primary-500 dark:text-primary-500 px-7 py-3 flex items-center bg-white bg-opacity-80 shadow-lg gap-2 rounded-full outline-none hover:bg-primary-500 active:scale-105 transition hover:dark:text-white hover:text-white backdrop-blur-[0.5rem]'
					onClick={() => {
						setActiveSection('Связаться')
						setTimeOfLastClick(Date.now())
					}}
				>
					Связаться с нами
					<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
				</Link>
			</motion.div>
		</section>
	)
}
