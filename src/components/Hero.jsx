import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react'
import ProfilePortrait from './ProfilePortrait'

export default function Hero() {
  const reduce = useReducedMotion()

  const fadeUp = reduce
    ? {}
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } }

  const fadeRight = reduce
    ? {}
    : { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.65, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] } }

  return (
    <section id="about" className="relative border-b border-ink/20 pb-0 pt-[74px] dark:border-white/15">
      <div className="container-shell grid min-h-[calc(100vh-74px)] items-center gap-12 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:gap-20">

        {/* ── Left: text content ── */}
        <motion.div className="min-w-0" {...fadeUp}>

          {/* Eyebrow */}
          <p className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-ink/40 dark:text-white/40">
            Portfolio / 2026
          </p>

          {/* Role */}
          <p className="mt-4 text-sm font-semibold tracking-wide text-electric dark:text-cyanbright">
            Computer Science Student &nbsp;·&nbsp; Software Developer
          </p>

          {/* Name — clamped to stay within column at all sizes */}
          <h1
            className="mt-5 font-display font-extrabold uppercase leading-[.85] tracking-[-0.04em] text-ink dark:text-white"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}
          >
            Benedict<br />
            <span className="text-electric dark:text-cyanbright">Tanghal</span>
          </h1>

          {/* Divider + bio */}
          <div className="mt-10 max-w-lg border-t border-ink/20 pt-8 dark:border-white/15">
            <p className="text-base leading-8 text-ink/65 dark:text-white/65">
              I translate complex problems into clear, dependable digital products — with a focus on
              useful interactions, considered systems, and code that lasts.
            </p>

            {/* Social icons */}
            <div className="mt-7 flex gap-3">
              {[
                { href: 'https://github.com/fms-mn', label: 'GitHub', icon: Github },
                { href: 'https://www.linkedin.com/in/benedict-tanghal-04b286423/', label: 'LinkedIn', icon: Linkedin },
                { href: 'mailto:bdektanghal@gmail.com', label: 'Email', icon: Mail },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
                  aria-label={label}
                  className="grid size-10 place-items-center border border-ink/25 text-ink/60 transition hover:border-electric hover:bg-electric hover:text-white dark:border-white/25 dark:text-white/60 dark:hover:border-cyanbright dark:hover:bg-cyanbright dark:hover:text-ink"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              Explore my work <ArrowDownRight size={15} />
            </a>
            <a href="#contact" className="btn-secondary">Start a conversation</a>
          </div>
        </motion.div>

        {/* ── Right: portrait ── */}
        <motion.div className="min-w-0" {...fadeRight}>
          <ProfilePortrait />
        </motion.div>
      </div>

      {/* Ticker strip */}
      <div
        className="overflow-hidden border-t border-ink/20 bg-ink py-3 text-white/60 dark:border-white/10 dark:bg-[#0f0f1a]"
        aria-hidden="true"
      >
        <div className="marquee-track flex w-max whitespace-nowrap font-mono text-[9px] font-bold uppercase tracking-[.26em]">
          <span>React &nbsp;·&nbsp; JavaScript &nbsp;·&nbsp; UI Engineering &nbsp;·&nbsp; Full-Stack Learning &nbsp;·&nbsp; Batangas, Philippines &nbsp;·&nbsp;&nbsp;</span>
          <span>React &nbsp;·&nbsp; JavaScript &nbsp;·&nbsp; UI Engineering &nbsp;·&nbsp; Full-Stack Learning &nbsp;·&nbsp; Batangas, Philippines &nbsp;·&nbsp;&nbsp;</span>
        </div>
      </div>
    </section>
  )
}
