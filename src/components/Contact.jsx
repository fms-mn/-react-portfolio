import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Github, Linkedin, Loader2, MapPin, Send, XCircle } from 'lucide-react'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''
const CONTACT_EMAIL = 'bdektanghal@gmail.com'
const initial = { name: '', email: '', subject: '', message: '' }

function Field({ label, error, children }) {
  return (
    <div className="group/field flex flex-col gap-1">
      <label className="font-mono text-[9px] font-bold uppercase tracking-[.2em] text-ink/50 transition-colors group-focus-within/field:text-electric">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            key="err"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-1 font-mono text-[9px] font-bold text-red-500"
          >
            <XCircle size={10} />
            {error}
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
    setForm({ ...form, [target.name]: target.value })
    setErrors({ ...errors, [target.name]: '' })
    if (status !== 'idle') setStatus('idle')
  }

  const submit = async (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.subject.trim()) next.subject = 'Subject is required.'
    if (form.message.trim().length < 10) next.message = 'Write at least 10 characters.'
    setErrors(next)
    if (Object.keys(next).length) return

    if (!FORMSPREE_ENDPOINT) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`
      setStatus('success')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setForm(initial)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full border border-ink/20 bg-white/70 px-4 py-3 text-sm font-medium text-ink placeholder:text-ink/35 outline-none transition-all duration-200 focus:border-electric focus:bg-white focus:shadow-[0_0_0_3px_rgba(37,99,235,.12)] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none'

  return (
    <section id="contact" className="border-t border-ink/15 bg-ink py-20 text-white dark:border-white/10 dark:bg-[#0f0f1a] sm:py-24">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)] lg:items-start lg:gap-16">

          {/* Left column */}
          <div className="min-w-0">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-cyanbright/80">04 / Contact channel</p>
            <h2 className="mt-5 max-w-lg font-display text-[clamp(2.5rem,3.25vw,3.5rem)] font-extrabold uppercase leading-[.94] tracking-[-.045em]">
              Let's build<br />
              <span className="text-cyanbright">useful things.</span>
            </h2>
            <p className="mt-7 max-w-md text-sm font-medium leading-7 text-white/70">
              Have a project, internship, or collaboration in mind? Send a short note and I'll get back to you.
            </p>

            <div className="mt-9 border-y border-white/15 py-5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">Direct email</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-2 inline-flex items-center gap-2 border-b border-white/40 pb-0.5 text-sm font-semibold transition hover:border-cyanbright hover:text-cyanbright sm:text-base"
              >
                {CONTACT_EMAIL}
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <p className="flex items-center gap-2 text-xs font-medium text-white/45">
                <MapPin size={13} />
                Batangas, Philippines
              </p>
              <div className="flex gap-2">
                {[
                  { href: 'https://github.com/fms-mn', label: 'GitHub', icon: Github },
                  { href: 'https://www.linkedin.com/in/benedict-tanghal-04b286423/', label: 'LinkedIn', icon: Linkedin },
                ].map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid size-10 place-items-center border border-white/40 text-white/70 transition hover:border-cyanbright hover:bg-cyanbright/10 hover:text-cyanbright"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form card */}
          <form
            onSubmit={submit}
            noValidate
            aria-label="Contact form"
            className="min-w-0 border border-white/20 bg-[#f7f6f2] text-ink shadow-[8px_8px_0_rgba(37,99,235,0.4)] dark:bg-[#f7f6f2] dark:text-ink"
          >
            {/* Card header */}
            <div className="flex items-center justify-between border-b border-ink/10 bg-[#1a1a2e] px-6 py-4 sm:px-8">
              <div>
                <p className="font-display text-lg font-extrabold uppercase text-white">Send a message</p>
                <p className="mt-0.5 text-xs text-white/40">All fields are required</p>
              </div>
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyanbright opacity-60" />
                <span className="relative inline-flex size-3 rounded-full bg-cyanbright" />
              </span>
            </div>

            {/* Fields */}
            <div className="px-6 py-7 sm:px-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" error={errors.name}>
                  <input
                    className={inputBase}
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={update}
                    placeholder="Benedict Tanghal"
                    aria-invalid={!!errors.name}
                  />
                </Field>
                <Field label="Email address" error={errors.email}>
                  <input
                    className={inputBase}
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Subject" error={errors.subject}>
                  <input
                    className={inputBase}
                    name="subject"
                    value={form.subject}
                    onChange={update}
                    placeholder="What should we discuss?"
                    aria-invalid={!!errors.subject}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message" error={errors.message}>
                  <textarea
                    className={`${inputBase} min-h-28 resize-y`}
                    name="message"
                    value={form.message}
                    onChange={update}
                    placeholder="A few details about the idea…"
                    aria-invalid={!!errors.message}
                  />
                </Field>
              </div>

              {/* Footer row */}
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-5">
                <button
                  type="submit"
                  className="btn-primary disabled:pointer-events-none disabled:opacity-60"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={14} />
                    </>
                  )}
                </button>
                <p className="text-xs text-ink/35">
                  Typical reply: 1–2 days
                </p>
              </div>

              {/* Status banner */}
              <AnimatePresence>
                {(status === 'success' || status === 'error') && (
                  <motion.div
                    key={status}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.22 }}
                    className={`mt-4 flex items-center gap-2 border px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-wider ${
                      status === 'success'
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                        : 'border-red-200 bg-red-50 text-red-600'
                    }`}
                    aria-live="polite"
                  >
                    {status === 'success' ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                    {status === 'success'
                      ? 'Your email client is ready — thanks for reaching out!'
                      : 'Something went wrong. Please email me directly.'}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}
