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
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-[#f2f0e9]/95 backdrop-blur-md dark:border-white dark:bg-midnight/95">
      <nav className="container-shell flex h-[74px] items-center justify-between" aria-label="Main navigation">
        <a href="#about" className="flex items-center gap-3" aria-label="Benedict Tanghal, home">
          <span className="grid size-10 place-items-center bg-ink font-display text-sm font-extrabold text-cyanbright dark:bg-cyanbright dark:text-ink">BT</span>
          <span className="hidden font-mono text-[10px] font-bold uppercase leading-4 tracking-[0.18em] sm:block">Benedict Tanghal<br/><span className="text-ink/45 dark:text-white/45">Developer / PH</span></span>
        </a>
        <div className="hidden items-center gap-5 lg:gap-7 md:flex">
          {links.map(({ id, label }, index) => <a key={id} href={`#${id}`} className={`font-mono text-[10px] font-bold uppercase tracking-[.12em] transition hover:text-electric dark:hover:text-cyanbright ${active === id ? 'text-electric dark:text-cyanbright' : ''}`}><span className="mr-1 text-ink/35 dark:text-white/35">0{index + 1}</span> {label}</a>)}
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button type="button" className="grid size-10 place-items-center border-2 border-ink dark:border-white" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </nav>
      {open && <div id="mobile-menu" className="border-t-2 border-ink bg-cyanbright p-5 text-ink dark:border-white"><div className="flex flex-col">{links.map(({ id, label }, index) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="border-b border-ink/25 py-4 font-display text-2xl font-bold uppercase"><span className="mr-3 font-mono text-xs">0{index + 1}</span>{label}</a>)}</div></div>}
    </header>
  )
}
