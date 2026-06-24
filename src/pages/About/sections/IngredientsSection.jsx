import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const ingredients = [
  {
    name: 'Turmeric',
    benefit: 'Brightens and restores natural glow.',
    image: '/about/ingredient-turmeric.png',
    accent: '#E8A820'
  },
  {
    name: 'Neem',
    benefit: 'Purifies and detoxifies skin naturally.',
    image: '/about/ingredient-neem.png',
    accent: '#5A8B4A'
  },
  {
    name: 'Rose',
    benefit: 'Soothes and hydrates with gentle care.',
    image: '/about/ingredient-rose.png',
    accent: '#D4848B'
  },
  {
    name: 'Coffee',
    benefit: 'Energizes and exfoliates for smooth skin.',
    image: '/about/ingredient-coffee.png',
    accent: '#7B5B3A'
  },
  {
    name: 'Saffron',
    benefit: 'Revives radiance and evens skin tone.',
    image: '/about/ingredient-saffron.png',
    accent: '#C7622D'
  }
]

export default function IngredientsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section
      ref={ref}
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-light text-charcoal leading-[1.15] mb-5"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            Powered by ingredients your skin{' '}
            <span className="italic text-[#9C795C]">understands</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-charcoal/45 max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem' }}
          >
            Every ingredient is carefully selected from nature for its purity,
            potency, and time-tested benefits.
          </motion.p>
        </div>

        {/* Ingredient Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {ingredients.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-lg overflow-hidden cursor-pointer"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to top, ${item.accent}30, transparent 60%)`,
                    opacity: hoveredIndex === i ? 1 : 0.4
                  }}
                />
              </div>

              {/* Text */}
              <div className="p-4 lg:p-5">
                <h3 className="font-heading text-lg font-normal text-charcoal mb-1.5 transition-colors duration-300 group-hover:text-forest">
                  {item.name}
                </h3>
                <p
                  className="text-charcoal/45 text-[13px] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.benefit}
                </p>
              </div>

              {/* Hover border accent */}
              <div
                className="absolute inset-0 border border-transparent rounded-lg transition-all duration-500 group-hover:border-forest/10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
