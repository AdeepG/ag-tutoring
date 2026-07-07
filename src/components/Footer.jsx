const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Subjects', href: '#subjects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">AG Tutoring</p>
            <p className="mt-2 text-sm leading-relaxed">
              Math, SAT Prep &amp; Coding Tutoring
              <br />
              Frisco area and online
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm font-semibold uppercase tracking-wide text-navy-400">
              Quick Links
            </p>
            <ul className="mt-3 space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-navy-400">Contact</p>
            <p className="mt-3 text-sm">
              <a href="mailto:adreddy35@gmail.com" className="hover:text-white">
                adreddy35@gmail.com
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a href="tel:4695882598" className="hover:text-white">
                469-588-2598
              </a>{' '}
              <span className="text-navy-400">(text or call)</span>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-navy-400">
            Tutoring support is personalized, but academic results depend on student effort,
            consistency, starting point, and course difficulty.
          </p>
          <p className="mt-3 text-xs text-navy-400">
            &copy; {new Date().getFullYear()} AG Tutoring. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
