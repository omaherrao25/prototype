import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function LifestyleCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Full-width cinematic banner */}
      <div className="relative h-[420px] sm:h-[480px] lg:h-[540px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/product-lifestyle-banner.png"
            alt="Ecoveda lifestyle"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-pad relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg"
          >
            <p className="font-body text-[11px] font-bold uppercase tracking-[0.25em] text-white/50 mb-6">
              Ecoveda · Pure Botanicals
            </p>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.15] mb-3">
              Rooted in nature.
            </h2>
            <p className="font-heading text-2xl sm:text-3xl font-normal text-white/60 italic mb-8">
              Made for mindful skincare.
            </p>

            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-body text-[12px] font-semibold uppercase tracking-[0.12em] hover:bg-white/25 hover:border-white/35 transition-all duration-400 group"
            >
              Explore Collection
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
