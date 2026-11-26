import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'


const packages = [
    {
        name: 'Design Starter',
        price: '₹1,999',
        description: 'A clean, professional design package for growing brands.',
        features: [
            '3 custom social media creatives',
            'Brand-aligned visual design',
            'Instagram-ready formats',
            '2 rounds of revisions',
            'Final files in PNG/JPG',
        ],
    },
    {
        name: 'Business Website',
        price: '₹6,999',
        description: 'A professional website to establish your online presence.',
        features: [
            'Up to 5 website pages',
            'Responsive mobile-friendly design',
            'Contact form integration',
            'Basic on-page SEO setup',
            'Deployment support',
            '2 rounds of revisions',
        ],
        popular: true,
    },
    {
        name: 'Monthly Growth',
        price: '₹3,999',
        suffix: '/month',
        description: 'Consistent social media designs to keep your brand active.',
        features: [
            '4 custom social media posts',
            '4 Instagram stories',
            'Consistent brand styling',
            'Monthly content design support',
            '2 rounds of revisions per batch',
        ],
    },
]


export default function Pricing() {
    return (
        <section id="pricing" className="px-6 py-24 md:px-12 lg:px-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 text-center">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-pilot-cyan">
                        Simple Pricing
                    </p>
                    <h2 className="font-display text-4xl font-bold md:text-6xl">
                        Invest in your <span className="text-pilot-cyan">next move.</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-pilot-muted">
                        Clear starting prices for businesses ready to grow. Final quotes depend on project scope.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {packages.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12 }}
                            className={`relative rounded-3xl border p-8 ${item.popular
                                    ? 'border-pilot-blue bg-pilot-blue/10'
                                    : 'border-white/10 bg-white/[0.03]'
                                }`}
                        >
                            {item.popular && (
                                <span className="mb-5 inline-block rounded-full bg-pilot-blue px-4 py-1 text-xs font-bold">
                                    POPULAR
                                </span>
                            )}

                            <h3 className="font-display text-2xl font-bold">{item.name}</h3>
                            <p className="mt-3 min-h-12 text-sm leading-6 text-pilot-muted">
                                {item.description}
                            </p>

                            <div className="my-8">
                                <span className="font-display text-4xl font-bold">{item.price}</span>
                                {item.suffix && <span className="text-pilot-muted">{item.suffix}</span>}
                                <p className="mt-2 text-xs text-pilot-muted">Starting price</p>
                            </div>

                            <div className="mb-8 space-y-4">
                                {item.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3 text-sm">
                                        <Check size={17} className="shrink-0 text-pilot-cyan" />
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <a
                                href="#contact"
                                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold transition hover:border-pilot-cyan hover:bg-pilot-cyan hover:text-pilot-dark"
                            >
                                Discuss Your Project <ArrowUpRight size={17} />
                            </a>
                        </motion.div>
                    ))}
                </div>

                <p className="mt-8 text-center text-xs text-pilot-muted">
                    Sample introductory pricing. Exact deliverables, revisions and timelines will be confirmed in a written quote.
                </p>
            </div>
        </section>
    )
}