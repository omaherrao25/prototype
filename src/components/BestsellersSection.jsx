import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, ShoppingCart, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Img from './shared/Img'

// Local soap photos from public/images (encode spaces in filenames)
const img = (file) => encodeURI(`/images/${file}`)

const products = [
  {
    id: 1,
    name: 'Neem & Tulsi Soap',
    sub: 'Purifying · Antibacterial',
    price: 249,
    mrp: 320,
    rating: 4.8,
    reviews: 228,
    badge: 'Bestseller',
    badgeColor: 'bg-forest',
    image: img('Neem & Tulsi Soap.png'),
    gradient: 'linear-gradient(135deg,#d4edd0,#5f9a56)',
  },
  {
    id: 2,
    name: 'Turmeric Glow Soap',
    sub: 'Brightening · Anti-tan',
    price: 249,
    mrp: 340,
    rating: 4.9,
    reviews: 347,
    badge: 'Top Pick',
    badgeColor: 'bg-gold',
    image: img('Turmeric soap.png'),
    gradient: 'linear-gradient(135deg,#fff3c4,#e8a800)',
  },
  {
    id: 3,
    name: 'Charcoal Detox Soap',
    sub: 'Deep Cleanse · Pore Clear',
    price: 249,
    mrp: 320,
    rating: 4.7,
    reviews: 98,
    badge: null,
    image: img('Charcoal Detox Soap.png'),
    gradient: 'linear-gradient(135deg,#bfbfbf,#333)',
  },
  {
    id: 4,
    name: 'Aloe Vera Soap',
    sub: 'Hydrating · Soothing',
    price: 249,
    mrp: 320,
    rating: 4.8,
    reviews: 112,
    badge: null,
    image: img('Aloe vera soap.png'),
    gradient: 'linear-gradient(135deg,#d4f0d0,#3a9a3a)',
  },
  {
    id: 5,
    name: 'Rose Soap',
    sub: 'Hydrating · Anti-aging',
    price: 279,
    mrp: 380,
    rating: 4.9,
    reviews: 156,
    badge: 'New',
    badgeColor: 'bg-rose-500',
    image: img('Rose Soap.png'),
    gradient: 'linear-gradient(135deg,#fce4ee,#e84073)',
  },
  {
    id: 6,
    name: 'Coffee Scrub Soap',
    sub: 'Exfoliating · Energizing',
    price: 269,
    mrp: 360,
    rating: 4.7,
    reviews: 94,
    badge: null,
    image: img('Coffee Soap.png'),
    gradient: 'linear-gradient(135deg,#d8c0a8,#6b4423)',
  },
  {
    id: 7,
    name: 'Oatmeal Soap',
    sub: 'Gentle · Nourishing',
    price: 249,
    mrp: 320,
    rating: 4.8,
    reviews: 78,
    badge: null,
    image: img('Oatmeal Soap.png'),
    gradient: 'linear-gradient(135deg,#f3e9d4,#c9a766)',
  },
  {
    id: 8,
    name: 'Saffron Glow Soap',
    sub: 'Radiance · Even Tone',
    price: 329,
    mrp: 450,
    rating: 4.9,
    reviews: 134,
    badge: 'Premium',
    badgeColor: 'bg-gold',
    image: img('Saffron Soap.png'),
    gradient: 'linear-gradient(135deg,#ffe8c2,#e6892e)',
  },
]

const Stars = ({ n }) => (
  <div className="flex gap-0.5">
    {[1,2,3,4,5].map(i => (
      <Star key={i} size={11}
        className={i <= Math.round(n) ? 'text-gold' : 'text-charcoal/15'}
        fill={i <= Math.round(n) ? '#C6A769' : 'none'}
      />
    ))}
  </div>
)

const ProductCard = ({ p: prod, idx }) => {
  const [wished, setWished] = useState(false)
  const [added, setAdded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: idx * 0.05 }}
      className="flex-shrink-0 w-[210px] sm:w-[235px] group"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-[3px] bg-[#F1ECE2] mb-4">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <Img src={prod.image} alt={prod.name} className="w-full h-full" gradient={prod.gradient} />
        </motion.div>

        {/* Badge — restrained */}
        {prod.badge && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-forest text-[9px] font-body font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full">
            {prod.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={() => setWished(!wished)}
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/85 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart size={13} className={wished ? 'text-forest' : 'text-charcoal/45'} fill={wished ? '#2F4F3A' : 'none'} />
        </button>
      </div>

      {/* Info */}
      <div className="flex items-center gap-1.5 mb-1.5">
        <Stars n={prod.rating} />
        <span className="text-[10px] font-body text-charcoal/35">({prod.reviews})</span>
      </div>
      <h3 className="font-heading text-lg font-normal text-charcoal leading-tight">{prod.name}</h3>
      <p className="font-body text-[11.5px] text-charcoal/45 mb-3">{prod.sub}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-1.5">
          <span className="font-body font-semibold text-charcoal text-[15px]">₹{prod.price}</span>
          <span className="font-body text-[11px] text-charcoal/30 line-through">₹{prod.mrp}</span>
        </div>
        <button
          onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1800) }}
          className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full font-body text-[11px] font-medium tracking-wide transition-colors duration-300 ${
            added ? 'bg-sage text-white' : 'bg-forest/5 text-forest hover:bg-forest hover:text-white'
          }`}
        >
          {added ? (
            <>
              <svg viewBox="0 0 12 10" fill="none" className="w-3 h-3">
                <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Added
            </>
          ) : (
            <><ShoppingCart size={13} /> Add</>
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

  const scroll = dir => {
    scrollRef.current?.scrollBy({ left: dir * 260, behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-9 lg:mb-11"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="rule" />
              <span className="eyebrow">Most Loved</span>
            </div>
            <h2 className="font-heading text-[2.5rem] sm:text-[3.25rem] font-normal text-charcoal leading-[1.05] tracking-tight">
              Our bestsellers
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <button onClick={() => scroll(-1)} aria-label="Previous" className="w-10 h-10 rounded-full border border-beige-dark hover:border-forest text-charcoal/40 hover:text-forest flex items-center justify-center transition-all">
                <ChevronLeft size={16} />
              </button>
              <button onClick={() => scroll(1)} aria-label="Next" className="w-10 h-10 rounded-full border border-beige-dark hover:border-forest text-charcoal/40 hover:text-forest flex items-center justify-center transition-all">
                <ChevronRight size={16} />
              </button>
            </div>
            <a href="#" className="hidden sm:inline-flex link-quiet mb-1">
              View all <ArrowRight size={12} />
            </a>
          </div>
        </motion.div>

        {/* Scroll strip */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 pb-2"
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
