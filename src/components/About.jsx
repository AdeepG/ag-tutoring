// Facts shown in the profile card next to the About text.
const PROFILE_FACTS = [
  { label: 'Role', value: 'Math, SAT Prep & Coding Tutor' },
  { label: 'Grade', value: 'Highschool Senior' },
  { label: 'Location', value: 'Frisco area' },
  { label: 'Format', value: 'Online and in-person tutoring' },
  { label: 'SAT', value: '1530' },
  { label: 'Experience', value: 'Former Kumon tutor' },
]

// Quick stats shown as a compact row under the About copy.
const STATS = [
  { value: '1530', label: 'SAT score' },
  { value: '12', label: 'AP classes' },
  { value: '5s', label: 'on AP exams' },
]

export default function About() {
  return (
    <section id="about" className="bg-dots relative overflow-hidden py-20">
      <div aria-hidden="true" className="blob right-[-7rem] top-[-3rem] h-72 w-72 bg-blue-400/10" />
      <div aria-hidden="true" className="blob left-[-8rem] bottom-[-4rem] h-72 w-72 bg-amber-300/10" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* About copy */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-500">
              Meet your tutor
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              About Me
            </h2>
            <span aria-hidden="true" className="mt-4 block h-1 w-16 rounded-full bg-amber-400" />

            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-700">
              <p>
                Hi, I&rsquo;m Adeep Gowreddy, a senior graduating in 2027. I tutor students around
                Frisco, online and in person, in math, SAT Prep, and computer science. I still
                remember what it feels like to sit in class completely lost while everyone else
                nods along, and that feeling is the one I work hardest to get rid of. I slow down,
                break a problem into steps, and stay with it until it clicks for real.
              </p>
              <p>
                From October 2025 to May 2026 I tutored at Kumon, mostly younger kids working on
                their math and reading fundamentals. Sitting next to a second grader who&rsquo;s
                sure they&rsquo;re &ldquo;bad at math,&rdquo; then watching that belief fall apart
                over a few weeks, is what got me hooked on this. It taught me to be patient, to
                tailor my teaching style specifically to each student, and to meet each kid exactly
                where they are.
              </p>
            </div>

            {/* Quick stats */}
            <dl className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-navy-100 bg-white p-4 text-center shadow-sm"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-2xl font-extrabold text-blue-700 sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs font-medium text-navy-500">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Profile card */}
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-xl">
            <div className="panel-dark h-24" aria-hidden="true" />
            <div className="px-6 pb-8 sm:px-8">
              <img
                src="/adeep-headshot.jpg"
                alt="Headshot of Adeep Gowreddy, math and coding tutor, wearing a blue suit"
                className="mx-auto -mt-16 h-32 w-32 rounded-full border-4 border-white object-cover shadow-md"
              />
              <h3 className="mt-4 text-center text-2xl font-bold text-navy-900">Adeep Gowreddy</h3>
              <p className="mt-1 text-center font-medium text-blue-700">
                Math, SAT Prep &amp; Coding Tutor
              </p>
              <dl className="mt-6 space-y-3 border-t border-navy-100 pt-5">
                {PROFILE_FACTS.slice(1).map((fact) => (
                  <div key={fact.label} className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm font-semibold uppercase tracking-wide text-navy-500">
                      {fact.label}
                    </dt>
                    <dd className="text-right text-sm font-medium text-navy-800">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
