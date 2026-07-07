import { useState } from 'react'

// Dropdown options — edit here as offerings change.
const GRADE_LEVELS = [
  'Pre-K / Kindergarten',
  'Elementary (1st–5th)',
  'Middle School (6th–8th)',
  'High School (9th–12th)',
  'Other',
]

const SUBJECT_OPTIONS = [
  'Elementary / Middle School Math',
  'Algebra 1 or 2',
  'Geometry',
  'Precalculus',
  'Calculus I (AB) / Calculus II (BC)',
  'SAT Prep',
  'Java',
  'Python',
  'AP Prep',
  'Other / Not sure',
]

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  gradeLevel: '',
  subject: '',
  format: 'Either',
  helpWith: '',
  availability: '',
  message: '',
}

// ============================================================
// FORM BACKEND — Web3Forms (free, unlimited submissions).
// Paste your access key between the quotes below.
//
// Setup (~2 min):
//   1. Go to https://web3forms.com and enter adreddy35@gmail.com
//   2. They email you an access key (looks like a1b2c3d4-....).
//   3. Paste that key here.
//
// Once filled in, every submission is emailed to you with all the
// fields below. Until then, the form still works but just logs to the
// browser console instead of sending.
// ============================================================
const WEB3FORMS_ACCESS_KEY = '5edb423d-59c7-461b-9848-3f966e16c46d'

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [submitError, setSubmitError] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear the field's error as the user fixes it
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.gradeLevel) next.gradeLevel = 'Please select a grade level.'
    if (!form.subject) next.subject = 'Please select a subject.'
    if (!form.message.trim()) next.message = 'Please include a short message.'
    return next
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSubmitError('')

    // Readable, labeled payload so the notification email is easy to skim.
    // access_key tells Web3Forms which inbox to deliver to; replyto makes
    // your "Reply" go straight back to the parent/student.
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New tutoring request from ${form.name}`,
      from_name: 'AG Tutoring Website',
      replyto: form.email,
      Name: form.name,
      Email: form.email,
      Phone: form.phone || '(not provided)',
      'Grade level': form.gradeLevel,
      Subject: form.subject,
      'Preferred format': form.format,
      'Needs help with': form.helpWith || '(not provided)',
      'Preferred days/times': form.availability || '(not provided)',
      Message: form.message,
    }

    // No backend connected yet: log to console and show success so the
    // form is testable. Fill in WEB3FORMS_ACCESS_KEY above to start
    // receiving emails.
    if (!WEB3FORMS_ACCESS_KEY) {
      console.log('Tutoring request (no backend connected yet):', payload)
      setSubmitted(true)
      setForm(INITIAL_FORM)
      return
    }

    // Send to Web3Forms, which emails the submission to you.
    // To switch providers later (EmailJS, Resend, a Vercel API route),
    // replace this fetch with the provider's call.
    try {
      setSending(true)
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!data.success) throw new Error('Request failed')
      setSubmitted(true)
      setForm(INITIAL_FORM)
    } catch {
      setSubmitError(
        'Something went wrong sending your request. Please email adreddy35@gmail.com directly and I’ll get right back to you.'
      )
    } finally {
      setSending(false)
    }
  }

  // Shared input styling
  const inputClass = (field) =>
    `w-full rounded-lg border bg-white px-4 py-2.5 text-navy-900 placeholder-navy-400 outline-none transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-100 ${
      errors[field] ? 'border-red-400' : 'border-navy-200'
    }`

  return (
    <section id="contact" className="bg-soft py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Request Tutoring
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            Tell me about the student and what they&rsquo;re working on. I read every message
            myself, and I&rsquo;ll get back to you soon. We can sort out pricing and scheduling once
            you reach out.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Contact form */}
          <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center" role="status">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-navy-900">Request sent!</h3>
                <p className="mt-2 max-w-sm text-navy-600">
                  Thanks for reaching out! I&rsquo;ll get back to you soon about tutoring
                  availability.
                </p>
                <button
                  type="button"
                  className="mt-6 text-sm font-semibold text-blue-700 hover:text-blue-800"
                  onClick={() => setSubmitted(false)}
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Parent/Student Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass('name')}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Email <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass('email')}
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Phone Number <span className="font-normal text-navy-400">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass('phone')}
                      placeholder="(555) 555-5555"
                    />
                  </div>

                  <div>
                    <label htmlFor="gradeLevel" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Student Grade Level <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="gradeLevel"
                      name="gradeLevel"
                      required
                      value={form.gradeLevel}
                      onChange={handleChange}
                      className={inputClass('gradeLevel')}
                      aria-invalid={!!errors.gradeLevel}
                      aria-describedby={errors.gradeLevel ? 'gradeLevel-error' : undefined}
                    >
                      <option value="">Select grade level…</option>
                      {GRADE_LEVELS.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                    {errors.gradeLevel && (
                      <p id="gradeLevel-error" className="mt-1 text-sm text-red-600">{errors.gradeLevel}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Subject Needed <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass('subject')}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    >
                      <option value="">Select subject…</option>
                      {SUBJECT_OPTIONS.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 text-sm text-red-600">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="format" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Preferred Format
                    </label>
                    <select
                      id="format"
                      name="format"
                      value={form.format}
                      onChange={handleChange}
                      className={inputClass('format')}
                    >
                      <option value="Either">Either online or in-person</option>
                      <option value="Online">Online</option>
                      <option value="In-person">In-person (Frisco area)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="helpWith" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      What does the student need help with?
                    </label>
                    <input
                      id="helpWith"
                      name="helpWith"
                      type="text"
                      value={form.helpWith}
                      onChange={handleChange}
                      className={inputClass('helpWith')}
                      placeholder="e.g., struggling with fractions, upcoming algebra final, SAT prep"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="availability" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Preferred Days/Times
                    </label>
                    <input
                      id="availability"
                      name="availability"
                      type="text"
                      value={form.availability}
                      onChange={handleChange}
                      className={inputClass('availability')}
                      placeholder="e.g., weekday evenings, Saturday mornings"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Message <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      value={form.message}
                      onChange={handleChange}
                      className={inputClass('message')}
                      placeholder="Anything else you'd like to share about the student or their goals"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>
                </div>

                {submitError && (
                  <p className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-6 w-full rounded-lg bg-blue-700 px-6 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {sending ? 'Sending…' : 'Request Tutoring'}
                </button>
              </form>
            )}
          </div>

          {/* Contact info card */}
          <aside className="h-fit rounded-2xl bg-navy-900 p-6 text-white shadow-lg sm:p-8">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <p className="mt-2 text-sm text-navy-200">
              Email is the best way to reach me. You can also text or call for tutoring
              availability.
            </p>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-navy-200">Email (preferred)</p>
                  <a href="mailto:adreddy35@gmail.com" className="font-medium text-white underline-offset-2 hover:underline">
                    adreddy35@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2l2 5-2 1.5a12 12 0 005.5 5.5L14 13l5 2v2a2 2 0 01-2 2A16 16 0 013 5z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-navy-200">Phone</p>
                  <a href="tel:4695882598" className="font-medium text-white underline-offset-2 hover:underline">
                    469-588-2598
                  </a>
                  <p className="mt-0.5 text-xs text-navy-300">Text or call for tutoring availability</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11zM12 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-navy-200">Location</p>
                  <p className="font-medium">Frisco area</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v10H4zM2 19h20M9 16v3M15 16v3" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-navy-200">Tutoring Format</p>
                  <p className="font-medium">Online and in-person</p>
                </div>
              </li>
            </ul>
            <p className="mt-6 border-t border-white/10 pt-4 text-sm text-navy-300">
              Pricing and scheduling details can be discussed after you reach out.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
