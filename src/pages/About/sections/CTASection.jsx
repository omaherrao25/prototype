import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
      style={{ backgroundColor: '#EFE8DD' }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px w-12 bg-gold/60" />
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-forest"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Your Ritual Awaits
          </span>
          <div className="h-px w-12 bg-gold/60" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-light text-charcoal leading-[1.1] mb-8"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
        >
          Ready to experience <br />
          <span className="italic text-forest">mindful</span> skincare?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-charcoal/60 leading-[1.8] mb-12 max-w-lg mx-auto"
          style={{ fontFamily: "'Manrope', sans-serif", fontSize: '1.05rem' }}
        >
          Explore handcrafted skincare inspired by nature and designed for everyday rituals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            to="/shop"
            className="group relative px-10 py-4 sm:py-5 bg-forest text-white text-[11.5px] sm:text-[12px] font-medium tracking-[0.15em] uppercase rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(49,77,61,0.25)] hover:-translate-y-1"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            <span className="relative z-10">Explore Collection</span>
            <div className="absolute inset-0 bg-forest transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
          </Link>
          <Link
            to="/shop"
            className="px-10 py-4 sm:py-5 border border-charcoal/20 text-charcoal text-[11.5px] sm:text-[12px] font-medium tracking-[0.15em] uppercase rounded-full transition-all duration-500 hover:border-forest hover:text-forest hover:-translate-y-1 bg-white/10 backdrop-blur-sm"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Shop Bestsellers
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
