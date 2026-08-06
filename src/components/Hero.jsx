import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react'
import ProfilePortrait from './ProfilePortrait'

export default function Hero() {
  const reduce = useReducedMotion()
  const enter = reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: .65, ease: [0.2, .8, .2, 1] } }
  return (
    <section id="about" className="relative overflow-hidden border-b-2 border-ink pb-0 pt-[74px] dark:border-white">
      <div className="container-shell grid min-h-[calc(100vh-74px)] items-center gap-16 py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,.85fr)] lg:gap-12 lg:py-20">
        <motion.div className="min-w-0" {...enter}>
          <div className="rule-label max-w-xl"><span>Portfolio / 2026</span></div>
          <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[.18em] text-electric dark:text-cyanbright">Computer science student · Software developer</p>
          <h1 className="mt-5 font-display text-[13.5vw] font-extrabold uppercase leading-[.78] tracking-[-.08em] sm:text-[11vw] lg:text-[clamp(4.5rem,5.35vw,6.4rem)]">
            Benedict<br/><span className="relative inline-block text-electric dark:text-cyanbright">Tanghal<span className="absolute -right-7 -top-2 text-3xl text-coral">✦</span></span>
          </h1>
          <div className="mt-10 grid max-w-3xl gap-7 border-t-2 border-ink pt-7 dark:border-white sm:grid-cols-[1fr_auto]">
            <p className="max-w-xl text-base font-medium leading-7 text-ink/70 dark:text-white/70 sm:text-lg">I translate complex problems into clear, dependable digital products—with a focus on useful interactions, considered systems, and code that lasts.</p>
            <div className="flex items-start gap-2">
              <a href="https://github.com/fms-mn" target="_blank" rel="noreferrer" className="grid size-11 place-items-center border-2 border-ink transition hover:bg-ink hover:text-cyanbright dark:border-white dark:hover:bg-white dark:hover:text-ink" aria-label="GitHub"><Github size={18}/></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="grid size-11 place-items-center border-2 border-ink transition hover:bg-ink hover:text-cyanbright dark:border-white dark:hover:bg-white dark:hover:text-ink" aria-label="LinkedIn"><Linkedin size={18}/></a>
              <a href="mailto:bdektanghal@gmail.com" className="grid size-11 place-items-center border-2 border-ink transition hover:bg-ink hover:text-cyanbright dark:border-white dark:hover:bg-white dark:hover:text-ink" aria-label="Email"><Mail size={18}/></a>
            </div>
          </div>
          <div className="mt-9 flex flex-wrap gap-4"><a href="#projects" className="btn-primary">Explore my work <ArrowDownRight size={17}/></a><a href="#contact" className="btn-secondary">Start a conversation</a></div>
        </motion.div>
        <motion.div className="min-w-0" {...(reduce ? {} : { initial: { opacity: 0, x: 28 }, animate: { opacity: 1, x: 0 }, transition: { duration: .7, delay: .12 } })}><ProfilePortrait /></motion.div>
      </div>
      <div className="overflow-hidden border-t-2 border-ink bg-ink py-3 text-cyanbright dark:border-white dark:bg-cyanbright dark:text-ink" aria-hidden="true"><div className="marquee-track flex w-max whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[.24em]"><span>React development ✦ UI systems ✦ Full-stack learning ✦ Accessible experiences ✦ Based in Batangas, Philippines ✦&nbsp;</span><span>React development ✦ UI systems ✦ Full-stack learning ✦ Accessible experiences ✦ Based in Batangas, Philippines ✦&nbsp;</span></div></div>
    </section>
  )
}
