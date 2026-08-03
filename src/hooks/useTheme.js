import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    const dark = theme === 'dark'
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('portfolio-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#091426' : '#f8fafc')
  }, [theme])

  return { theme, toggleTheme: () => setTheme((value) => (value === 'dark' ? 'light' : 'dark')) }
}
