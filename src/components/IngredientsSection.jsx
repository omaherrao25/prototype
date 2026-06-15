import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ingredients = [
  {
    id: 'aloe',
    name: 'Aloe Vera',
    origin: 'Rajasthan, India',
    benefit: 'Deep hydration · Soothes irritation · Anti-inflammatory',
    desc: 'The ultimate skin healer. Rich in polysaccharides, aloe vera penetrates deep into skin layers to deliver lasting moisture and calm inflammation.',
    color: 'from-emerald-100 to-green-300',
    iconColor: '#2d8c4e',
    bg: '#e8f5e9',
    emoji: '🌿',
  },
  {
    id: 'turmeric',
    name: 'Turmeric',
    origin: 'Kerala, India',
    benefit: 'Brightening · Antioxidant · Evens skin tone',
    desc: 'Curcumin, the active compound in turmeric, is nature\'s most powerful skin brightener. Used in Ayurvedic rituals for centuries.',
    color: 'from-yellow-100 to-amber-300',
    iconColor: '#c77800',
    bg: '#fff8e1',
    emoji: '✨',
  },
  {
    id: 'lavender',
    name: 'Lavender',
    origin: 'Himachal Pradesh',
    benefit: 'Calming · Antiseptic · Balances oil',
    desc: 'Pure lavender essential oil calms the nervous system through scent while its antiseptic properties gently cleanse and balance skin.',
    color: 'from-violet-100 to-purple-300',
    iconColor: '#6b3fa0',
    bg: '#f3e8ff',
    emoji: '💜',
  },
  {
    id: 'coconut',
    name: 'Coconut Oil',
    origin: 'Kerala Coast',
    benefit: 'Nourishing · Antibacterial · Locks moisture',
    desc: 'Cold-pressed virgin coconut oil — rich in lauric acid — forms a protective barrier on skin, preventing moisture loss and shielding from environmental damage.',
    color: 'from-amber-50 to-yellow-200',
    iconColor: '#a06000',
    bg: '#fff9f0',
    emoji: '🥥',
  },
  {
    id: 'teatree',
    name: 'Tea Tree',
    origin: 'Australian Import',
    benefit: 'Acne-fighting · Antibacterial · Purifying',
    desc: 'Clinically proven to reduce acne-causing bacteria by up to 99.6%. Our sustainably sourced tea tree oil is steam-distilled for maximum potency.',
    color: 'from-teal-100 to-emerald-300',
    iconColor: '#1a7060',
    bg: '#e0f7f4',
    emoji: '🍃',
  },
  {
    id: 'honey',
    name: 'Raw Honey',
    origin: 'Sundarbans Forest',
    benefit: 'Humectant · Healing · Natural exfoliant',
    desc: 'Pure Sundarbans honey is a natural humectant that draws moisture from the air into skin. Packed with enzymes that gently dissolve dead cells.',
    color: 'from-amber-100 to-orange-200',
    iconColor: '#b45309',
    bg: '#fffbeb',
    emoji: '🍯',
  },
]

export default function IngredientsSection() {
  const [active, setActive] = useState('aloe')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const current = ingredients.find((i) => i.id === active)

  return (
    <section ref={ref} className="section-pad bg-offwhite overflow-hidden">
      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-xs font-body tracking-[0.2em] uppercase text-sage mb-3">The Science of Nature</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-charcoal leading-tight">
            Want to know what goes<br className="hidden sm:block" /> on your skin?
          </h2>
          <p className="text-charcoal/45 font-body text-base mt-4 max-w-lg mx-auto">
            Every ingredient is hand-picked, ethically sourced, and verified pure. No fillers. No synthetics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left: Ingredient selector pills */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {ingredients.map((ing) => (
                <motion.button
                  key={ing.id}
                  onClick={() => setActive(ing.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    active === ing.id
                      ? 'border-sage shadow-luxury bg-white'
                      : 'border-beige-dark/50 bg-white/60 hover:bg-white hover:border-sage/30'
                  }`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300"
                    style={{ background: ing.bg }}
                  >
                    {ing.emoji}
                  </div>
                  <p className="font-body font-semibold text-xs text-charcoal text-center leading-tight">{ing.name}</p>
                  {active === ing.id && (
                    <motion.div
                      layoutId="ingredient-indicator"
                      className="absolute inset-0 rounded-2xl"
                      style={{ background: `${ing.bg}60` }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right: Detail panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="relative rounded-3xl overflow-hidden"
            >
              {/* Large visual circle */}
              <div
                className={`relative h-[280px] sm:h-[320px] rounded-3xl bg-gradient-to-br ${current.color} flex items-center justify-center overflow-hidden`}
              >
                {/* Big emoji art */}
                <div className="text-[100px] sm:text-[120px] opacity-60 select-none">
                  {current.emoji}
                </div>

                {/* Botanical rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute w-52 h-52 rounded-full border border-dashed opacity-20"
                    style={{ borderColor: current.iconColor }}
                  />
                  <div
                    className="absolute w-36 h-36 rounded-full opacity-15"
                    style={{ border: `1px solid ${current.iconColor}` }}
                  />
                </div>

                {/* Origin tag */}
                <div
                  className="absolute top-5 left-5 text-[10px] font-body font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
                  style={{ background: `${current.iconColor}20`, color: current.iconColor, border: `1px solid ${current.iconColor}30` }}
                >
                  {current.origin}
                </div>
              </div>

              {/* Info card below */}
              <div className="bg-white rounded-b-3xl p-6 -mt-1">
                <h3 className="font-heading text-3xl font-medium text-charcoal mb-1">{current.name}</h3>
                <p
                  className="text-xs font-body tracking-wide mb-3"
                  style={{ color: current.iconColor }}
                >
                  {current.benefit}
                </p>
                <p className="text-charcoal/55 font-body text-sm leading-relaxed">{current.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
