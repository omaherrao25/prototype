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
import IngredientHighlight from './components/IngredientHighlight'
import TrustQualitySection from './components/TrustQualitySection'
import LifestyleCTA from './components/LifestyleCTA'
import { productDetails, recommendedProducts } from '../../data/productDetails'

export default function Product() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const recRef = useRef(null)
  const recInView = useInView(recRef, { once: true, margin: '-60px' })

  // Scroll to top on mount or product change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  // Get product data — fallback to Turmeric Glow Soap
  const product = productDetails[id] || productDetails['bestseller-2']

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <main className="min-h-screen bg-offwhite">
      {/* ──────────────────────────────────────────────── */}
      {/* 1. BREADCRUMB                                    */}
      {/* ──────────────────────────────────────────────── */}
      <div className="pt-28 sm:pt-32 pb-6">
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
      <section className="pb-16 lg:pb-24">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">
            {/* LEFT — Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductGallery images={product.images} name={product.name} />
            </motion.div>

            {/* RIGHT — Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-28 pt-2"
            >
              {/* Skin Concern Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="eyebrow">{product.tagline}</span>
                <span className="inline-block w-1 h-1 rounded-full bg-sage/50" />
                <span className="font-body text-[11px] text-charcoal/35 uppercase tracking-wider font-medium">
                  {product.category}
                </span>
              </div>

              {/* Product Name */}
              <h1 className="font-heading text-4xl sm:text-5xl font-normal text-charcoal tracking-wide leading-[1.15] mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={
                        i < Math.floor(product.rating)
                          ? 'text-gold fill-gold'
                          : 'text-beige-dark fill-beige-dark/30'
                      }
                    />
                  ))}
                </div>
                <span className="font-body text-[13px] font-medium text-charcoal/60">
                  {product.rating}
                </span>
                <span className="font-body text-[12px] text-charcoal/35">
                  ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Short Description */}
              <p className="font-body text-[15px] text-charcoal/55 leading-[1.75] mb-7 max-w-md">
                {product.shortDescription}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-7">
                <span className="font-heading text-3xl font-medium text-charcoal">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="font-body text-[16px] text-charcoal/30 line-through">
                      ₹{product.originalPrice}
                    </span>
                    <span className="inline-block bg-sage/10 text-sage-dark text-[11px] font-body font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {discountPercent}% off
                    </span>
                  </>
                )}
              </div>

              {/* Benefit Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.benefits.slice(0, 4).map((b) => (
                  <span
                    key={b.label}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-beige/50 border border-beige-dark/20 font-body text-[11px] font-medium text-charcoal/60 tracking-wide"
                  >
                    <span className="text-sm">{b.icon}</span>
                    {b.label}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-beige-dark/30 mb-7" />

              {/* Quantity + Add to Cart */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                <div>
                  <p className="font-body text-[11px] font-bold uppercase tracking-widest text-charcoal/40 mb-2.5">
                    Quantity
                  </p>
                  <QuantitySelector value={quantity} onChange={setQuantity} />
                </div>

                <div className="flex-1 w-full sm:w-auto sm:pt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-forest text-white font-body text-[12.5px] font-bold uppercase tracking-[0.14em] rounded-full shadow-luxury hover:bg-forest-light hover:shadow-luxury-lg transition-all duration-400"
                  >
                    Add to Cart · ₹{product.price * quantity}
                  </motion.button>
                </div>
              </div>

              {/* Wishlist Button */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-full py-3.5 rounded-full border font-body text-[12px] font-semibold uppercase tracking-[0.1em] flex items-center justify-center gap-2 transition-all duration-300 mb-8 ${
                  isWishlisted
                    ? 'bg-rose-50 border-rose-200 text-rose-500'
                    : 'bg-white border-beige-dark/40 text-charcoal/50 hover:border-charcoal/20 hover:text-charcoal/70'
                }`}
              >
                <Heart
                  size={15}
                  strokeWidth={1.8}
                  className={isWishlisted ? 'fill-rose-400' : ''}
                />
                {isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
              </motion.button>

              {/* Delivery Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Truck size={16} strokeWidth={1.5} className="text-sage flex-shrink-0" />
                  <span className="font-body text-[13px] text-charcoal/50">
                    {product.shippingInfo.delivery}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck size={16} strokeWidth={1.5} className="text-sage flex-shrink-0" />
                  <span className="font-body text-[13px] text-charcoal/50">
                    {product.shippingInfo.returns}
                  </span>
                </div>
              </div>

              {/* Natural Ingredients Tags */}
              <div className="mb-6">
                <p className="font-body text-[11px] font-bold uppercase tracking-widest text-charcoal/35 mb-3">
                  Key Ingredients
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-body font-medium border"
                      style={{
                        backgroundColor: ing.bg,
                        color: ing.color,
                        borderColor: `${ing.color}20`,
                      }}
                    >
                      {ing.emoji} {ing.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Trust Micro-badges */}
              <div className="flex flex-wrap items-center gap-4 pt-5 border-t border-beige-dark/20">
                {[
                  { icon: '🤲', text: 'Handmade' },
                  { icon: '🐰', text: 'Cruelty Free' },
                  { icon: '🌿', text: 'Chemical Free' },
                ].map((item) => (
                  <span
                    key={item.text}
                    className="flex items-center gap-1.5 font-body text-[11px] text-charcoal/40"
                  >
                    <span className="text-sm">{item.icon}</span>
                    {item.text}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* 3. PRODUCT CONTENT TABS                          */}
      {/* ──────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="container-pad py-14 lg:py-20">
          <ProductTabs product={product} />
        </div>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* 4. RECOMMENDED PRODUCTS                          */}
      {/* ──────────────────────────────────────────────── */}
      <section ref={recRef} className="section-pad bg-offwhite">
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

      {/* ──────────────────────────────────────────────── */}
      {/* 5. INGREDIENT HIGHLIGHT                          */}
      {/* ──────────────────────────────────────────────── */}
      <IngredientHighlight ingredients={product.ingredients} />

      {/* ──────────────────────────────────────────────── */}
      {/* 6. TRUST & QUALITY                               */}
      {/* ──────────────────────────────────────────────── */}
      <TrustQualitySection />

      {/* ──────────────────────────────────────────────── */}
      {/* 7. LIFESTYLE CTA BANNER                          */}
      {/* ──────────────────────────────────────────────── */}
      <LifestyleCTA />
    </main>
  )
}
