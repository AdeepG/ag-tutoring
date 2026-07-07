// Quick trust-building highlights shown in the hero card.
const HIGHLIGHTS = [
  '1530 SAT score',
  'Geometry, Algebra, Calculus proficiency',
  'Java & Python proficiency',
  'Online or in-person sessions',
  'Homework and test prep support',
]

export default function Hero() {
  return (
    <section id="hero" className="hero-bg relative overflow-hidden text-white">
      {/* Decorative glows */}
      <div aria-hidden="true" className="blob left-[-6rem] top-[-4rem] h-72 w-72 bg-blue-500/25" />
      <div aria-hidden="true" className="blob right-[-5rem] bottom-[-6rem] h-80 w-80 bg-amber-400/15" />

      {/* Subtle decorative background: graph grid + faded math/code symbols */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <span className="absolute left-[6%] top-16 select-none font-serif text-6xl text-blue-200/15">∫</span>
        <span className="absolute right-[10%] top-24 select-none font-mono text-3xl text-blue-200/15">{'{ }'}</span>
        <span className="absolute bottom-24 left-[12%] select-none font-serif text-5xl text-blue-200/15">π</span>
        <span className="absolute bottom-16 right-[18%] select-none font-serif text-4xl text-amber-300/15">Σ</span>
        <span className="absolute left-[45%] top-10 select-none font-mono text-2xl text-blue-200/10">y = mx + b</span>
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-50 shadow-sm backdrop-blur-sm">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-amber-400" />
            One-on-one tutoring · Frisco area / online
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Math, SAT Prep &amp; Coding Tutoring
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100">
            I love the moment a student goes from stuck to &ldquo;oh, that&rsquo;s it.&rdquo; I tutor
            one-on-one, younger kids and high schoolers alike, in math concepts from Pre-K counting
            through Calculus II, plus Java, Python, AP prep, and SAT Prep.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-lg bg-amber-400 px-6 py-3 text-center text-base font-semibold text-navy-900 shadow-md transition-all hover:bg-amber-300 hover:shadow-lg"
            >
              Request Tutoring
            </a>
            <a
              href="#subjects"
              className="rounded-lg border border-navy-300/60 px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Subjects
            </a>
          </div>
        </div>

        {/* Trust-building highlight card */}
        <div className="rounded-2xl border border-white/60 bg-white/95 p-6 text-navy-900 shadow-2xl backdrop-blur sm:p-8">
          <h2 className="text-lg font-bold">Why families reach out</h2>
          <ul className="mt-4 space-y-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-navy-100 pt-4 text-sm text-navy-600">
            Pricing and scheduling details can be discussed after you reach out.
          </p>
        </div>
      </div>
    </section>
  )
}
