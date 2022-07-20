/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],

	daisyui: {
		themes: [
			"light",
			"dark",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			"synthwave",
			"retro",
			"cyberpunk",
			"valentine",
			"halloween",
			"garden",
			"forest",
			"aqua",
			"lofi",
			"pastel",
			"fantasy",
			"wireframe",
			"black",
			"luxury",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"acid",
			"lemonade",
			"night",
			"coffee",
			"winter",

			{
				frienz: {
					primary: "#0891b2",

					secondary: "#6366f1",

					accent: "#1e40af",

					neutral: "#382339",

					"base-100": "#2F3541",

					info: "#67e8f9",

					success: "#4ade80",

					warning: "#D5A30B",

					error: "#EE687C",
				},
			},
		],
	},
};
