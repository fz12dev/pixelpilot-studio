
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  const email = 'mohammedfaiz.webdev@gmail.com'

  return (
    <section id="contact" className="px-6 py-24 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-pilot-blue p-8 md:p-16"
      >
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-white/70">
          Have a project in mind?
        </p>

        <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight md:text-7xl">
          Let's make something that moves your brand.
        </h2>

        <p className="mt-6 max-w-xl leading-7 text-white/75">
          Tell us what you're building. Let's explore how thoughtful design and development can help.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${email}?subject=Project%20Enquiry%20-%20PixelPilot%20Studio`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-pilot-dark transition hover:bg-pilot-cyan"
          >
            <Mail size={18} /> Email Us <ArrowUpRight size={18} />
          </a>

          <a
            href="#"
            onClick={(event) => event.preventDefault()}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-pilot-cyan"
            title="Add your WhatsApp number before publishing"
          >
            <MessageCircle size={18} /> WhatsApp (Coming Soon)
          </a>
        </div>

        <p className="mt-5 text-xs text-white/70">
          Replace the sample email address with your real business email before publishing.
        </p>
      </motion.div>
    </section>
  )
}
