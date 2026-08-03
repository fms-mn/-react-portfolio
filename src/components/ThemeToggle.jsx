import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark'
  return (
    <button type="button" onClick={onToggle} className="grid size-10 place-items-center rounded-xl border bg-white text-slate-700 transition hover:border-blue-300 hover:text-electric dark:bg-panel dark:text-slate-200 dark:hover:border-cyan-500 dark:hover:text-cyan-300" aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`} title={`Switch to ${dark ? 'light' : 'dark'} mode`}>
      {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  )
}
