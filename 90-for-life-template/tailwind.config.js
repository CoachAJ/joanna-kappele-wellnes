/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'health-blue': '#0068B3',
        'blue-sky': '#3CAADF',
        'tangy-yellow': '#FFB81C',
        'glorious-sunset': '#F58A34',
        'hot-chocolate': '#784434',
      },
      fontFamily: {
        'proxima': ['Proxima Nova', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
