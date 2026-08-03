import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = ['about', 'projects', 'contact']

export default function Navbar({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
      const current = [...links].reverse().find((id) => document.getElementById(id)?.getBoundingClientRect().top <= 140)
      if (current) setActive(current)
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  const navLink = (id) => (
    <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className={`relative py-2 text-sm font-medium capitalize transition hover:text-electric dark:hover:text-cyan-300 ${active === id ? 'text-electric dark:text-cyan-300 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-current' : 'text-slate-600 dark:text-slate-300'}`} aria-current={active === id ? 'page' : undefined}>{id}</a>
  )

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition ${scrolled ? 'border-slate-200/80 bg-slate-50/85 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-midnight/85' : 'border-transparent bg-transparent'}`}>
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Main navigation">
        <a href="#about" className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-electric to-cyanbright text-sm font-extrabold text-white shadow-lg shadow-blue-500/20" aria-label="Benedict Tanghal, home">BT</a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(navLink)}
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <a href="#contact" className="btn-primary !px-4 !py-2.5">Contact Me</a>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button type="button" className="grid size-10 place-items-center rounded-xl border bg-white dark:bg-panel" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </nav>
      {open && <div id="mobile-menu" className="border-t bg-white px-5 py-5 shadow-lg dark:bg-midnight md:hidden"><div className="mx-auto flex max-w-6xl flex-col gap-3">{links.map(navLink)}<a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">Contact Me</a></div></div>}
    </header>
  )
}
