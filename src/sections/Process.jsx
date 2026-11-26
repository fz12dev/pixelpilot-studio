import { motion } from 'framer-motion'
import { Search, Palette, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We understand your business, audience and goals before making a plan.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Design',
    description: 'We create a visual direction that makes your brand stand out.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Develop',
    description: 'We turn the approved design into a responsive digital experience.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We test, refine and prepare your project for the world.',
    icon: Rocket,
  },
]

export default function Process() {
  return (
    <section id="process" className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-pilot-cyan">
            How We Work
          </p>
          <h2 className="font-display text-4xl font-bold md:text-6xl">
            From first idea to <span className="text-pilot-cyan">final launch.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-2 hover:border-pilot-cyan/40"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-display text-sm text-pilot-cyan">{step.number}</span>
                  <Icon size={25} className="text-pilot-cyan" />
                </div>

                <h3 className="mb-3 font-display text-2xl font-bold">{step.title}</h3>
                <p className="text-sm leading-7 text-pilot-muted">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}