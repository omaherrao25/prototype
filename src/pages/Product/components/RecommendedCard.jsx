import { motion } from 'framer-motion'
import { Star, Heart, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function RecommendedCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image — compact square ratio */}
        <div className="relative aspect-square bg-gradient-to-br from-[#F5F0E8] to-[#EDE7DD] rounded-xl overflow-hidden mb-3">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />

          {/* Wishlist Button */}
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation() }}
            className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center shadow-sm border border-white/50 text-charcoal/35 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:text-rose-400 hover:bg-white"
          >
            <Heart size={13} strokeWidth={1.8} />
          </button>

          {/* Quick Add */}
          <div className="absolute bottom-0 left-0 right-0 p-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out z-10">
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation() }}
              className="w-full py-2 bg-forest/90 backdrop-blur-md text-white text-[10px] font-body font-bold uppercase tracking-[0.12em] rounded-lg hover:bg-forest transition-colors duration-200 flex items-center justify-center gap-1.5"
            >
              <ShoppingBag size={12} strokeWidth={2} />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="px-0.5">
          <h3 className="font-body text-[13px] font-medium text-charcoal leading-snug mb-0.5 group-hover:text-forest transition-colors duration-300">
            {product.name}
          </h3>
          <p className="font-body text-[11px] text-charcoal/35 mb-1.5 leading-relaxed">
            {product.benefit}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-body text-[13px] font-semibold text-charcoal">
              ₹{product.price}
            </span>
            <div className="flex items-center gap-1">
              <Star size={10} className="text-gold fill-gold" />
              <span className="font-body text-[10px] text-charcoal/45 font-medium">
                {product.rating}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
