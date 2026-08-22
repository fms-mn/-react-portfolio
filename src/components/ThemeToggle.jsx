import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      className="grid size-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-brand hover:text-brand dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-400 dark:hover:border-brand dark:hover:text-indigo-300"
      aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}
