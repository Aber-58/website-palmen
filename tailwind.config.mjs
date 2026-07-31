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

				/*
				 * Themenfarben der Arbeitsschwerpunkte.
				 *
				 * Alle sechs Töne sind aus Sand, Terrakotta und Pine abgeleitet,
				 * damit sie als eine Familie gelesen werden. Vorher standen hier
				 * die Tailwind-Standardfarben red-50, orange-50, green-50,
				 * amber-50, sky-50 und stone-50 – sechs Töne aus sechs Ecken des
				 * Farbkreises, die zufällig zusammengewürfelt wirkten.
				 *
				 * Je Thema eine helle Fläche und eine dunklere Schriftfarbe.
				 * Der Wert dahinter ist der geprüfte Kontrast der Schrift auf
				 * ihrer eigenen Fläche, Mindestanforderung 4,5:1.
				 */
				'thema-rose': '#FBEFEA',
				'thema-rose-schrift': '#B14D30', // 4.7:1
				'thema-ocker': '#F8F1E2',
				'thema-ocker-schrift': '#7E5F28', // 5.3:1
				'thema-salbei': '#EDF2EC',
				'thema-salbei-schrift': '#3E6B4F', // 5.4:1
				'thema-sand': '#F4F0EA',
				'thema-sand-schrift': '#736553', // 5.0:1
				'thema-petrol': '#E9F1F0',
				'thema-petrol-schrift': '#17605C', // 6.4:1
				'thema-pine': '#F2F1EE',
				'thema-pine-schrift': '#1A3C3B', // 10.6:1
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
