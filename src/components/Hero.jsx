import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react'
import ProfilePortrait from './ProfilePortrait'

const socials = [
  { href: 'https://github.com/fms-mn', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/benedict-tanghal-04b286423/', label: 'LinkedIn', icon: Linkedin },
  { href: 'mailto:bdektanghal@gmail.com', label: 'Email', icon: Mail },
]

const capabilities = ['React', 'UI Engineering', 'Internal Tools', 'Product Thinking']

export default function Hero() {
  const reduce = useReducedMotion()
  const enter = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
      }

  return (
    <section id="about" className="hero-surface relative isolate min-h-screen overflow-hidden pt-28 sm:pt-32">
      <div className="hero-grid absolute inset-0 -z-20 opacity-60 dark:opacity-25" />
      <div className="absolute -left-40 top-28 -z-10 size-[32rem] rounded-full bg-brand/20 blur-[120px] dark:bg-brand/25" />
      <div className="absolute -right-32 bottom-0 -z-10 size-[28rem] rounded-full bg-acid/20 blur-[120px] dark:bg-acid/10" />

      <div className="container-shell grid min-h-[calc(100vh-7rem)] items-center gap-14 pb-14 pt-8 lg:grid-cols-12 lg:gap-10 lg:pb-16 lg:pt-4">
        <motion.div
          className="relative z-10 min-w-0 lg:col-span-7 lg:pr-8"
          initial="initial"
          animate="animate"
          variants={reduce ? {} : { animate: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={enter} transition={{ duration: 0.55 }} className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-brand dark:border-brand/30 dark:bg-brand/15 dark:text-indigo-300">
            <Sparkles size={14} />
            Building useful things with intention
          </motion.div>

          <motion.p variants={enter} transition={{ duration: 0.6 }} className="mt-7 font-mono text-xs font-bold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
            Hello, I&apos;m
          </motion.p>

          <motion.h1 variants={enter} transition={{ duration: 0.7 }} className="mt-3 max-w-full font-display text-[clamp(3.7rem,6vw,6rem)] font-extrabold leading-[0.84] tracking-[-0.065em] text-slate-950 dark:text-white">
            Benedict
            <span className="block bg-gradient-to-r from-brand via-[#7b5cff] to-[#d459ff] bg-clip-text pb-[0.12em] pr-4 text-transparent">
              Tanghal.
            </span>
          </motion.h1>

          <motion.p variants={enter} transition={{ duration: 0.65 }} className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
            A computer science student and software developer creating practical workplace tools with clean code, thoughtful interfaces, and a human touch.
          </motion.p>

          <motion.div variants={enter} transition={{ duration: 0.65 }} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              Explore my work <ArrowDownRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Start a conversation <ArrowUpRight size={18} />
            </a>
          </motion.div>

          <motion.div variants={enter} transition={{ duration: 0.65 }} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-slate-200/80 pt-6 dark:border-white/10">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>
              Open to opportunities
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <MapPin size={15} className="text-brand" /> Batangas, Philippines
            </div>
            <div className="flex items-center gap-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-lg border border-slate-200 bg-white/70 text-slate-500 transition hover:-translate-y-0.5 hover:border-brand hover:text-brand dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-400 dark:hover:border-brand dark:hover:text-indigo-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[31rem] lg:col-span-5 lg:mr-0 lg:ml-auto"
          initial={reduce ? false : { opacity: 0, x: 40, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-4 rotate-3 rounded-[2.25rem] bg-gradient-to-br from-brand to-[#a14dff] opacity-90 shadow-[0_30px_80px_rgba(76,70,229,0.25)]" />
          <div className="relative overflow-hidden rounded-[1.9rem] border border-white/70 bg-[#dce1ff] p-3 shadow-2xl dark:border-white/15 dark:bg-slate-900">
            <ProfilePortrait />
            <div className="absolute inset-x-3 bottom-3 rounded-[1.25rem] border border-white/30 bg-slate-950/80 p-4 text-white backdrop-blur-xl">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-acid">Current focus</p>
                  <p className="mt-1 font-display text-lg font-bold">Useful systems, better experiences.</p>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-acid text-slate-950"><ArrowUpRight size={18} /></span>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -left-7 top-10 hidden rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/90 sm:block"
            animate={reduce ? {} : { y: [0, -7, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-acid font-mono text-xs font-bold text-slate-950">01</span>
              <div>
                <p className="text-xs font-bold text-slate-950 dark:text-white">Product-minded</p>
                <p className="text-[0.65rem] text-slate-400">Code × people</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-4 bottom-28 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/90 sm:block"
            animate={reduce ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-slate-400">Approach</p>
            <p className="mt-1 text-sm font-bold text-slate-950 dark:text-white">Simple. Clear. Reliable.</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="border-y border-slate-200/80 bg-white/55 py-4 backdrop-blur dark:border-white/10 dark:bg-white/[0.025]">
        <div className="container-shell flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-between">
          <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-400">What I work with</span>
          {capabilities.map((item, index) => (
            <div key={item} className="flex items-center gap-8">
              <span className="font-display text-sm font-bold text-slate-700 dark:text-slate-300">{item}</span>
              {index < capabilities.length - 1 && <span className="hidden size-1.5 rounded-full bg-brand/50 md:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
