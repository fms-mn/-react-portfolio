import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - innerHeight
      setVisible(scrollY > 600 && scrollable > 0)
      setProgress(scrollable > 0 ? Math.min(100, (scrollY / scrollable) * 100) : 0)
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onScroll)
    return () => { removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll) }
  }, [])

  if (!visible) return null
  return (
    <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group fixed bottom-6 right-6 z-40 grid size-14 place-items-center rounded-full p-1 shadow-[0_10px_30px_rgba(0,0,0,.3)] transition hover:-translate-y-1" style={{ background: `conic-gradient(#8edfd0 ${progress * 3.6}deg, rgba(255,255,255,.35) 0deg)` }} aria-label="Back to top">
      <span className="absolute right-[calc(100%+10px)] hidden whitespace-nowrap border border-white/25 bg-ink px-3 py-2 font-mono text-[8px] font-bold uppercase tracking-[.14em] text-white opacity-0 shadow-lg transition group-hover:opacity-100 md:block">Back to top</span>
      <span className="grid size-11 place-items-center rounded-full border border-white/60 bg-ink text-white transition group-hover:bg-electric"><ArrowUp size={17} strokeWidth={2.5} /></span>
    </button>
  )
}
