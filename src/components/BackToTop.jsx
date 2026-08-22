import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(scrollY > 600)
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-xl bg-brand text-white shadow-[0_12px_30px_rgba(77,92,255,0.35)] transition hover:-translate-y-1 hover:bg-slate-950 dark:hover:bg-acid dark:hover:text-slate-950 sm:bottom-6 sm:right-6"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}
