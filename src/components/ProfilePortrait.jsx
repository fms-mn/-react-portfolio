import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Moon, ScanFace, UserRound } from 'lucide-react'

const modes = [
  { id: 'front', label: 'Front', icon: UserRound, image: 'profile-portrait.png?v=3', alt: 'Benedict Tanghal facing forward in professional attire', status: 'Professional mode', note: 'Ready to build' },
  { id: 'side', label: 'Side', icon: ScanFace, image: 'profile-side.png?v=2', alt: 'Side profile of Benedict Tanghal in professional attire', status: 'Side-view mode', note: 'Checking another angle' },
  { id: 'sleep', label: 'Sleep', icon: Moon, image: 'profile-sleep.png', alt: 'Benedict Tanghal with eyes closed in professional attire', status: 'Low-power mode', note: 'Still compiling…' },
]

export default function ProfilePortrait() {
  const [mode, setMode] = useState('front')
  const reduce = useReducedMotion()
  const current = modes.find(item => item.id === mode)
  const imageUrl = `${import.meta.env.BASE_URL}${current.image}`

  return (
    <div className="relative mx-auto w-full max-w-[460px] lg:mr-0">
      <div className="absolute -left-4 -top-4 size-20 border-l-2 border-t-2 border-ink dark:border-white" />
      <div className="absolute -bottom-5 -right-5 hidden h-3/4 w-3/4 bg-electric sm:block" aria-hidden="true" />
      <div className="relative z-10">
        <figure className="portrait-mask relative overflow-hidden border-2 border-ink bg-white dark:border-white">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img key={mode} src={imageUrl} alt={current.alt} width="1254" height="1254" loading="eager" fetchPriority={mode === 'front' ? 'high' : 'auto'} className="aspect-[4/5] w-full object-cover object-top" initial={reduce ? false : { opacity: 0, scale: 1.035 }} animate={{ opacity: 1, scale: 1 }} exit={reduce ? {} : { opacity: 0 }} transition={{ duration: .35 }} />
          </AnimatePresence>

          {mode === 'sleep' && <div className="pointer-events-none absolute right-8 top-16 font-display font-extrabold text-ink" aria-hidden="true">{['Z', 'z', 'z'].map((letter, index) => <motion.span key={index} className="absolute" style={{ right: index * 20, top: -index * 22, fontSize: `${28 - index * 6}px` }} animate={reduce ? {} : { y: [0, -8, 0], opacity: [.35, 1, .35] }} transition={{ duration: 1.6, repeat: Infinity, delay: index * .25 }}>{letter}</motion.span>)}</div>}

          <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-5 pt-20 text-white">
            <div><p className="font-display text-lg font-bold">Benedict Tanghal</p><p className="font-mono text-[9px] uppercase tracking-[.16em] text-cyanbright">{current.status}</p></div>
            <span className="max-w-28 text-right font-mono text-[8px] uppercase leading-4 tracking-wider text-white/70">{current.note}</span>
          </figcaption>
        </figure>

        <div className="grid grid-cols-3 border-x-2 border-b-2 border-ink bg-[#f3f0e8] dark:border-white dark:bg-panel" aria-label="Choose profile photo mode">
          {modes.map(({ id, label, icon: Icon }) => <button key={id} type="button" onClick={() => setMode(id)} className={`flex items-center justify-center gap-2 border-r border-ink/20 px-2 py-3 font-mono text-[8px] font-bold uppercase tracking-wider transition last:border-r-0 dark:border-white/20 ${mode === id ? 'bg-cyanbright text-ink' : 'hover:bg-ink hover:text-white dark:hover:bg-white dark:hover:text-ink'}`} aria-pressed={mode === id}><Icon size={14} />{label}</button>)}
        </div>
      </div>
      <div className="absolute -right-3 top-10 z-20 bg-cyanbright px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[.14em] text-ink [writing-mode:vertical-rl]">Available for opportunities</div>
    </div>
  )
}
