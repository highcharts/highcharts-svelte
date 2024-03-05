/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{svelte,js,ts,html}'],
    theme: {
        extend: {}
    },
    plugins: [
        // eslint-disable-next-line
        require('@tailwindcss/forms')
    ]
};
