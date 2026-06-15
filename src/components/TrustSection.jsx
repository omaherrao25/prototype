import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Users, Leaf, ShieldCheck, Quote } from 'lucide-react'

const stats = [
  { icon: Users, value: 10000, suffix: '+', label: 'Happy Customers', color: '#C6A769' },
  { icon: Star, value: 4.9, suffix: '', label: 'Average Rating', color: '#6E8B61', decimal: true },
  { icon: Leaf, value: 100, suffix: '%', label: 'Natural Ingredients', color: '#EFE8DD' },
  { icon: ShieldCheck, value: 0, suffix: '', label: 'Harmful Chemicals', color: '#E87070' },
]

const reviews = [
  {
    name: 'Priya S.',
    city: 'Mumbai',
    rating: 5,
    text: 'The Turmeric Glow Soap transformed my skin in 2 weeks. I actually get compliments now on my complexion!',
    product: 'Turmeric Glow Soap',
    initials: 'PS',
    color: '#6E8B61',
  },
  {
    name: 'Ananya K.',
    city: 'Bangalore',
    rating: 5,
    text: "Switched from a leading brand to Ecoveda's Vitamin C Serum. My skin feels lighter and more hydrated than ever.",
    product: 'Vitamin C Serum',
    initials: 'AK',
    color: '#C6A769',
  },
  {
    name: 'Riya M.',
    city: 'Delhi',
    rating: 5,
    text: 'Finally a chemical-free option that actually works for my sensitive skin. The Rose Mist is my daily essential.',
    product: 'Rose Face Mist',
    initials: 'RM',
    color: '#E84073',
  },
]

function AnimatedCounter({ target, suffix, decimal, isInView }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1800
    const steps = 60
    const step = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setValue(target)
        clearInterval(timer)
      } else {
        setValue(decimal ? Math.round(current * 10) / 10 : Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, target, decimal])

  return (
    <span>
      {decimal ? value.toFixed(1) : value.toLocaleString()}{suffix}
    </span>
  )
}

export default function TrustSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad bg-charcoal relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-sage/10 to-transparent blur-3xl pointer-events-none" />

      <div className="container-pad relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body tracking-[0.2em] uppercase text-sage/80 mb-3">Trusted by Thousands</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.2rem] font-medium text-beige leading-tight">
            Looking for safer skincare<br className="hidden sm:block" /> for your family?
          </h2>
          <p className="text-beige/45 font-body text-base mt-4 max-w-lg mx-auto">
            Join 10,000+ families who switched to Ecoveda's chemical-free formulas.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-dark rounded-2xl p-6 text-center group hover:border-sage/40 transition-all duration-300"
            >
              <stat.icon size={22} className="mx-auto mb-3 opacity-70" style={{ color: stat.color }} />
              <div className="font-heading text-4xl font-medium mb-1" style={{ color: stat.color }}>
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  decimal={stat.decimal}
                  isInView={inView}
                />
              </div>
              <p className="text-beige/50 font-body text-xs tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
              className="glass-dark rounded-2xl p-6 hover:border-sage/30 transition-all duration-300 group"
            >
              <Quote size={20} className="text-sage/40 mb-4" />
              <p className="text-beige/75 font-body text-sm leading-relaxed mb-5">{r.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-body font-semibold flex-shrink-0"
                  style={{ background: r.color }}
                >
                  {r.initials}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-body font-semibold text-beige/90 text-sm">{r.name}</p>
                    <span className="text-beige/30 text-xs">· {r.city}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={10} className="text-gold fill-gold" />
                    ))}
                    <span className="text-[10px] font-body text-gold/70 ml-1">{r.product}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
