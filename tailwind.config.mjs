/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#1a3c3b', // Deep Pine Green
				secondary: '#D6CFC7', // Sand/Terracotta
				background: '#F9F9F7', // Soft Linen
				text: '#2D2D2D', // Warm Anthracite
			},
			fontFamily: {
				serif: ['Cormorant Garamond', 'serif'],
				sans: ['Lato', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
