
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-5 text-xs tracking-[0.25em] text-pilot-cyan">
            / SELECTED WORK
          </p>
          <h2 className="font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Ideas brought
            <span className="block text-pilot-blue">to life.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#191E2B]"
        >
          <a
            href="https://the-urban-brew.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden"
            aria-label="Visit The Urban Brew demo website"
          >
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1800&q=85"
              alt="Specialty coffee being prepared in a cafe"
              className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[440px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10131C]/80 via-transparent to-transparent" />
            <span className="absolute bottom-7 left-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#10131C]">
              Explore Project <ExternalLink size={16} />
            </span>
          </a>

          <div className="grid gap-8 p-7 sm:p-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs tracking-[0.2em] text-pilot-cyan">
                WEBSITE DESIGN & DEVELOPMENT
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                The Urban Brew
              </h3>
              <p className="mt-4 max-w-2xl leading-7 text-pilot-muted">
                A fictional specialty coffee brand concept featuring
                editorial visuals, interactive experiences and a responsive
                website.
              </p>
              <p className="mt-4 text-xs text-pilot-muted">
                SELF-INITIATED PORTFOLIO CONCEPT
              </p>
            </div>

            <a
              href="https://the-urban-brew.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-pilot-cyan hover:text-white"
            >
              View Live Website <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio