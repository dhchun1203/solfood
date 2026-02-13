/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: 'var(--brand-yellow)',
        },
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        gamja: ['Gamja Flower', 'Pretendard', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-hover': '0 10px 25px -5px rgb(0 0 0 / 0.06), 0 8px 10px -6px rgb(0 0 0 / 0.04)',
        'soft': '0 16px 40px -8px rgb(0 0 0 / 0.15), 0 8px 20px -6px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
}
