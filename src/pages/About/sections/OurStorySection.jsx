import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function OurStorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #2F4F3A 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-10 bg-gold/50" />
              <span className="font-body text-[11px] font-medium tracking-[0.3em] uppercase text-gold"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Our Story
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1}
              className="font-heading font-light text-charcoal leading-[1.15] mb-8"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              We believe skincare should feel{' '}
              <span className="italic text-forest">natural</span>,{' '}
              <span className="italic text-forest">intentional</span>, and{' '}
              deeply nourishing.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={2}
              className="text-charcoal/55 leading-[1.9] mb-8 max-w-lg"
              style={{ fontFamily: "'Manrope', sans-serif", fontSize: '1rem' }}
            >
              Ecoveda began with a simple belief — skincare should not overwhelm
              your skin with chemicals or complexity. Every soap and skincare
              product is handcrafted in small batches using nature-inspired
              ingredients chosen for their purity, effectiveness, and gentle care.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={3}
              className="text-charcoal/45 leading-[1.9] max-w-lg"
              style={{ fontFamily: "'Manrope', sans-serif", fontSize: '0.95rem' }}
            >
              What started as a passion for creating gentle, plant-based formulas
              has grown into a mindful wellness brand trusted by thousands who value
              authenticity and care in every product they use.
            </motion.p>

            {/* Decorative element */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={4}
              className="mt-10 flex items-center gap-4"
            >
              <div className="w-12 h-px bg-forest/20" />
              <span className="font-heading italic text-forest/50 text-sm">
                est. 2024
              </span>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <div className="relative">
              {/* Image frame */}
              <div className="relative overflow-hidden rounded-sm aspect-[4/5]">
                <img
                  src="/about/our-story.png"
                  alt="Ecoveda artisan crafting handmade soap"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                />
                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent" />
              </div>

              {/* Decorative accent */}
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 border border-gold/20 rounded-sm -z-10"
              />
              <div
                className="absolute -top-4 -right-4 w-32 h-32 border border-forest/10 rounded-sm -z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
