/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#10213d',
        midnight: '#091426',
        panel: '#111f35',
        electric: '#2563eb',
        cyanbright: '#06b6d4',
        coral: '#fb7185',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 55px -30px rgba(15, 35, 70, 0.35)',
      },
    },
  },
  plugins: [],
}
