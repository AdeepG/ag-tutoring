// The four steps of the tutoring process.
const STEPS = [
  {
    number: '1',
    title: 'Reach Out',
    text: 'A parent or student submits the contact form with the subject, grade level, and what they need help with.',
  },
  {
    number: '2',
    title: 'Discuss Goals',
    text: 'I review the student’s needs, current class, upcoming tests, homework concerns, or SAT prep goals.',
  },
  {
    number: '3',
    title: 'Start Tutoring',
    text: 'Every session is hands-on: step-by-step explanations, practice problems, homework support, and real test prep.',
  },
  {
    number: '4',
    title: 'Build Confidence',
    text: 'The goal I care about most is a student who understands the material, asks questions without hesitating, and walks into class ready.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="panel-dark relative overflow-hidden py-20 text-white">
      <div aria-hidden="true" className="blob right-[-4rem] top-[-4rem] h-64 w-64 bg-amber-400/10" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">How Tutoring Works</h2>
          <p className="mt-4 text-lg text-navy-200">
            Getting started is easy. Four steps from your first message to a student who feels sure
            of themselves.
          </p>
        </div>

        {/* Horizontal on desktop, stacked on mobile */}
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:bg-white/10"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-lg font-bold text-navy-900"
              >
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-200">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-block rounded-lg bg-amber-400 px-6 py-3 text-base font-semibold text-navy-900 shadow-md transition-all hover:bg-amber-300 hover:shadow-lg"
          >
            Start with Step 1: Request Tutoring
          </a>
        </div>
      </div>
    </section>
  )
}
