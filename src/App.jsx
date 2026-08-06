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
  return <><a href="#main" className="fixed left-4 top-3 z-[100] -translate-y-20 border-2 border-ink bg-cyanbright px-4 py-2 font-mono text-xs font-bold uppercase text-ink transition focus:translate-y-0">Skip to content</a><Navbar theme={theme} onThemeToggle={toggleTheme} /><main id="main"><Hero /><About /><Projects /><Certifications /><Contact /></main><BackToTop /></>
}
