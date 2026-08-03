import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import ProfileImageUploader from './ProfileImageUploader'

export default function Hero() {
  const reduce = useReducedMotion()
  const enter = reduce ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45 } }
  return (
    <section id="about" className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-40 lg:min-h-screen lg:pt-36">
      <div className="pointer-events-none absolute -right-40 top-20 -z-10 size-96 rounded-full bg-cyan-200/35 blur-3xl dark:bg-cyan-800/10" />
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
        <motion.div {...enter}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-semibold text-electric shadow-sm dark:bg-panel dark:text-cyan-300"><span className="size-2 rounded-full bg-coral" />Hello, I’m</div>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Benedict <span className="bg-gradient-to-r from-electric via-blue-500 to-cyanbright bg-clip-text text-transparent">Tanghal</span></h1>
          <p className="mt-6 text-xl font-semibold text-slate-700 dark:text-slate-200 sm:text-2xl">Computer Science Student &amp; Software Developer</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">I’m a Computer Science student and software developer focused on creating practical, reliable, and user-friendly digital solutions. I enjoy turning complex problems into clean and intuitive applications.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#projects" className="btn-primary">View Projects <ArrowDown size={17} /></a><a href="#contact" className="btn-secondary">Contact Me</a></div>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-600 dark:text-slate-300">
            <a href="https://github.com/fms-mn" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-electric dark:hover:text-cyan-300" aria-label="Visit Benedict's GitHub profile"><Github size={18} />GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-electric dark:hover:text-cyan-300" aria-label="Visit Benedict's LinkedIn profile"><Linkedin size={18} />LinkedIn</a>
            <a href="mailto:bdektanghal@gmail.com" className="flex items-center gap-2 transition hover:text-electric dark:hover:text-cyan-300"><Mail size={18} />Email</a>
          </div>
          <dl className="mt-10 grid max-w-2xl gap-4 border-t pt-7 sm:grid-cols-3">
            {[['Location', 'Batangas, Philippines'], ['Focus', 'Full-Stack Development'], ['Education', 'BS Computer Science']].map(([term, value]) => <div key={term}><dt className="text-xs font-bold uppercase tracking-wider text-slate-400">{term}</dt><dd className="mt-1.5 text-sm font-semibold">{term === 'Location' && <MapPin className="mr-1 inline" size={15} />}{value}</dd></div>)}
          </dl>
        </motion.div>
        <motion.div {...(reduce ? {} : { initial: { opacity: 0, scale: .98 }, animate: { opacity: 1, scale: 1 }, transition: { duration: .5, delay: .1 } })}><ProfileImageUploader /></motion.div>
      </div>
    </section>
  )
}
