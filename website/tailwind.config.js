/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The "Academic/Clinical" Palette
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#2563EB', // <--- Your Primary Blue (Trust)
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        slate: {
          850: '#151e2e', // Deep dark for text
        }
      },
      fontFamily: {
        // We will set these up in CSS next
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}