// Subject cards. Edit topics/descriptions here — the layout renders from this data.
const SUBJECTS = [
  {
    title: 'Pre-K, Elementary & Middle School Math',
    description:
      'This is where confidence gets built or broken, so I go slow and keep it encouraging. Clear steps, real patience, and a solid foundation before anything harder.',
    topics: [
      'Counting',
      'Addition',
      'Subtraction',
      'Multiplication',
      'Division',
      'Fractions',
      'Decimals',
      'Exponents',
      'Percentages',
      'Word problems',
      'Pre-algebra',
      'Homework help',
      'Building confidence with fundamentals',
    ],
    // Icon: building blocks / abacus feel
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-6-6h12M4 4h16v16H4z" />
      </svg>
    ),
  },
  {
    title: 'Algebra, Geometry & Precalculus',
    description:
      'I want students to see why each step works, not just memorize a formula and hope it shows up on the test.',
    topics: [
      'Algebra 1',
      'Algebra 2',
      'Linear equations',
      'Systems of equations',
      'Factoring',
      'Quadratics',
      'Functions',
      'Graphing',
      'Geometry',
      'Proofs',
      'Trigonometry',
      'Precalculus',
      'Homework and test prep',
    ],
    // Icon: triangle/ruler
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20L20 4v16H4zM9 15l2 2" />
      </svg>
    ),
  },
  {
    title: 'Calculus I & Calculus II',
    description:
      'This is my favorite math to teach. We get into what the ideas actually mean and practice the exact kinds of problems that show up on tests.',
    topics: [
      'Limits',
      'Derivatives',
      'Integrals',
      'Applications of derivatives',
      'Applications of integrals',
      'Sequences',
      'Series',
      'Calculus I',
      'Calculus II',
      'AP Calculus support',
      'Homework review',
      'Test preparation',
    ],
    // Icon: curve on axes
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v16h16M6 16c3-8 7-8 12-10" />
      </svg>
    ),
  },
  {
    title: 'SAT Prep',
    description:
      'I scored a 1530, and I remember what actually moved my score. I help students prep for the SAT across both the math and reading sections with focused practice, clear explanations, and real strategy.',
    topics: [
      'Algebra',
      'Advanced math',
      'Problem solving',
      'Data analysis',
      'Geometry',
      'Trigonometry',
      'Reading comprehension',
      'Writing & grammar',
      'Vocabulary in context',
      'Desmos strategies',
      'Timed practice',
      'Mistake review',
      'Test-taking strategy',
    ],
    // Icon: clipboard/checklist
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5h6M9 3h6v4H9zM5 7h14v14H5zM9 13l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Java & Python',
    description:
      'Coding clicks once the error messages stop being scary. I help students think through the logic, debug their assignments, and start to enjoy writing code.',
    topics: [
      'Java basics',
      'Python basics',
      'Variables',
      'Loops',
      'Conditional statements',
      'Functions',
      'Object-oriented programming',
      'Arrays',
      'Lists',
      'Debugging',
      'School assignments',
      'Beginner coding projects',
    ],
    // Icon: code brackets
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 6l-6 6 6 6M16 6l6 6-6 6M13 4l-2 16" />
      </svg>
    ),
  },
  {
    title: 'AP Prep',
    description:
      'I have taken these AP classes myself and did well in them, so I know the material and the way the exams ask about it.',
    topics: [
      'AP Precalculus',
      'AP Calculus BC',
      'AP Computer Science A',
      'AP Computer Science Principles',
      'AP Biology',
      'Concept review',
      'Exam-style practice',
    ],
    // Icon: graduation cap
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4L2 9l10 5 8-4v6M6 12v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5" />
      </svg>
    ),
  },
]

export default function Subjects() {
  return (
    <section id="subjects" className="bg-soft py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Subjects I Tutor
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            From first counting lessons to Calculus II, plus SAT prep and coding. Every session is
            one-on-one and built around where your student actually is right now.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SUBJECTS.map((subject) => (
            <article
              key={subject.title}
              className="flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                {subject.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy-900">{subject.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{subject.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {subject.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full bg-navy-50 px-2.5 py-1 text-xs font-medium text-navy-700"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-auto pt-5 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Request tutoring for this subject &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
