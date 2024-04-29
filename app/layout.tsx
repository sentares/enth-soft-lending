import Header from '@/components/header'
import './globals.css'
import './embla.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Enth Soft',
	description: 'ENTH SOFT',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className='!scroll-smooth'>
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
			>
				<div className='bg-[#0b6050] absolute top-[-1rem] -z-10 left-1/2 transform -translate-x-1/2 h-[31.25rem] w-full rounded-full blur-[16rem]  dark:bg-[#04764e]'></div>

				<div className='bg-[#dbd7fb] absolute top-[80rem] right-0 -z-10 h-[31.25rem] w-[50rem] rounded-full blur-[16rem] sm:w-[68.75rem] md:left-[-33rem] lg:right-[-20rem] xl:right-[20rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>

				<div className='bg-[#0b6050] absolute top-[160rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[18rem] sm:w-[68.75rem] dark:bg-[#04764e]'></div>

				<div className='bg-[#dbd7fb] absolute bottom-[-0rem] -z-10 left-1/2 transform -translate-x-1/2 h-[31.25rem] w-full rounded-full blur-[20rem]  dark:bg-[#04764e55]'></div>

				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<Header />
						{children}
						<Footer />

						<Toaster position='top-right' />
						<ThemeSwitch />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	)
}
