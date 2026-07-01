import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Img from '../../../components/shared/Img'

// Local product photos from public/images (encode spaces in filenames)
const img = (file) => encodeURI(`/images/${file}`)

const upcomingCollections = [
  { id: 'skincare',  title: 'Skincare',  sub: 'Soaps, scrubs & serums',     image: img('skincare.png') },
  { id: 'cosmetics', title: 'Cosmetics',  sub: 'Clean, safe & beautiful',    image: img('Cosmetics.png') },
  { id: 'homecare',  title: 'Home Care',  sub: 'Candles, incense & more',    image: img('Homecare.png') },
  { id: 'giftsets',  title: 'Gift Sets',  sub: 'Thoughtfully curated',       image: img('Gift Set.png') },
]

export default function ComingSoonSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center mb-12 lg:mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-normal tracking-wide text-[#9C795C] uppercase mb-5">
            Coming Soon
          </h2>
          <p className="font-body text-[15px] sm:text-[16px] text-charcoal/60 leading-relaxed max-w-xl mx-auto mb-8">
            A few new collections we've been quietly perfecting in the workshop. Be the first to know when they launch.
          </p>
          <button className="px-8 py-3.5 bg-[#9C795C] hover:bg-[#85654C] text-white rounded-full text-[12px] sm:text-[13px] tracking-[0.1em] uppercase font-semibold transition-colors flex items-center justify-center gap-3">
            Notify Me <ArrowRight size={15} />
          </button>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {upcomingCollections.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl bg-[#F8F8F8] h-[260px] sm:h-[380px] flex flex-col overflow-hidden shadow-sm"
            >
              {/* Product Image */}
              <div className="absolute inset-0 z-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full"
                >
                  <Img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </motion.div>
              </div>

              {/* Status Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white/90 backdrop-blur-sm text-[#9C795C] text-[10px] font-body font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full shadow-sm">
                  Soon
                </span>
              </div>

              {/* Info Pill */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 flex flex-col justify-center items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] z-10 transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="font-heading text-[18px] sm:text-[22px] font-normal text-charcoal leading-none mb-1.5 sm:mb-2">{item.title}</h3>
                <p className="font-body text-[9px] sm:text-[10.5px] text-charcoal/50 leading-none uppercase tracking-widest">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
