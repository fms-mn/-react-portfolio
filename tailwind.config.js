/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#1a1a2e',
        midnight: '#0f0f1a',
        panel: '#161625',
        electric: '#2563eb',
        cyanbright: '#bfdbfe',
        coral: '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: '6px 6px 0 0 rgba(26, 26, 46, 0.8)',
      },
    },
  },
  plugins: [],
}
