import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CommunitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ backgroundColor: '#FAF8F3' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-8 bg-gold/40" />
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Ecoveda Family
            </span>
            <div className="h-px w-8 bg-gold/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-light text-charcoal leading-[1.15]"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            A growing community rooted in{' '}
            <span className="italic text-forest">natural</span> living.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Community Grid Image */}
          <div className="relative overflow-hidden rounded-sm">
            <img
              src="/about/community-grid.png"
              alt="Ecoveda Community"
              className="w-full h-auto object-cover transition-transform duration-[2s] hover:scale-105"
            />
            {/* Soft overlay */}
            <div className="absolute inset-0 bg-forest/5 mix-blend-multiply" />
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 rounded-sm -z-10" />
          <div className="absolute -top-6 -left-6 w-24 h-24 border border-forest/15 rounded-sm -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-12"
        >
          <p
            className="text-charcoal/50 text-sm tracking-wide"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Share your rituals with us{' '}
            <a href="#" className="text-forest hover:text-forest-light transition-colors border-b border-forest/30 hover:border-forest">
              @ecoveda.naturals
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
