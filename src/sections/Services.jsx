
import { motion } from 'framer-motion'
import {
  Code2,
  Palette,
  Smartphone,
  ArrowUpRight,
} from 'lucide-react'

const services = [
  {
    number: '01',
    icon: Code2,
    title: 'Website Development',
    description:
      'Modern, responsive business websites designed to build trust and turn visitors into enquiries.',
    tags: ['React', 'Responsive Design', 'Business Websites'],
  },
  {
    number: '02',
    icon: Palette,
    title: 'UI/UX & Graphic Design',
    description:
      'Clean interfaces and distinctive visual designs that give your brand a consistent identity.',
    tags: ['UI Design', 'Landing Pages', 'Brand Graphics'],
  },
  {
    number: '03',
    icon: Smartphone,
    title: 'Social Media Creatives',
    description:
      'Engaging social media posts and promotional graphics to help your business communicate clearly.',
    tags: ['Social Posts', 'Promotional Design', 'Creative Assets'],
  },
]

function Services() {
  return (
    <section id="services" className="bg-[#151A27] px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs tracking-[0.25em] text-pilot-cyan">
              / WHAT WE DO
            </p>
            <h2 className="font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Digital solutions.
              <span className="block text-pilot-blue">Real possibilities.</span>
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-pilot-muted">
            From the first idea to the final launch, we create digital
            solutions around your business goals.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid gap-6 py-9 md:grid-cols-[70px_1fr_1fr_40px] md:items-center"
              >
                <span className="font-mono text-sm text-pilot-cyan">
                  {service.number}
                </span>

                <div>
                  <Icon size={25} className="mb-4 text-pilot-blue" />
                  <h3 className="font-display text-2xl font-semibold">
                    {service.title}
                  </h3>
                </div>

                <div>
                  <p className="leading-7 text-pilot-muted">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-pilot-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ArrowUpRight className="hidden text-pilot-cyan md:block" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services