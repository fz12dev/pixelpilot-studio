
import { motion } from 'framer-motion'
import { ArrowUpRight, Target, Lightbulb, Rocket } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Creative Thinking',
    text: 'Thoughtful ideas and designs that help brands stand apart.',
  },
  {
    icon: Target,
    title: 'Purposeful Design',
    text: 'Every element has a purpose, from the first click to the final interaction.',
  },
  {
    icon: Rocket,
    title: 'Built to Grow',
    text: 'Responsive digital experiences designed around real business needs.',
  },
]

function About() {
  return (
    <section id="about" className="px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs tracking-[0.25em] text-pilot-cyan">
              / WHO WE ARE
            </p>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Small studio.
              <span className="block text-pilot-blue">Big ideas.</span>
              Meaningful impact.
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg leading-8 text-pilot-muted">
              PixelPilot Studio is an independent digital studio focused on
              building modern websites and creative digital experiences for
              growing businesses.
            </p>
            <p className="mt-5 leading-8 text-pilot-muted">
              We combine thoughtful design, modern technology and a
              practical approach to help businesses build a stronger
              presence online.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-pilot-cyan hover:text-white"
            >
              Let's create something <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >
                <Icon size={28} className="text-pilot-cyan" />
                <h3 className="mt-7 font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-pilot-muted">
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About