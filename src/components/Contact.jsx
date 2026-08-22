import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Github, Linkedin, Loader2, Mail, MapPin, Send, XCircle } from 'lucide-react'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''
const CONTACT_EMAIL = 'bdektanghal@gmail.com'
const initial = { name: '', email: '', subject: '', message: '' }

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold uppercase tracking-[0.1em] text-slate-500 dark:text-slate-400">{label}</label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="flex items-center gap-1 text-xs font-semibold text-red-500">
            <XCircle size={12} /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const update = ({ target }) => {
    setForm(current => ({ ...current, [target.name]: target.value }))
    setErrors(current => ({ ...current, [target.name]: '' }))
    if (status !== 'idle') setStatus('idle')
  }

  const submit = async event => {
    event.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.subject.trim()) next.subject = 'Subject is required.'
    if (form.message.trim().length < 10) next.message = 'Write at least 10 characters.'
    setErrors(next)
    if (Object.keys(next).length) return

    if (!FORMSPREE_ENDPOINT) {
      setForm(initial)
      setErrors({})
      setStatus('success')
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!response.ok) throw new Error('Request failed')
      setForm(initial)
      setErrors({})
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full rounded-xl border border-slate-200 bg-[#f8f9fc] px-4 py-3.5 text-sm font-medium text-slate-950 placeholder:text-slate-400 outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-brand dark:focus:bg-white/[0.08]'

  return (
    <section id="contact" className="relative overflow-hidden bg-[#f8f9fc] dark:bg-midnight">
      <div className="container-shell section-pad">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#eef1ff] text-ink shadow-[0_30px_90px_rgba(77,92,255,0.10)] dark:border-white/10 dark:bg-slate-950 dark:text-white dark:shadow-[0_35px_100px_rgba(0,0,0,0.20)]">
          <div className="absolute -left-20 top-10 size-72 rounded-full bg-brand/15 blur-[100px] dark:bg-brand/30" />
          <div className="absolute -bottom-24 right-1/3 size-72 rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-500/20" />
          <div className="relative grid lg:grid-cols-[0.86fr_1.14fr]">
            <div className="flex flex-col p-7 sm:p-10 lg:p-12 xl:p-14">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-brand dark:text-acid">Your move</p>
              <h2 className="mt-6 font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Have an idea?<br /><span className="text-brand dark:text-indigo-300">Let&apos;s make it real.</span>
              </h2>
              <p className="mt-6 max-w-md text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                Have a project, internship, or collaboration in mind? Tell me what you&apos;re working on and I&apos;ll get back to you.
              </p>

              <div className="mt-9 space-y-3">
                <a href={`mailto:${CONTACT_EMAIL}`} className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white/75 p-3.5 transition hover:border-brand hover:bg-white dark:border-white/10 dark:bg-white/[0.05] dark:hover:bg-white/[0.08]">
                  <span className="grid size-10 place-items-center rounded-xl bg-brand"><Mail size={18} /></span>
                  <div className="min-w-0"><p className="text-xs font-bold uppercase tracking-[0.1em] text-slate-500">Email me</p><p className="truncate text-sm font-bold">{CONTACT_EMAIL}</p></div>
                  <ArrowUpRight className="ml-auto text-slate-400 transition group-hover:rotate-45 group-hover:text-brand dark:text-slate-500 dark:group-hover:text-acid" size={18} />
                </a>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/75 p-3.5 dark:border-white/10 dark:bg-white/[0.05]">
                  <span className="grid size-10 place-items-center rounded-xl bg-acid text-slate-950"><MapPin size={18} /></span>
                  <div><p className="text-xs font-bold uppercase tracking-[0.1em] text-slate-500">Based in</p><p className="text-sm font-bold">Batangas, Philippines</p></div>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-3 pt-10">
                {[{ href: 'https://github.com/fms-mn', label: 'GitHub', icon: Github }, { href: 'https://www.linkedin.com/in/benedict-tanghal-04b286423/', label: 'LinkedIn', icon: Linkedin }].map(({ href, label, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid size-10 place-items-center rounded-xl border border-slate-300 text-slate-500 transition hover:border-brand hover:text-brand dark:border-white/10 dark:text-slate-400 dark:hover:border-acid dark:hover:text-acid"><Icon size={18} /></a>
                ))}
                <p className="ml-2 text-xs font-semibold text-slate-500 dark:text-slate-500">Typically replies within 1–2 days</p>
              </div>
            </div>

            <form onSubmit={submit} noValidate aria-label="Contact form" className="m-3 rounded-[1.4rem] bg-white p-6 text-slate-950 sm:m-5 sm:p-8 lg:m-6 lg:p-10 dark:bg-slate-900 dark:text-white">
              <div className="flex items-start justify-between gap-6">
                <div><h3 className="font-display text-2xl font-extrabold tracking-[-0.03em]">Send a message</h3><p className="mt-1 text-sm font-medium text-slate-400">All fields are required.</p></div>
                <span className="hidden rounded-xl bg-brand/10 px-3 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-brand sm:block">Say hello</span>
              </div>

              <div className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" error={errors.name}><input className={inputClass} name="name" type="text" value={form.name} onChange={update} placeholder="Your full name" aria-invalid={!!errors.name} /></Field>
                  <Field label="Email" error={errors.email}><input className={inputClass} name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" aria-invalid={!!errors.email} /></Field>
                </div>
                <Field label="Subject" error={errors.subject}><input className={inputClass} name="subject" value={form.subject} onChange={update} placeholder="What should we discuss?" aria-invalid={!!errors.subject} /></Field>
                <Field label="Message" error={errors.message}><textarea className={`${inputClass} min-h-36 resize-y`} name="message" value={form.message} onChange={update} placeholder="A few details about the idea…" aria-invalid={!!errors.message} /></Field>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <button type="submit" className="btn-primary disabled:opacity-60" disabled={status === 'sending'}>
                  {status === 'sending' ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : <><Send size={16} /> Send message</>}
                </button>
                <p className="text-xs font-semibold text-slate-400">No spam. Just a real reply.</p>
              </div>

              <AnimatePresence>
                {(status === 'success' || status === 'error') && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} className={`mt-5 flex items-center gap-2 rounded-xl p-3.5 text-sm font-semibold ${status === 'success' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400'}`} aria-live="polite">
                    {status === 'success' ? <CheckCircle2 size={17} /> : <XCircle size={17} />}
                    {status === 'success' ? 'Your email client is ready—thanks for reaching out!' : 'Something went wrong. Please email me directly.'}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
