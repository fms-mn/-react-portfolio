import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const onScroll = () => {
      const current = [...links].reverse().find(({ id }) => document.getElementById(id)?.getBoundingClientRect().top <= 150)
      if (current) setActive(current.id)
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/15 bg-[#f7f6f2]/95 backdrop-blur-md dark:border-white/10 dark:bg-midnight/95">
      <nav className="container-shell flex h-[74px] items-center justify-between" aria-label="Main navigation">

        {/* Logo */}
        <a href="#about" className="flex items-center gap-3" aria-label="Benedict Tanghal, home">
          <span className="grid size-9 place-items-center bg-ink font-display text-sm font-extrabold text-white dark:bg-electric dark:text-white">
            BT
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-tight text-ink dark:text-white">Benedict Tanghal</p>
            <p className="text-xs text-ink/45 dark:text-white/40">Developer · Philippines</p>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm font-medium transition-colors hover:text-electric dark:hover:text-cyanbright ${
                active === id
                  ? 'text-electric dark:text-cyanbright'
                  : 'text-ink/60 dark:text-white/55'
              }`}
            >
              {label}
            </a>
          ))}
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button
            type="button"
            className="grid size-9 place-items-center border border-ink/25 dark:border-white/25"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-ink/15 bg-[#f7f6f2] dark:border-white/10 dark:bg-midnight">
          <div className="container-shell flex flex-col py-4">
            {links.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 py-4 text-lg font-semibold text-ink transition hover:text-electric dark:border-white/10 dark:text-white dark:hover:text-cyanbright"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
