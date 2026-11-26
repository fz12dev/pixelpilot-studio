
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 lg:px-10"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-pilot-blue/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-pilot-cyan/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-pilot-cyan"
          >
            <Sparkles size={14} />
            CREATIVE DIGITAL STUDIO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl font-display text-5xl font-semibold leading-[1.08] tracking-tight text-pilot-light sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            We build
            <span className="block text-pilot-blue">digital</span>
            experiences that
            <span className="block text-pilot-cyan">move brands.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 max-w-xl text-base leading-8 text-pilot-muted sm:text-lg"
          >
            We help ambitious businesses stand out with thoughtful websites,
            distinctive design and digital experiences built to make an impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-pilot-blue px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-500"
            >
              Start a Project <ArrowUpRight size={18} />
            </a>

            <a
              href="https://the-urban-brew.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-pilot-light transition hover:border-pilot-cyan hover:text-pilot-cyan"
            >
              View Our Work
            </a>
          </motion.div>

          <motion.a
            href="#services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 inline-flex items-center gap-3 text-xs tracking-[0.2em] text-pilot-muted transition hover:text-white"
          >
            <ArrowDown size={16} />
            SCROLL TO EXPLORE
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-pilot-blue/30 to-pilot-cyan/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#191E2B] p-5 shadow-2xl sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="font-display text-sm font-semibold">PIXELPILOT / 01</span>
              <span className="text-xs text-pilot-cyan">DIGITAL CRAFT</span>
            </div>

            <div className="py-12 sm:py-16">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-pilot-blue text-3xl font-bold text-white shadow-lg shadow-pilot-blue/30">
                P.
              </div>
              <p className="text-xs tracking-[0.25em] text-pilot-muted">
                IDEAS INTO EXPERIENCES
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Make your
                <span className="block text-pilot-cyan">next move</span>
                count.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-2xl font-semibold text-pilot-light">01</p>
                <p className="mt-2 text-xs text-pilot-muted">Strategy & Design</p>
              </div>
              <div className="rounded-2xl bg-pilot-blue/15 p-4">
                <p className="text-2xl font-semibold text-pilot-cyan">02</p>
                <p className="mt-2 text-xs text-pilot-muted">Build & Launch</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 -top-5 rounded-full border border-pilot-cyan/30 bg-pilot-dark px-4 py-3 text-xs font-medium text-pilot-cyan shadow-xl sm:-right-7">
            DESIGN × DEVELOPMENT
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero