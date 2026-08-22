import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <a href="#main" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white transition focus:translate-y-0">
        Skip to content
      </a>
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-[#f8f9fc] py-8 dark:border-white/10 dark:bg-midnight">
        <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#about" className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-lg bg-brand text-xs font-extrabold text-white">BT</span>
            <span>
              <span className="block font-display text-sm font-bold text-slate-950 dark:text-white">Benedict Tanghal</span>
              <span className="block text-[0.65rem] font-semibold text-slate-400">Designed with intent. Built with care.</span>
            </span>
          </a>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-[0.1em] text-slate-400">
            <a href="#about" className="transition hover:text-brand">About</a>
            <a href="#projects" className="transition hover:text-brand">Work</a>
            <a href="#certifications" className="transition hover:text-brand">Credentials</a>
            <a href="#contact" className="transition hover:text-brand">Contact</a>
          </nav>
          <p className="text-xs font-semibold text-slate-400">© {new Date().getFullYear()} Benedict Tanghal</p>
        </div>
      </footer>

      <BackToTop />
    </>
  )
}
