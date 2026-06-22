import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  Star,
  Heart,
  Truck,
  ShieldCheck,
  Leaf,
  ChevronRight,
} from 'lucide-react'

import ProductGallery from './components/ProductGallery'
import QuantitySelector from './components/QuantitySelector'
import ProductTabs from './components/ProductTabs'
import RecommendedCard from './components/RecommendedCard'

import LifestyleCTA from './components/LifestyleCTA'
import { productDetails, recommendedProducts } from '../../data/productDetails'
import { products } from '../../data/products'

export default function Product() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const recRef = useRef(null)
  const recInView = useInView(recRef, { once: true, margin: '-60px' })



  // Get product data — fallback to Turmeric Glow Soap
  const product = productDetails[id] || productDetails['bestseller-2']
  const baseProduct = products.find(p => p.id === product.id)
  const isBestSeller = baseProduct?.isBestSeller || false

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <main className="min-h-screen bg-white">
      {/* ──────────────────────────────────────────────── */}
      {/* 1. BREADCRUMB                                    */}
      {/* ──────────────────────────────────────────────── */}
      <div className="pt-24 sm:pt-28 pb-4">
        <div className="container-pad">
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 font-body text-[12px] text-charcoal/40"
          >
            <Link
              to="/"
              className="hover:text-charcoal/70 transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight size={12} className="text-charcoal/25" />
            <Link
              to="/shop"
              className="hover:text-charcoal/70 transition-colors duration-200"
            >
              Shop
            </Link>
            <ChevronRight size={12} className="text-charcoal/25" />
            <span className="text-charcoal/65 font-medium">{product.name}</span>
          </motion.nav>
        </div>
      </div>

      {/* ──────────────────────────────────────────────── */}
      {/* 2. MAIN PRODUCT LAYOUT — TWO COLUMNS             */}
      {/* ──────────────────────────────────────────────── */}
      <section className="pb-12 lg:pb-16">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
            {/* LEFT — Gallery (5 of 12 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <ProductGallery images={product.images} name={product.name} isBestSeller={isBestSeller} />
            </motion.div>

            {/* RIGHT — Product Info (7 of 12 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 lg:sticky lg:top-28 pt-2 lg:pl-4"
            >
              {/* Skin Concern Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className="eyebrow !text-[10px]">{product.tagline}</span>
                <span className="inline-block w-1 h-1 rounded-full bg-sage/50" />
                <span className="font-body text-[10px] text-charcoal/35 uppercase tracking-wider font-semibold">
                  {product.category}
                </span>
              </div>

              {/* Product Name */}
              <h1 className="font-heading text-3xl sm:text-4xl font-normal text-charcoal tracking-wide leading-[1.1] mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={
                        i < Math.floor(product.rating)
                          ? 'text-gold fill-gold'
                          : 'text-beige-dark fill-beige-dark/30'
                      }
                    />
                  ))}
                </div>
                <span className="font-body text-[12px] font-medium text-charcoal/60">
                  {product.rating}
                </span>
                <span className="font-body text-[11px] text-charcoal/35">
                  ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Short Description */}
              <p className="font-body text-[13.5px] text-charcoal/55 leading-[1.6] mb-6 max-w-lg">
                {product.shortDescription}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2.5 mb-6">
                <span className="font-heading text-2xl font-medium text-charcoal">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="font-body text-[14px] text-charcoal/30 line-through">
                      ₹{product.originalPrice}
                    </span>
                    <span className="inline-block bg-sage/10 text-sage-dark text-[10px] font-body font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                      {discountPercent}% off
                    </span>
                  </>
                )}
              </div>



              {/* Quantity + Add to Cart */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-3 mb-3">
                <div>
                  <p className="font-body text-[10px] font-bold uppercase tracking-widest text-charcoal/40 mb-2">
                    Quantity
                  </p>
                  <QuantitySelector value={quantity} onChange={setQuantity} />
                </div>

                <div className="flex-1 w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-10 flex items-center justify-center bg-forest text-white font-body text-[11px] font-bold uppercase tracking-[0.15em] rounded-full shadow-luxury hover:bg-forest-light hover:shadow-luxury-lg transition-all duration-400"
                  >
                    Add to Cart · ₹{product.price * quantity}
                  </motion.button>
                </div>
              </div>

              {/* Wishlist Button */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-full h-10 rounded-full border font-body text-[10.5px] font-semibold uppercase tracking-[0.1em] flex items-center justify-center gap-2 transition-all duration-300 mb-6 ${
                  isWishlisted
                    ? 'bg-rose-50 border-rose-200 text-rose-500'
                    : 'bg-white border-beige-dark/50 text-charcoal/50 hover:border-charcoal/30 hover:text-charcoal/80'
                }`}
              >
                <Heart
                  size={13}
                  strokeWidth={2}
                  className={isWishlisted ? 'fill-rose-400' : ''}
                />
                {isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
              </motion.button>

              {/* Product Tabs (Moved directly below wishlist) */}
              <div className="mt-8 pt-2">
                <ProductTabs product={product} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* 4. LIFESTYLE CTA BANNER                          */}
      {/* ──────────────────────────────────────────────── */}
      <LifestyleCTA />

      {/* ──────────────────────────────────────────────── */}
      {/* 5. RECOMMENDED PRODUCTS                          */}
      {/* ──────────────────────────────────────────────── */}
      <section ref={recRef} className="pt-16 lg:pt-20 bg-white pb-28 lg:pb-36">
        <div className="container-pad">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={recInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="eyebrow mb-4">Curated for you</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-normal text-charcoal">
              You may also like
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
            {recommendedProducts.map((p, idx) => (
              <RecommendedCard key={p.id} product={p} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

