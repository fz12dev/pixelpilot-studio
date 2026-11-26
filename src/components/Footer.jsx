import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <a href="#home" className="font-display text-2xl font-bold">
            PixelPilot<span className="text-pilot-cyan">.</span>
          </a>
          <p className="mt-2 text-sm text-pilot-muted">
            Digital experiences. Meaningful impact.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-pilot-muted">
          <a href="#about" className="transition hover:text-pilot-cyan">About</a>
          <a href="#services" className="transition hover:text-pilot-cyan">Services</a>
          <a href="#portfolio" className="transition hover:text-pilot-cyan">Work</a>
          <a href="#pricing" className="transition hover:text-pilot-cyan">Pricing</a>
          <a href="#contact" className="flex items-center gap-1 transition hover:text-pilot-cyan">
            Contact <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-pilot-muted">
        © {new Date().getFullYear()} PixelPilot Studio. All rights reserved.
      </div>
    </footer>
  )
}