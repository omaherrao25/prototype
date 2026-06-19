import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Leaf, Sparkles, ShieldCheck, Recycle, ArrowRight } from 'lucide-react'
import { IMAGES } from '../data/images'
import Img from './shared/Img'

const features = [
  { Icon: Leaf,        title: 'Natural Ingredients', sub: 'Plant-based, ethically sourced botanicals.' },
  { Icon: Sparkles,    title: 'Handmade in Batches', sub: 'Crafted by hand, never mass-produced.' },
  { Icon: ShieldCheck, title: 'No Harsh Chemicals',  sub: 'Free from sulphates, parabens & dyes.' },
  { Icon: Recycle,     title: 'Kind to the Planet',  sub: 'Recyclable, plastic-minimal packaging.' },
]

export default function WhyChooseSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-[3px] aspect-[4/5] sm:aspect-[5/5]">
              <Img
                src={IMAGES.brand}
                alt="Ecoveda — rooted in nature, made with purpose"
                className="w-full h-full"
                gradient="linear-gradient(135deg,#d4e8cc,#2F4F3A)"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/55 via-forest/5 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-heading text-2xl sm:text-[1.75rem] font-normal text-white leading-snug mb-4 max-w-xs">
                  Rooted in nature,<br />made with purpose.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-white/85 hover:text-white font-body text-[12.5px] tracking-wide border-b border-white/40 pb-0.5 transition-colors">
                  READ OUR STORY <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: copy + features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="rule" />
              <span className="eyebrow">Our Promise</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-normal tracking-wide text-[#9C795C] uppercase mb-6">
              Why people trust<br />Ecoveda
            </h2>
            <p className="font-body text-[14.5px] text-charcoal/55 leading-relaxed mb-10 max-w-md">
              We make skincare the slow way — with real ingredients, honest formulas, and
              respect for the skin it touches and the world it comes from.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {features.map(({ Icon, title, sub }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
                  className="border-t border-beige-dark/60 pt-4"
                >
                  <Icon size={20} strokeWidth={1.4} className="text-forest mb-3" />
                  <p className="font-body font-semibold text-[13.5px] text-charcoal leading-tight mb-1">{title}</p>
                  <p className="font-body text-[12px] text-charcoal/45 leading-relaxed">{sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
