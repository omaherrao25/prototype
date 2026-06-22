import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { PackageOpen, Recycle, ShieldCheck, Sprout } from 'lucide-react'

const sustainabilityItems = [
  {
    icon: PackageOpen,
    title: 'Recyclable Packaging',
    description: 'Minimal, eco-friendly materials designed to reduce our carbon footprint.'
  },
  {
    icon: Sprout,
    title: 'Eco-Conscious Practices',
    description: 'Sustainable methods from sourcing to creation, protecting our earth.'
  },
  {
    icon: ShieldCheck,
    title: 'Cruelty Free',
    description: 'We never test on animals. Our commitment to ethical beauty is unwavering.'
  },
  {
    icon: Recycle,
    title: 'Mindful Sourcing',
    description: 'Partnering with local farmers and suppliers who share our values.'
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1]
    }
  })
}

export default function SustainabilitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ backgroundColor: '#F7F3EE' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-8 bg-[#314D3D]/30" />
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#314D3D]/60"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Our Commitment
            </span>
            <div className="h-px w-8 bg-[#314D3D]/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-light text-[#1E1E1E] leading-[1.15]"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            Rooted in <span className="italic text-[#314D3D]">Sustainability</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {sustainabilityItems.map((item, i) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={i}
              className="group relative flex flex-col items-center text-center p-8 rounded-lg transition-all duration-500 hover:bg-white/40"
            >
              <div className="w-16 h-16 rounded-full bg-[#EFE7DC] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                <item.icon
                  size={24}
                  strokeWidth={1.2}
                  className="text-[#314D3D]"
                />
              </div>
              <h3 className="font-heading text-xl font-normal text-[#1E1E1E] mb-3">
                {item.title}
              </h3>
              <p
                className="text-[#1E1E1E]/50 text-[13.5px] leading-relaxed max-w-[240px]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
