/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'soil-brown': {
          DEFAULT: '#5D4037',
          light: '#8B6914',
          dark: '#3E2723',
        },
        'forest-green': {
          DEFAULT: '#2E7D32',
          light: '#4CAF50',
          dark: '#1B5E20',
        },
        'vitality-pink': {
          DEFAULT: '#E91E63',
          light: '#F48FB1',
        },
        'vitality-yellow': {
          DEFAULT: '#FFC107',
          light: '#FFECB3',
        },
        'vitality-orange': {
          DEFAULT: '#FF7043',
          light: '#FFAB91',
        },
        'vitality-red': {
          DEFAULT: '#E53935',
          light: '#EF9A9A',
        },
        'warm-white': '#FDFBF7',
        'warm-cream': '#F5F1E8',
        'warm-gray': '#6B6B6B',
      },
      fontFamily: {
        'heading': ['Georgia', 'Cambria', 'serif'],
        'body': ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
