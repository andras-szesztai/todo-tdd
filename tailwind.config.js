/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            'primary-dark': '#251F47',
            'primary-light': '#404E7C',
            accent: '#86CB92',
            'primary-dark-disabled': '#251F4799',
            white: '#FFFFFF',
        },
        extend: {},
    },
    plugins: [],
}
