/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
	theme: {
		extend: {
			fontSize: {
				xxs: '0.6rem' // Custom smaller text size
				// Add more custom sizes as needed
			}
		}
	},
	plugins: [require('tw-elements/dist/plugin')]
};
