import { motion, useReducedMotion } from 'framer-motion'

const profile = {
  image: 'profile-portrait.png?v=3',
  alt: 'Benedict Tanghal facing forward in professional attire',
}

export default function ProfilePortrait() {
  const reduce = useReducedMotion()
  const imageUrl = `${import.meta.env.BASE_URL}${profile.image}`

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-gradient-to-b from-[#e8eaff] to-[#c7cced] dark:from-slate-800 dark:to-slate-950">
      <div className="portrait-halo absolute left-1/2 top-[42%] size-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <motion.img
        src={imageUrl}
        alt={profile.alt}
        width="1254"
        height="1254"
        loading="eager"
        fetchPriority="high"
        className="relative h-full w-full object-cover object-top"
        initial={reduce ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  )
}
