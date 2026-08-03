import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import SectionTitle from "./SectionTitle";

// Replace this with your Formspree endpoint, e.g. https://formspree.io/f/your-id.
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";
const CONTACT_EMAIL = "bdektanghal@gmail.com";

const initial = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    if (!form.subject.trim()) next.subject = "Please enter a subject.";
    if (form.message.trim().length < 10)
      next.message = "Please write at least 10 characters.";
    setErrors(next);
    return !Object.keys(next).length;
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!validate()) return;
    if (!FORMSPREE_ENDPOINT) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`;
      setStatus("success");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Request failed");
      setForm(initial);
      setStatus("success");
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  const update = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
    setErrors({ ...errors, [target.name]: "" });
    setStatus("idle");
  };

  return (
    <section
      id="contact"
      className="section-pad border-t bg-blue-50/50 dark:bg-slate-900/35"
    >
      <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Let’s Build Something Together"
            description="I’m open to collaborations, internships, and software development opportunities. If you have an idea or opportunity in mind, I’d be glad to hear about it."
          />
          <div className="mt-8 space-y-4 text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 font-medium hover:text-electric dark:hover:text-cyan-300"
            >
              <Mail className="text-electric dark:text-cyan-300" size={19} />
              {CONTACT_EMAIL}
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="text-electric dark:text-cyan-300" size={19} />
              Batangas, Philippines
            </p>
            <a
            href="https://github.com/fms-mn"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 font-medium hover:text-electric dark:hover:text-cyan-300"
            >
              <Github className="text-electric dark:text-cyan-300" size={19} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 font-medium hover:text-electric dark:hover:text-cyan-300"
            >
              <Linkedin
                className="text-electric dark:text-cyan-300"
                size={19}
              />
              LinkedIn
            </a>
          </div>
        </div>
        <form
          onSubmit={submit}
          noValidate
          className="card p-6 sm:p-8"
          aria-label="Contact form"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["name", "Full Name", "text", "Your name"],
              ["email", "Email Address", "email", "you@example.com"],
            ].map(([name, label, type, placeholder]) => (
              <label key={name} className="text-sm font-semibold">
                {label}
                <input
                  className="field"
                  name={name}
                  type={type}
                  value={form[name]}
                  onChange={update}
                  placeholder={placeholder}
                  aria-invalid={!!errors[name]}
                  aria-describedby={`${name}-error`}
                />
                {errors[name] && (
                  <span
                    id={`${name}-error`}
                    className="mt-1.5 block text-xs font-medium text-rose-600 dark:text-rose-400"
                  >
                    {errors[name]}
                  </span>
                )}
              </label>
            ))}
          </div>
          <label className="mt-5 block text-sm font-semibold">
            Subject
            <input
              className="field"
              name="subject"
              value={form.subject}
              onChange={update}
              placeholder="What would you like to discuss?"
              aria-invalid={!!errors.subject}
              aria-describedby="subject-error"
            />
            {errors.subject && (
              <span
                id="subject-error"
                className="mt-1.5 block text-xs font-medium text-rose-600 dark:text-rose-400"
              >
                {errors.subject}
              </span>
            )}
          </label>
          <label className="mt-5 block text-sm font-semibold">
            Message
            <textarea
              className="field min-h-36 resize-y"
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Tell me a little about your project or opportunity…"
              aria-invalid={!!errors.message}
              aria-describedby="message-error"
            />
            {errors.message && (
              <span
                id="message-error"
                className="mt-1.5 block text-xs font-medium text-rose-600 dark:text-rose-400"
              >
                {errors.message}
              </span>
            )}
          </label>
          <button
            className="btn-primary mt-6 w-full sm:w-auto"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Message"}
            <Send size={17} />
          </button>
          <div className="mt-4 min-h-6" aria-live="polite">
            {status === "success" && (
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                Your message is ready to send. Thank you for reaching out!
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-rose-600 dark:text-rose-400">
                The message could not be sent. Please try again or email me
                directly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
