import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return <footer className="border-t bg-white py-8 dark:bg-midnight"><div className="container-shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"><div><p className="font-bold">Benedict Tanghal</p><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} · Designed and built with care.</p></div><a href="#about" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-blue-300 dark:hover:border-cyan-500" aria-label="Back to top">Back to top <ArrowUp size={16} /></a></div></footer>
}
