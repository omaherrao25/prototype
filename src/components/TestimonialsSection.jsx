import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    city: 'Mumbai',
    rating: 5,
    text: "Ecoveda products are truly amazing! 100% natural and you can feel the difference from the very first use. My skin has never been this soft and glowing.",
    product: 'Turmeric Glow Soap',
    initials: 'PS',
    color: '#6E8B61',
  },
  {
    name: 'Ananya Kapoor',
    city: 'Bangalore',
    rating: 5,
    text: "I switched from a leading brand to Ecoveda's Vitamin C Serum — best decision ever. My melasma has faded in 6 weeks and my skin genuinely glows.",
    product: 'Vitamin C Serum',
    initials: 'AK',
    color: '#C6A769',
  },
  {
    name: 'Riya Mehta',
    city: 'Delhi',
    rating: 5,
    text: 'Finally a brand I can trust for my entire family. Chemical-free, gentle, and it actually works. The aloe vera soap is my morning ritual now.',
    product: 'Aloe Vera Soap',
    initials: 'RM',
    color: '#2F4F3A',
  },
  {
    name: 'Sneha Iyer',
    city: 'Chennai',
    rating: 5,
    text: 'The Lavender Candle is absolutely divine. The fragrance fills the whole room beautifully. Perfect for my evening wind-down ritual.',
    product: 'Lavender Candle',
    initials: 'SI',
    color: '#7c4dce',
  },
]

const Stars = ({ n }) => (
  <div className="flex gap-0.5">
    {[1,2,3,4,5].map(i => (
      <Star key={i} size={14}
        className={i <= n ? 'text-gold' : 'text-charcoal/15'}
        fill={i <= n ? '#C6A769' : 'none'}
      />
    ))}
  </div>
)

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)
  const t = testimonials[active]

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* ── Left: all testimonials ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-normal tracking-wide text-[#9C795C] uppercase mb-5">
              Loved by real<br />people
            </h2>
            <div className="flex items-center gap-3 mb-8">
              <Stars n={5} />
              <p className="font-body text-[12.5px] text-charcoal/55">
                <span className="font-semibold text-charcoal">4.9</span> average · 10,000+ reviews
              </p>
            </div>

            {/* Active testimonial */}
            <Quote size={34} className="text-sage/25 mb-4" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <Stars n={t.rating} />
                <p className="font-heading text-xl sm:text-2xl text-charcoal/75 leading-relaxed italic mt-4 mb-6 min-h-[120px] sm:min-h-[110px]">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-body font-bold flex-shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-body font-semibold text-sm text-charcoal">{t.name}</p>
                    <p className="font-body text-xs text-charcoal/40">{t.city} · {t.product}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls + avatars */}
            <div className="flex items-center gap-4 mt-8">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-beige-dark hover:border-sage text-charcoal/40 hover:text-sage flex items-center justify-center transition-all">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border border-beige-dark hover:border-sage text-charcoal/40 hover:text-sage flex items-center justify-center transition-all">
                <ChevronRight size={18} />
              </button>

              <div className="w-px h-7 bg-beige-dark/60 mx-1" />

              <div className="flex items-center gap-2.5">
                {testimonials.map((tm, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setActive(i)}
                    whileHover={{ scale: 1.1 }}
                    className={`w-10 h-10 rounded-full font-body font-bold text-xs text-white transition-all duration-200 ${
                      i === active ? 'ring-2 ring-sage ring-offset-2 scale-110' : 'opacity-55 hover:opacity-100'
                    }`}
                    style={{ background: tm.color }}
                  >
                    {tm.initials}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: image merged into background ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <img
              src={encodeURI('/images/testimonial.png')}
              alt="Ecoveda natural cream jars with eucalyptus and almonds"
              className="w-full h-auto object-contain object-right select-none pointer-events-none"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
