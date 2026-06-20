import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function IngredientHighlight({ ingredients }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="section-pad bg-offwhite overflow-hidden">
      <div className="container-pad">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 lg:mb-20"
        >
          <p className="eyebrow mb-4">Key Ingredients</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-normal tracking-wide text-charcoal">
            What makes it{' '}
            <span className="text-gradient-gold italic">special</span>
          </h2>
          <p className="text-charcoal/40 font-body text-base mt-4 max-w-md mx-auto">
            Every ingredient is hand-picked, ethically sourced, and verified pure.
          </p>
        </motion.div>

        {/* Ingredient Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ingredients.map((ing, idx) => (
            <motion.div
              key={ing.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-beige-dark/20 hover:border-sage/25 hover:shadow-card-hover transition-all duration-500"
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${ing.color}40, ${ing.color}15)` }}
              />

              <div className="p-7">
                {/* Emoji icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: ing.bg }}
                >
                  {ing.emoji}
                </div>

                {/* Name */}
                <h3 className="font-heading text-2xl font-medium text-charcoal mb-1.5">
                  {ing.name}
                </h3>

                {/* Benefit tagline */}
                <p
                  className="font-body text-[12px] font-semibold tracking-wide uppercase mb-4"
                  style={{ color: ing.color }}
                >
                  {ing.benefit}
                </p>

                {/* Description */}
                <p className="font-body text-[13.5px] text-charcoal/50 leading-relaxed">
                  {ing.desc}
                </p>
              </div>

              {/* Background decoration */}
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-[0.06] transition-transform duration-700 group-hover:scale-150"
                style={{ backgroundColor: ing.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
