/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',  // Adjust according to your project structure
        './public/index.html',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4f46e5',
                secondary: '#06b6d4',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [
    ],
}