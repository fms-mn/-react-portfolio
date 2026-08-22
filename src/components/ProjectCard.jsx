import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Eye, ShieldCheck, X } from 'lucide-react'

const accents = [
  ['bg-brand', 'text-brand', 'bg-brand/10'],
  ['bg-coral', 'text-coral', 'bg-coral/10'],
  ['bg-[#10b981]', 'text-emerald-500', 'bg-emerald-500/10'],
  ['bg-[#a855f7]', 'text-purple-500', 'bg-purple-500/10'],
]

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)
  const closeRef = useRef(null)
  const reduce = useReducedMotion()
  const [dot, text, tint] = accents[index % accents.length]

  useEffect(() => {
    if (!open) return undefined
    const onKey = event => event.key === 'Escape' && setOpen(false)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        initial={reduce ? false : { opacity: 0, y: 22 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: index * 0.07 }}
        className="group relative overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white text-left shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition duration-500 hover:-translate-y-2 hover:border-brand/30 hover:shadow-[0_28px_80px_rgba(77,92,255,0.15)] dark:border-white/10 dark:bg-white/[0.045]"
        aria-label={`View details for ${project.title}`}
      >
        <div className="relative m-2.5 aspect-[16/10] overflow-hidden rounded-[1.15rem] bg-slate-100 dark:bg-slate-900">
          <img
            src={project.image}
            alt={`${project.title} interface`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-20 transition group-hover:opacity-70" />
          <span className="absolute left-4 top-4 rounded-lg border border-white/40 bg-white/85 px-3 py-1.5 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-700 backdrop-blur dark:border-white/15 dark:bg-slate-950/75 dark:text-slate-200">
            {project.type}
          </span>
          <span className="absolute bottom-4 right-4 flex translate-y-2 items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-slate-950 opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View case <Eye size={14} />
          </span>
        </div>

        <div className="p-6 pt-4 sm:p-7 sm:pt-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className={`size-2.5 rounded-full ${dot}`} />
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] text-slate-400">Project 0{index + 1}</p>
            </div>
            <ArrowUpRight className={`transition duration-300 group-hover:rotate-45 ${text}`} size={20} />
          </div>
          <h3 className="mt-4 font-display text-2xl font-extrabold tracking-[-0.03em] text-slate-950 dark:text-white sm:text-3xl">{project.title}</h3>
          <p className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.highlights.slice(0, 2).map(item => (
              <span key={item} className={`rounded-lg px-2.5 py-1.5 text-[0.68rem] font-bold ${tint} ${text}`}>{item}</span>
            ))}
          </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-slate-950/75 p-4 backdrop-blur-md"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={event => event.target === event.currentTarget && setOpen(false)}
            role="presentation"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={`project-${index}-title`}
              className="relative my-6 w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#f8f9fc] shadow-2xl dark:bg-slate-950"
              initial={reduce ? false : { opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.28 }}
            >
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-xl border border-slate-200 bg-white/90 text-slate-700 shadow-md backdrop-blur transition hover:rotate-6 hover:border-brand hover:text-brand dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-200"
                aria-label="Close project details"
              >
                <X size={19} />
              </button>

              <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
                <div className="flex items-center bg-slate-200/70 p-4 sm:p-6 dark:bg-slate-900">
                  <img src={project.image} alt={`${project.title} interface`} className="max-h-[620px] w-full rounded-xl object-contain shadow-xl" />
                </div>

                <div className="p-6 sm:p-9 lg:pt-16">
                  <div className="flex items-center gap-3">
                    <span className={`size-2.5 rounded-full ${dot}`} />
                    <p className="eyebrow">{project.type}</p>
                  </div>
                  <h3 id={`project-${index}-title`} className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">{project.description}</p>

                  <div className="mt-8 border-t border-slate-200 pt-6 dark:border-white/10">
                    <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.17em] text-slate-400">Key features</p>
                    <ul className="mt-4 space-y-3">
                      {project.highlights.map(item => (
                        <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                          <span className={`grid size-6 place-items-center rounded-lg text-[0.6rem] font-bold ${tint} ${text}`}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-8 flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-3.5 text-xs leading-relaxed text-slate-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400">
                    <ShieldCheck className={`mt-0.5 shrink-0 ${text}`} size={15} />
                    Confidential information has been intentionally obscured.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
