import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Leaf, FlaskConical, Heart, Recycle, ShieldCheck } from 'lucide-react'

const trustBadges = [
  {
    icon: Leaf,
    label: 'Handmade',
    desc: 'Cold-processed in small batches',
    color: '#6E8B61',
  },
  {
    icon: FlaskConical,
    label: 'Chemical Free',
    desc: 'No parabens, sulfates, or synthetics',
    color: '#C6A769',
  },
  {
    icon: Heart,
    label: 'Cruelty Free',
    desc: 'Never tested on animals',
    color: '#E87070',
  },
  {
    icon: Recycle,
    label: 'Eco Friendly',
    desc: 'Sustainable packaging & sourcing',
    color: '#5A7350',
  },
  {
    icon: ShieldCheck,
    label: 'Skin Safe',
    desc: 'Dermatologically tested formulas',
    color: '#7C8BA5',
  },
]

export default function TrustQualitySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232F4F3A' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-pad relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="eyebrow mb-4">Our Promise</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-normal text-charcoal">
            Trusted by <span className="text-gradient italic">nature lovers</span>
          </h2>
        </motion.div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {trustBadges.map((badge, idx) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-beige-dark/15 hover:border-beige-dark/30 hover:shadow-card transition-all duration-400 bg-offwhite/50"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${badge.color}12` }}
              >
                <badge.icon
                  size={20}
                  strokeWidth={1.5}
                  style={{ color: badge.color }}
                />
              </div>
              <h4 className="font-body text-[13px] font-semibold text-charcoal mb-1">
                {badge.label}
              </h4>
              <p className="font-body text-[11px] text-charcoal/40 leading-relaxed">
                {badge.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
