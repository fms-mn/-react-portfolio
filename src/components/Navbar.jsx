import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'certifications', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-30% 0px -55%', threshold: [0.05, 0.25, 0.5] },
    )
    sections.forEach(section => observer.observe(section))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={`pointer-events-auto mx-auto flex h-[4.5rem] max-w-[1240px] items-center justify-between rounded-2xl border px-3 transition-all duration-300 sm:px-4 ${
          scrolled
            ? 'border-slate-200/80 bg-white/85 shadow-[0_14px_50px_rgba(15,23,42,0.10)] backdrop-blur-xl dark:border-white/[0.07] dark:bg-[#080b12]/[0.86] dark:shadow-[0_12px_40px_rgba(0,0,0,0.18)]'
            : 'border-transparent bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <a href="#about" className="group flex min-w-0 items-center gap-3" aria-label="Benedict Tanghal, home">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand text-sm font-extrabold text-white shadow-[0_8px_24px_rgba(77,92,255,0.35)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            BT
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate font-display text-[0.95rem] font-bold leading-tight tracking-[-0.02em] text-slate-950 dark:text-white">
              Benedict Tanghal
            </span>
            <span className="mt-0.5 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
              Software developer
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-xl border border-slate-200/80 bg-white/70 p-1.5 shadow-sm dark:border-white/10 dark:bg-white/[0.04] lg:flex">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'page' : undefined}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                active === id
                  ? 'bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950'
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <a href="#contact" className="btn-nav hidden sm:inline-flex">
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-brand hover:text-brand dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200 lg:hidden"
            onClick={() => setOpen(value => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="pointer-events-auto mx-auto mt-2 max-w-[1240px] rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0e18]/95 lg:hidden">
          <div className="grid gap-1">
            {links.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition ${
                  active === id
                    ? 'bg-brand/10 text-brand dark:bg-brand/20 dark:text-indigo-300'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10'
                }`}
              >
                {label}
                <span className="font-mono text-xs text-slate-300 dark:text-slate-600">0{links.findIndex(link => link.id === id) + 1}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
