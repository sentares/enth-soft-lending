/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: {
					50: '#e6f1ed',
					100: '#cde4dc',
					200: '#9bc8b8',
					300: '#68ad95',
					400: '#369171',
					500: '#04764e',
					600: '#035e3e',
					700: '#02472f',
					800: '#022f1f',
					900: '#011810',
				},
			},
		},
	},
	plugins: [],
	darkMode: 'class',
}
