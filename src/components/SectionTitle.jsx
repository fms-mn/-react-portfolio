export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  return <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>{eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}<h2 className="font-display text-4xl font-extrabold uppercase leading-[.95] tracking-[-.045em] sm:text-6xl">{title}</h2>{description && <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-ink/65 dark:text-white/65">{description}</p>}</div>
}
