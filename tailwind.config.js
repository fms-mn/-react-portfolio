/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#172126',
        midnight: '#0d1518',
        panel: '#162126',
        electric: '#e85d3f',
        cyanbright: '#8edfd0',
        coral: '#e85d3f',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: '8px 8px 0 0 rgba(23, 33, 38, 1)',
      },
    },
  },
  plugins: [],
}
