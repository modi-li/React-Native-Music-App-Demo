/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		colors: {
			black: "#000000",
			gray1: "#141518",
			gray2: "#6e6f72",
			gray3: "#8c8d90",
			gray4: "#c8c9cd",
			gray5: "#f0f1f5",
			white: "#ffffff",
		},
	},
	plugins: [],
};
