import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Droplets, Zap, Sun, CloudSun, Heart, ArrowRight } from 'lucide-react'

const concerns = [
  {
    id: 'dryness',
    icon: Droplets,
    label: 'Dryness',
    tagline: 'Parched & flaky skin?',
    rec: 'Aloe Vera Soap',
    color: 'from-sky-50 to-blue-100',
    accent: '#3B82F6',
    lightAccent: 'rgba(59,130,246,0.1)',
  },
  {
    id: 'acne',
    icon: Zap,
    label: 'Acne',
    tagline: 'Breakouts & blemishes?',
    rec: 'Charcoal Detox Soap',
    color: 'from-slate-50 to-slate-100',
    accent: '#475569',
    lightAccent: 'rgba(71,85,105,0.1)',
  },
  {
    id: 'dullness',
    icon: Sun,
    label: 'Dullness',
    tagline: 'Lacking that glow?',
    rec: 'Vitamin C Serum',
    color: 'from-amber-50 to-yellow-100',
    accent: '#F59E0B',
    lightAccent: 'rgba(245,158,11,0.1)',
  },
  {
    id: 'tan',
    icon: CloudSun,
    label: 'Tan Removal',
    tagline: 'Sun damage & uneven tone?',
    rec: 'Turmeric Glow Soap',
    color: 'from-orange-50 to-amber-100',
    accent: '#D97706',
    lightAccent: 'rgba(217,119,6,0.1)',
  },
  {
    id: 'sensitive',
    icon: Heart,
    label: 'Sensitive Skin',
    tagline: 'Redness & irritation?',
    rec: 'Rose Face Mist',
    color: 'from-rose-50 to-pink-100',
    accent: '#E11D48',
    lightAccent: 'rgba(225,29,72,0.1)',
  },
]

export default function SkinQuizSection() {
  const [selected, setSelected] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad bg-gradient-to-b from-offwhite to-beige/30">
      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-xs font-body tracking-[0.2em] uppercase text-sage mb-3">Personalized Skincare</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.2rem] font-medium text-charcoal leading-tight mb-4">
            Not sure which product is<br className="hidden sm:block" /> right for your skin?
          </h2>
          <p className="text-charcoal/50 font-body text-base max-w-md mx-auto leading-relaxed">
            Pick your main skin concern and we'll recommend the perfect Ecoveda routine for you.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 mb-10">
          {concerns.map((c, i) => {
            const isSelected = selected === c.id
            return (
              <motion.button
                key={c.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => setSelected(isSelected ? null : c.id)}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`relative flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all duration-300 text-left overflow-hidden ${
                  isSelected
                    ? 'border-sage shadow-luxury bg-white'
                    : 'border-transparent bg-white/70 hover:bg-white hover:shadow-card'
                }`}
              >
                {/* Selection glow */}
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 rounded-2xl"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${c.lightAccent} 0%, transparent 70%)` }}
                  />
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isSelected ? 'shadow-gold' : ''
                  }`}
                  style={{ background: isSelected ? c.lightAccent : '#F5F2ED', border: isSelected ? `1.5px solid ${c.accent}30` : '1.5px solid transparent' }}
                >
                  <c.icon
                    size={22}
                    strokeWidth={1.6}
                    style={{ color: isSelected ? c.accent : '#6E8B61' }}
                  />
                </div>

                <div className="relative z-10 w-full">
                  <p className="font-body font-semibold text-sm text-charcoal mb-0.5">{c.label}</p>
                  <p className="font-body text-[11px] text-charcoal/45 leading-snug">{c.tagline}</p>
                </div>

                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="relative z-10 w-full pt-2 border-t border-sage/15"
                  >
                    <p className="text-[10px] font-body text-sage/80 uppercase tracking-wider mb-0.5">Try:</p>
                    <p className="text-xs font-body font-semibold text-forest">{c.rec}</p>
                  </motion.div>
                )}

                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 right-3 w-5 h-5 rounded-full bg-sage flex items-center justify-center"
                  >
                    <svg viewBox="0 0 10 8" fill="none" className="w-2.5 h-2.5">
                      <path d="M1 4L3.5 6.5L9 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                )}
              </motion.button>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(47,79,58,0.26)' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 bg-forest text-beige px-8 py-4 rounded-full text-sm font-body font-medium tracking-wide"
          >
            Get Personalized Recommendations
            <ArrowRight size={16} />
          </motion.button>
          {selected && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm font-body text-charcoal/50"
            >
              Based on your <span className="text-sage font-medium">{concerns.find(c => c.id === selected)?.label}</span> concern
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
