import { motion, useReducedMotion } from 'framer-motion'

const profile = {
  image: 'profile-portrait.png?v=3',
  alt: 'Benedict Tanghal facing forward in professional attire',
  status: 'Available for work',
  note: 'Open to opportunities',
}

export default function ProfilePortrait() {
  const reduce = useReducedMotion()
  const imageUrl = `${import.meta.env.BASE_URL}${profile.image}`

  return (
    <div className="relative mx-auto w-full max-w-[440px] lg:mr-0">
      {/* Thin corner accent — top-left */}
      <div className="absolute -left-3 -top-3 size-16 border-l-2 border-t-2 border-electric/50 dark:border-cyanbright/40" />

      {/* Soft background block — bottom-right */}
      <div className="absolute -bottom-4 -right-4 hidden h-3/4 w-3/4 bg-electric/10 dark:bg-cyanbright/10 sm:block" aria-hidden="true" />

      <div className="relative z-10">
        <figure className="portrait-mask relative overflow-hidden border border-ink/20 bg-white dark:border-white/15">
          <motion.img
            src={imageUrl}
            alt={profile.alt}
            width="1254"
            height="1254"
            loading="eager"
            fetchPriority="high"
            className="aspect-[4/5] w-full object-cover object-top"
            initial={reduce ? false : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Caption overlay */}
          <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-5 pt-16 text-white">
            <div>
              <p className="font-display text-base font-bold">Benedict Tanghal</p>
              <p className="mt-0.5 text-[10px] font-semibold tracking-widest text-electric/90 dark:text-cyanbright">{profile.status}</p>
            </div>
            <span className="max-w-[120px] text-right text-[9px] leading-5 tracking-wide text-white/55">{profile.note}</span>
          </figcaption>
        </figure>

        {/* Availability badge — right edge, now in blue */}
        <div className="absolute -right-3 top-10 z-20 bg-electric px-3 py-2 text-[8px] font-bold uppercase tracking-[.15em] text-white [writing-mode:vertical-rl] dark:bg-electric">
          Available for opportunities
        </div>
      </div>
    </div>
  )
}
