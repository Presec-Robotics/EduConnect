/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                "primary-light": "#FFFFFF",
                "secondary-light": "#D7D7D7",
                "accent-light": "#007BFF",
                "cta-light": "#FF5733",
                "link-light": "#0066CC",
                "positive-action-light": "#00A74A",
                "negative-action-light": "#FF3D49",
                "warining-light": "#FFC107",
                
                "primary-dark": "#121212",
                "secondary-dark": "#454545",
                "accent-dark": "#007BFF",
                "cta-dark": "#FF5733",
                "link-dark": "#2196F3",
                "positive-action-dark": "#4CAF50",
                "negative-action-dark": "#F44336",
                "warining-dark": "#FFC107",
            }
        },
    },
    plugins: [],
}
