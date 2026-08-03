export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-electric dark:text-cyan-400">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>}
    </div>
  )
}
