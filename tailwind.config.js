/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-light': 'radial-gradient(circle, rgba(255,255,240,0.25) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}

