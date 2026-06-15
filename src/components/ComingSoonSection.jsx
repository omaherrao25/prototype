import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Img from './shared/Img'

// Local product photos from public/images (encode spaces in filenames)
const img = (file) => encodeURI(`/images/${file}`)

const upcoming = [
  { id: 1, name: 'Vitamin C Face Serum',  sub: 'Brightening & radiance',     image: img('Vitamin C Serum.png'),        gradient: 'linear-gradient(135deg,#fff5cc,#e8a000)' },
  { id: 2, name: 'Lip & Cheek Tint',      sub: 'Natural & long-lasting',     image: img('Lip & Cheek Tint.png'),       gradient: 'linear-gradient(135deg,#ffe4ee,#e84073)' },
  { id: 3, name: 'Herbal Incense Sticks', sub: 'Pure & calming aroma',       image: img('Herbal Incense Sticks.png'),  gradient: 'linear-gradient(135deg,#d4edd0,#2d8c4e)' },
  { id: 4, name: 'Scented Soy Candle',    sub: 'Relax, refresh, rejuvenate', image: img('Scented Soy Candle.png'),     gradient: 'linear-gradient(135deg,#fef3e2,#C6A769)' },
]

export default function ComingSoonSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-[#F7F3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-start">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="rule" />
              <span className="eyebrow">Coming Soon</span>
            </div>
            <h2 className="font-heading text-[2.5rem] sm:text-[3.25rem] font-normal text-charcoal leading-[1.05] tracking-tight mb-5">
              New rituals,<br />arriving soon
            </h2>
            <p className="font-body text-[14.5px] text-charcoal/55 leading-relaxed mb-8 max-w-xs">
              A few things we've been quietly perfecting in the workshop. Be the first to know
              when they launch.
            </p>
            <button className="btn-primary">
              Notify Me <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* Right: 4 product cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {upcoming.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-[3px] overflow-hidden mb-3.5 bg-[#EFE9DE]">
                  <Img src={item.image} alt={item.name} className="w-full h-full" gradient={item.gradient} />
                  <span className="absolute top-3 left-3 bg-white/85 backdrop-blur-sm text-charcoal/70 text-[9px] font-body font-medium tracking-[0.14em] uppercase px-2.5 py-1 rounded-full">
                    Soon
                  </span>
                </div>
                <h3 className="font-heading text-base font-normal text-charcoal leading-tight">{item.name}</h3>
                <p className="font-body text-[11.5px] text-charcoal/45 mt-0.5">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
