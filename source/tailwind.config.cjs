/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const primary = '#111'

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary,
			black: colors.black,
			blue: colors.blue,
			green: colors.green,
			red: colors.red,
			transparent: colors.transparent,
			white: colors.white,
			gray: {
				300: '#EDEDED',
			},
			orange: {
				200: '#fed7aa',
				500: '#FFC85E',
				700: '#F3A50D',
			},
			slate: {
				700: '#3F4E65',
			},
		},

		extend: {
			backgroundImage: {
				'orange-gradient':
					'linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%)',
			},
			borderRadius: {
				button: '5rem',
				card: '0.625rem',
				searchInput: '2.25rem',
			},
			borderWidth: {
				3: '3px',
			},
			fontSize: {
				sx: '0.625rem',
			},
			maxWidth: {
				sx: '16.25rem',
				'8xl': '87.625rem',
			},
			screens: {
				sx: '425px',
				md2: '900px',
			},
			spacing: {
				1.25: '0.3125rem',
				15: '3.75rem',
				50: '12.5rem',
			},
			transitionDuration: {
				DEFALUT: '200ms ',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
		},
	},
	plugins: [
		plugin(({ addComponents, theme }) => {
			addComponents({
				'.air-block': {
					color: theme('colors.white'),
					backgroundColor: theme('colors.gray.950'),
					borderRadius: theme('borderRadius.layout'),
					boxShadow: theme('boxShadow.lg'),
				},
			})
		}),
		require('@tailwindcss/line-clamp'),
	],
}
