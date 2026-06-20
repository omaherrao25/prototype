import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Img from '../../../components/shared/Img'

// Local soap photos from public/images (encode spaces in filenames)
const img = (file) => encodeURI(`/images/${file}`)

const products = [
  {
    id: 1,
    name: 'Neem & Tulsi Soap',
    price: 249,
    image: img('Neem & Tulsi Soap.png'),
  },
  {
    id: 2,
    name: 'Turmeric Glow Soap',
    price: 249,
    image: img('Turmeric soap.png'),
  },
  {
    id: 3,
    name: 'Charcoal Detox Soap',
    price: 249,
    image: img('Charcoal Detox Soap.png'),
  },
  {
    id: 4,
    name: 'Aloe Vera Soap',
    price: 249,
    image: img('Aloe vera soap.png'),
  },
  {
    id: 5,
    name: 'Rose Soap',
    price: 279,
    image: img('Rose Soap.png'),
  },
  {
    id: 6,
    name: 'Coffee Scrub Soap',
    price: 269,
    image: img('Coffee Soap.png'),
  },
  {
    id: 7,
    name: 'Oatmeal Soap',
    price: 249,
    image: img('Oatmeal Soap.png'),
  },
  {
    id: 8,
    name: 'Saffron Glow Soap',
    price: 329,
    image: img('Saffron Soap.png'),
  },
]

const ProductCard = ({ p: prod, idx }) => {
  const [wished, setWished] = useState(false)
  const [added, setAdded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: idx * 0.05 }}
      className="flex-shrink-0 w-[260px] sm:w-[280px] group relative rounded-2xl bg-[#F8F8F8] h-[350px] flex flex-col overflow-hidden"
    >
      {/* Product Image */}
      <Link to={`/product/bestseller-${prod.id}`} className="absolute inset-0 z-0 block">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <Img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
        </motion.div>
      </Link>

      {/* Wishlist Button */}
      <button
        onClick={() => setWished(!wished)}
        aria-label="Add to wishlist"
        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm z-10 hover:scale-105 transition-transform"
      >
        <Heart size={14} className={wished ? 'text-[#9C795C]' : 'text-charcoal'} fill={wished ? '#9C795C' : 'none'} />
      </button>

      {/* Info Pill */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 px-4 flex justify-between items-center shadow-[0_2px_10px_rgba(0,0,0,0.03)] z-10">
        <div className="text-left">
          <Link to={`/product/bestseller-${prod.id}`} className="block hover:text-[#9C795C] transition-colors">
            <h3 className="font-body text-[13px] font-bold text-charcoal leading-none mb-1.5 truncate max-w-[160px]">{prod.name}</h3>
          </Link>
          <p className="font-body text-[10px] text-charcoal/50 leading-none">Price • ₹{prod.price}</p>
        </div>
        <button
          onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1800) }}
          className="w-8 h-8 rounded-full bg-[#F4F4F4] flex flex-shrink-0 items-center justify-center hover:bg-[#e0e0e0] transition-colors"
        >
          {added ? (
            <svg viewBox="0 0 12 10" fill="none" className="w-3.5 h-3.5 text-[#9C795C]">
              <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <ShoppingBag size={13} className="text-charcoal/70" />
          )}
        </button>
      </div>
    </motion.div>
  )
}

export default function BestsellersSection() {
  const ref = useRef(null)
  const scrollRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  const scroll = dir => {
    scrollRef.current?.scrollBy({ left: dir * 296, behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative flex items-center justify-center mb-9 lg:mb-11 min-h-[48px]"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-normal tracking-wide text-[#9C795C] uppercase text-center">
            Our Bestsellers
          </h2>
          <div className="absolute right-0 hidden sm:flex items-center gap-3">
            <button 
              onClick={() => scroll(-1)} 
              disabled={!canScrollLeft}
              aria-label="Previous" 
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${canScrollLeft ? 'bg-[#9C795C] hover:bg-[#85654C] text-white' : 'bg-[#e5e5e5] text-charcoal/30 cursor-not-allowed'}`}>
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => scroll(1)} 
              disabled={!canScrollRight}
              aria-label="Next" 
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${canScrollRight ? 'bg-[#9C795C] hover:bg-[#85654C] text-white' : 'bg-[#e5e5e5] text-charcoal/30 cursor-not-allowed'}`}>
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>

        {/* Scroll strip */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 pb-2"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {products.map((prod, i) => (
            <div key={prod.id} style={{ scrollSnapAlign: 'start' }}>
              <ProductCard p={prod} idx={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
