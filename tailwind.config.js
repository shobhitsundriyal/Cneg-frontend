module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				xs: '480px',
				'1016px': '1016px',
			},
			colors: {
				mirage: '#1D1D32',
				lavender: '#c5b7ee',
				vibrant_green: '#c1ed1c',
				daen_pink: '#f2e9e7',
				light_pink: '#F9F5F4',
				dark_bg: '#090910',
			},
			fontFamily: {
				rms: ['RMS-Sanz', 'sans-serif'],
				rmsBold: ['RMS-Sanz-Bold', 'sans-serif'],
			},
			keyframes: {
				moveSide: {
					'0%': { transform: 'translateX(0rem)' },
					'100%': { transform: 'translateX(-90rem)' },
				},
			},
			animation: {
				moveSide: 'moveSide 15s linear infinite',
			},
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
}
