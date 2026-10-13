import { motion, useReducedMotion } from 'framer-motion'

const profile = {
  image: 'profile-portrait.webp?v=4',
  alt: 'Benedict Tanghal in a white shirt and black tie',
}

export default function ProfilePortrait() {
  const reduce = useReducedMotion()
  const imageUrl = `${import.meta.env.BASE_URL}${profile.image}`

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-[#fefefe]">
      <motion.img
        src={imageUrl}
        alt={profile.alt}
        width="1254"
        height="1254"
        loading="eager"
        fetchPriority="high"
        className="relative h-full w-full object-contain object-[50%_25%]"
        initial={reduce ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  )
}
