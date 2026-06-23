import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Leaf, Droplets, Heart, Recycle, FlaskConical, HandHeart } from 'lucide-react'

const philosophyItems = [
  {
    icon: HandHeart,
    title: 'Handmade with Care',
    description: 'Every product is crafted by hand with attention to detail and love.'
  },
  {
    icon: Leaf,
    title: 'Plant-Powered Ingredients',
    description: 'Sourced from nature, chosen for purity and gentle effectiveness.'
  },
  {
    icon: Heart,
    title: 'Cruelty Free',
    description: 'Never tested on animals. Always kind, always conscious.'
  },
  {
    icon: Recycle,
    title: 'Eco Conscious',
    description: 'Sustainable packaging and mindful practices at every step.'
  },
  {
    icon: FlaskConical,
    title: 'Small Batch Crafted',
    description: 'Made in small batches to preserve quality and freshness.'
  },
  {
    icon: Droplets,
    title: 'Chemical Free',
    description: 'No parabens, sulfates, or synthetic fragrances. Pure care.'
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1]
    }
  })
}

export default function PhilosophySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-light text-[#9C795C] leading-[1.15]"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            What we <span className="italic text-forest">stand</span> for.
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {philosophyItems.map((item, i) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={i}
              className="group relative bg-[#FAF8F3] border border-beige/80 rounded-lg p-8 lg:p-10 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(49,77,61,0.08)] hover:-translate-y-1 hover:border-forest/10"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-beige/60 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-forest/8">
                <item.icon
                  size={22}
                  strokeWidth={1.3}
                  className="text-forest/70 transition-colors duration-500 group-hover:text-forest"
                />
              </div>

              {/* Title */}
              <h3
                className="font-heading text-xl font-normal text-charcoal mb-3"
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-charcoal/50 text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.description}
              </p>

              {/* Subtle corner accent on hover */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/0 rounded-tr-lg transition-all duration-500 group-hover:border-gold/20 group-hover:w-12 group-hover:h-12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
