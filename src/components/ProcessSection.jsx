import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sprout, HandHeart, FlaskConical, Package } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Sprout,
    title: 'Natural Ingredients',
    desc: 'Every ingredient is ethically sourced from certified organic farms across India — Rajasthan aloe, Kerala turmeric, Himalayan herbs.',
    bg: 'from-emerald-50 to-green-100',
    accent: '#4a9e42',
    emoji: '🌱',
  },
  {
    num: '02',
    icon: HandHeart,
    title: 'Handmade in Small Batches',
    desc: 'Our artisans craft each bar and bottle by hand in small 50-unit batches. No machines, no rush — just patience and care.',
    bg: 'from-amber-50 to-yellow-100',
    accent: '#c67200',
    emoji: '🤲',
  },
  {
    num: '03',
    icon: FlaskConical,
    title: 'Safety & Quality Testing',
    desc: 'Every product passes 12-point quality checks: pH balance, allergen screening, stability and dermatologist review before release.',
    bg: 'from-sky-50 to-blue-100',
    accent: '#2563eb',
    emoji: '🧪',
  },
  {
    num: '04',
    icon: Package,
    title: 'Eco-Friendly Packaging',
    desc: 'Wrapped in 100% recycled kraft paper and glass. Zero plastic. Carbon-neutral shipping. Every purchase plants one tree.',
    bg: 'from-forest/5 to-sage/15',
    accent: '#2F4F3A',
    emoji: '📦',
  },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad bg-gradient-to-b from-beige/30 to-offwhite">
      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 lg:mb-20"
        >
          <p className="text-xs font-body tracking-[0.2em] uppercase text-sage mb-3">The Ecoveda Way</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-charcoal leading-tight">
            Handmade with intention,<br className="hidden sm:block" /> from farm to face.
          </h2>
          <p className="text-charcoal/45 font-body text-base mt-4 max-w-md mx-auto">
            4 careful steps that separate Ecoveda from every other brand on the shelf.
          </p>
        </motion.div>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              className="w-full h-px bg-gradient-to-r from-transparent via-sage/30 to-transparent origin-left"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Step circle */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`relative w-[100px] h-[100px] rounded-full bg-gradient-to-br ${step.bg} flex items-center justify-center mb-6 shadow-card group-hover:shadow-luxury transition-all duration-300`}
              >
                <span className="text-3xl">{step.emoji}</span>

                {/* Step number */}
                <div
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-body font-bold shadow-card"
                  style={{ background: step.accent }}
                >
                  {i + 1}
                </div>
              </motion.div>

              {/* Step number label */}
              <p className="font-body text-[11px] tracking-[0.18em] uppercase mb-2" style={{ color: step.accent }}>
                Step {step.num}
              </p>

              {/* Title */}
              <h3 className="font-heading text-xl font-medium text-charcoal leading-tight mb-3">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-charcoal/50 font-body text-sm leading-relaxed max-w-[240px] mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-center mt-14"
        >
          <div className="inline-flex items-center gap-3 bg-sage/8 border border-sage/20 rounded-full px-6 py-3">
            <span className="text-lg">🌱</span>
            <p className="text-sm font-body text-charcoal/60">
              Every purchase plants{' '}
              <span className="font-semibold text-forest">1 tree</span> in partnership with Trees for the Future
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
