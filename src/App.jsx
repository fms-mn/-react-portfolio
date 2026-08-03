import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  return <><a href="#main" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-electric px-4 py-2 text-sm font-semibold text-white transition focus:translate-y-0">Skip to content</a><Navbar theme={theme} onThemeToggle={toggleTheme} /><main id="main"><Hero /><About /><Projects /><Contact /></main><Footer /></>
}
