import { useState } from 'react'
import { ArrowUpRight, Github, Linkedin, MapPin, Send } from 'lucide-react'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''
const CONTACT_EMAIL = 'bdektanghal@gmail.com'
const initial = { name: '', email: '', subject: '', message: '' }
const fieldClass = 'mt-2 w-full border-0 border-b-2 !border-ink/35 bg-transparent px-0 py-3 text-sm !text-ink !placeholder:text-ink/40 focus:!border-electric focus:outline-none focus:ring-0'

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const update = ({ target }) => { setForm({ ...form, [target.name]: target.value }); setErrors({ ...errors, [target.name]: '' }); setStatus('idle') }
  const submit = async (event) => {
    event.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email.'
    if (!form.subject.trim()) next.subject = 'Please add a subject.'
    if (form.message.trim().length < 10) next.message = 'Please write at least 10 characters.'
    setErrors(next)
    if (Object.keys(next).length) return
    if (!FORMSPREE_ENDPOINT) { window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`; setStatus('success'); return }
    setStatus('sending')
    try { const response = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(form) }); if (!response.ok) throw new Error(); setForm(initial); setStatus('success') } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="border-t-2 border-ink bg-[#18383b] py-20 text-white dark:border-white/70 dark:bg-[#0f1b1f] sm:py-24">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)] lg:items-start lg:gap-16">
          <div className="min-w-0">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-cyanbright">04 / Contact channel</p>
            <h2 className="mt-5 max-w-lg font-display text-[clamp(2.5rem,3.25vw,3.5rem)] font-extrabold uppercase leading-[.94] tracking-[-.045em]">Let’s build<br/><span className="text-cyanbright">useful things.</span></h2>
            <p className="mt-7 max-w-md text-sm font-medium leading-7 text-white/70">Have a project, internship, or collaboration in mind? Send a short note and I’ll get back to you.</p>
            <div className="mt-9 border-y border-white/30 py-5"><p className="font-mono text-[9px] font-bold uppercase tracking-[.16em] text-white/50">Direct email</p><a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 inline-flex items-center gap-2 border-b border-white pb-1 text-sm font-bold sm:text-base">{CONTACT_EMAIL}<ArrowUpRight size={17} /></a></div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4"><p className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-wider text-white/60"><MapPin size={14} />Batangas, Philippines</p><div className="flex gap-2"><a href="https://github.com/fms-mn" target="_blank" rel="noreferrer" className="grid size-10 place-items-center border border-white/60 transition hover:bg-white hover:text-electric" aria-label="GitHub"><Github size={16} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="grid size-10 place-items-center border border-white/60 transition hover:bg-white hover:text-electric" aria-label="LinkedIn"><Linkedin size={16} /></a></div></div>
          </div>

          <form onSubmit={submit} noValidate className="min-w-0 border-2 border-white/80 bg-[#f5f2ea] p-6 text-ink shadow-[8px_8px_0_#8edfd0] dark:bg-[#f5f2ea] dark:text-ink sm:p-8" aria-label="Contact form">
            <div className="mb-7 flex items-center justify-between border-b-2 border-ink pb-4"><div><p className="font-display text-xl font-extrabold uppercase">Send a message</p><p className="mt-1 text-xs text-ink/50">All fields are required.</p></div><span className="size-3 rounded-full bg-cyanbright ring-4 ring-cyanbright/25" /></div>
            <div className="grid gap-5 sm:grid-cols-2">{[['name', 'Your name', 'text', 'Your full name'], ['email', 'Email address', 'email', 'you@example.com']].map(([name, label, type, placeholder]) => <label key={name} className="font-mono text-[10px] font-bold uppercase tracking-wider">{label}<input className={fieldClass} name={name} type={type} value={form[name]} onChange={update} placeholder={placeholder} aria-invalid={!!errors[name]} />{errors[name] && <span className="mt-1 block text-[10px] text-red-600">{errors[name]}</span>}</label>)}</div>
            <label className="mt-5 block font-mono text-[10px] font-bold uppercase tracking-wider">Subject<input className={fieldClass} name="subject" value={form.subject} onChange={update} placeholder="What should we discuss?" aria-invalid={!!errors.subject} />{errors.subject && <span className="mt-1 block text-[10px] text-red-600">{errors.subject}</span>}</label>
            <label className="mt-5 block font-mono text-[10px] font-bold uppercase tracking-wider">Message<textarea className={`${fieldClass} min-h-24 resize-y`} name="message" value={form.message} onChange={update} placeholder="A few details about the idea…" aria-invalid={!!errors.message} />{errors.message && <span className="mt-1 block text-[10px] text-red-600">{errors.message}</span>}</label>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4"><button className="btn-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}<Send size={15} /></button><p className="font-mono text-[8px] font-bold uppercase tracking-wider text-ink/40">Typical reply: 1–2 days</p></div>
            <div className="mt-3 min-h-5 text-xs" aria-live="polite">{status === 'success' && 'Your email client is ready—thanks for reaching out.'}{status === 'error' && 'Something went wrong. Please email me directly.'}</div>
          </form>
        </div>
      </div>
    </section>
  )
}
