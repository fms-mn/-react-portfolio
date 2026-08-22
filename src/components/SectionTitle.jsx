export default function SectionTitle({ eyebrow, title, description, light = false }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div className="mb-5 flex items-center gap-3">
          <span className={`h-px w-8 ${light ? 'bg-acid' : 'bg-brand'}`} />
          <p className={light ? 'font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-acid' : 'eyebrow'}>{eyebrow}</p>
        </div>
      )}
      <h2 className={`font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-slate-950 dark:text-white'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-2xl text-base font-medium leading-relaxed sm:text-lg ${light ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
