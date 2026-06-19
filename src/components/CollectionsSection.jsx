import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Img from './shared/Img'

// Local collection photos from public/images (encode spaces in filenames)
const img = (file) => encodeURI(`/images/${file}`)

const collections = [
  { id: 'skincare',  no: '01', title: 'Skincare',  sub: 'Soaps, scrubs & serums',     image: img('skincare.png'),  gradient: 'linear-gradient(135deg,#d4e8cc,#6E8B61)' },
  { id: 'cosmetics', no: '02', title: 'Cosmetics',  sub: 'Clean, safe & beautiful',    image: img('Cosmetics.png'), gradient: 'linear-gradient(135deg,#fce8f0,#e879a0)' },
  { id: 'homecare',  no: '03', title: 'Home Care',  sub: 'Candles, incense & more',    image: img('Homecare.png'),  gradient: 'linear-gradient(135deg,#fef3e2,#C6A769)' },
  { id: 'giftsets',  no: '04', title: 'Gift Sets',  sub: 'Thoughtfully curated',       image: img('Gift Set.png'),  gradient: 'linear-gradient(135deg,#ede7f9,#8B5CF6)' },
]

export default function CollectionsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — left aligned, editorial */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-9 lg:mb-12"
        >
          <div className="max-w-xl">

            <h2 className="font-heading text-4xl sm:text-5xl font-normal tracking-wide text-[#9C795C] uppercase">
              Everything your skin<br className="hidden sm:block" /> has been asking for
            </h2>
          </div>
          <a href="#" className="link-quiet self-start md:self-auto md:mb-2">
            View all products <ArrowUpRight size={14} />
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-9">
          {collections.map((col, i) => (
            <motion.a
              href="#"
              key={col.id}
              initial={{ opacity: 0, y: 26 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-[3px] aspect-[3/4] mb-4">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="w-full h-full">
                  <Img src={col.image} alt={col.title} className="w-full h-full" gradient={col.gradient} />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 left-4 font-heading text-lg text-white/85 mix-blend-difference">{col.no}</span>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-heading text-2xl font-normal text-charcoal leading-tight">{col.title}</h3>
                  <p className="font-body text-[12.5px] text-charcoal/45 mt-1">{col.sub}</p>
                </div>
                <ArrowUpRight size={18} className="text-charcoal/30 mt-1.5 group-hover:text-forest group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
