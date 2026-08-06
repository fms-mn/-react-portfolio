import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Eye, ShieldCheck, X } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)
  const closeRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => { document.body.style.overflow = ''; removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: .2 }}
        transition={{ duration: .45, delay: index * .07 }}
        className="group relative aspect-[16/10] min-h-[300px] overflow-hidden border-2 border-ink bg-ink text-left text-white dark:border-white"
        aria-label={`View details for ${project.title}`}
      >
        <img src={project.image} alt={`${project.title} interface with confidential information blurred`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045] group-focus-visible:scale-[1.045]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent transition duration-500 group-hover:bg-ink/78 group-focus-visible:bg-ink/78" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
          <div className="flex items-end justify-between gap-5 transition duration-500 group-hover:-translate-y-2 group-focus-visible:-translate-y-2">
            <div><p className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-cyanbright">0{index + 1} / {project.type}</p><h3 className="mt-2 font-display text-2xl font-extrabold uppercase leading-none sm:text-3xl">{project.title}</h3></div>
            <span className="grid size-11 shrink-0 place-items-center border-2 border-white bg-cyanbright text-ink transition duration-300 group-hover:rotate-45 group-focus-visible:rotate-45"><ArrowUpRight size={20} /></span>
          </div>
          <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100"><div className="overflow-hidden"><p className="max-w-xl pt-4 text-sm leading-6 text-white/80">{project.description}</p><span className="mt-4 inline-flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[.16em] text-cyanbright"><Eye size={14} /> Click to view details</span></div></div>
        </div>
      </motion.button>

      <AnimatePresence>
        {open && <motion.div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-ink/85 p-4 backdrop-blur-sm" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)} role="presentation">
          <motion.div role="dialog" aria-modal="true" aria-labelledby={`project-${index}-title`} className="relative my-6 w-full max-w-5xl overflow-hidden border-2 border-white bg-[#f3f0e8] text-ink shadow-[10px_10px_0_#8edfd0] dark:bg-panel dark:text-white" initial={reduce ? false : { opacity: 0, y: 30, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: .98 }} transition={{ duration: .28 }}>
            <button ref={closeRef} type="button" onClick={() => setOpen(false)} className="absolute right-3 top-3 z-20 grid size-11 place-items-center border-2 border-ink bg-cyanbright text-ink transition hover:rotate-90 dark:border-white" aria-label="Close project details"><X size={20} /></button>
            <div className="grid lg:grid-cols-[1.25fr_.75fr]">
              <div className="bg-ink p-3"><img src={project.image} alt={`${project.title} interface with confidential information blurred`} className="h-full max-h-[620px] w-full object-contain" /></div>
              <div className="p-6 sm:p-9 lg:pt-20">
                <p className="eyebrow">Project 0{index + 1} / {project.type}</p>
                <h3 id={`project-${index}-title`} className="mt-4 font-display text-3xl font-extrabold uppercase leading-[.95] sm:text-4xl">{project.title}</h3>
                <p className="mt-6 text-sm font-medium leading-7 text-ink/65 dark:text-white/65">{project.description}</p>
                <div className="mt-8 border-t-2 border-ink pt-6 dark:border-white"><p className="font-mono text-[10px] font-bold uppercase tracking-[.16em]">Core areas</p><ul className="mt-4 space-y-3">{project.highlights.map(item => <li key={item} className="flex items-center gap-3 text-sm font-semibold"><span className="size-2 bg-electric dark:bg-cyanbright" />{item}</li>)}</ul></div>
                <p className="mt-8 flex items-start gap-2 border border-ink/20 p-3 font-mono text-[9px] font-bold uppercase leading-4 tracking-wider text-ink/55 dark:border-white/20 dark:text-white/55"><ShieldCheck className="mt-0.5 shrink-0" size={14} />Confidential names and identifying information are intentionally obscured.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </>
  )
}
