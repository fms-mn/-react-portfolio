import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark'
  return <button type="button" onClick={onToggle} className="grid size-10 place-items-center border-2 border-ink transition hover:bg-ink hover:text-cyanbright dark:border-white dark:hover:bg-white dark:hover:text-ink" aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
}
