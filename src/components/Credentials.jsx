// Credential cards — kept factual and understated.
const CREDENTIALS = [
  {
    title: '1530 SAT Score',
    text: 'Uses strong test-taking experience to help students prepare for the SAT.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.5 5.5L20 9.5l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1z" />
      </svg>
    ),
  },
  {
    title: 'Former Kumon Tutor',
    text: 'Tutored students at Kumon from October 2025 to May 2026, gaining experience helping younger students build math skills.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5C10 4.5 6.5 4 4 5v13c2.5-1 6-0.5 8 1.5 2-2 5.5-2.5 8-1.5V5c-2.5-1-6-0.5-8 1.5zM12 6.5V19.5" />
      </svg>
    ),
  },
  {
    title: 'Advanced Math Background',
    text: 'Earned an A+ and scored a 5 in both AP Precalculus and AP Calculus BC, plus A+ grades in Algebra and Geometry.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v16h16M6 16c3-8 7-8 12-10" />
      </svg>
    ),
  },
  {
    title: 'Computer Science Experience',
    text: 'Earned an A+ and scored a 5 in both AP Computer Science A and AP Computer Science Principles, and built a weather app.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
      </svg>
    ),
  },
]

export default function Credentials() {
  return (
    <section id="credentials" className="bg-dots py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Experience &amp; Credentials
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            A real record in math and computer science, 12 AP classes included, plus time actually
            spent teaching it to other students.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((cred) => (
            <article
              key={cred.title}
              className="rounded-2xl border border-navy-100 bg-navy-50 p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-white">
                {cred.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy-900">{cred.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{cred.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
