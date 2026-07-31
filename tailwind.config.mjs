/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#1a3c3b', // Deep Pine Green
				secondary: '#D6CFC7', // Sand/Terracotta
				'secondary-dark': '#736553', // Sand, abgedunkelt für Icons/Text (5.2:1 auf Sand-Flächen)
				background: '#F9F9F7', // Soft Linen
				text: '#2D2D2D', // Warm Anthracite
				muted: '#6B6B69', // Gedämpfter Fließtext (5.1:1) – ersetzt text-text/50 & /40
				accent: '#E07A5F', // Warm Terracotta/Coral – NUR für dekorative Flächen (2.95:1, nicht barrierefrei)
				'accent-dark': '#B14D30', // Terracotta für Text & Buttons (5.3:1 auf Weiß, 5.0:1 auf Background)
			},
			fontFamily: {
				serif: ['Cormorant Garamond', 'serif'],
				sans: ['Lato', 'sans-serif'],
				handwriting: ['Caveat', 'cursive'], // Für die persönliche Note
			},
		},
	},
	plugins: [],
}
