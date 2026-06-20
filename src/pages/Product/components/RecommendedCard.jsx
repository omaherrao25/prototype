import { motion } from 'framer-motion'
import { Star, Heart } from 'lucide-react'
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
        {/* Image */}
        <div className="relative aspect-[4/5] bg-gradient-to-br from-[#F5F0E8] to-[#EDE7DD] rounded-2xl overflow-hidden mb-4">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />

          {/* Wishlist Button */}
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation() }}
            className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center shadow-sm border border-white/50 text-charcoal/40 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:text-rose-400 hover:bg-white"
          >
            <Heart size={15} strokeWidth={1.8} />
          </button>

          {/* Quick Add */}
          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out z-10">
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation() }}
              className="w-full py-2.5 bg-forest/90 backdrop-blur-md text-white text-[11px] font-body font-bold uppercase tracking-[0.12em] rounded-xl hover:bg-forest transition-colors duration-200"
            >
              Quick Add
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="px-1">
          <h3 className="font-body text-[14px] font-medium text-charcoal leading-snug mb-1 group-hover:text-forest transition-colors duration-300">
            {product.name}
          </h3>
          <p className="font-body text-[12px] text-charcoal/40 mb-2">
            {product.benefit}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-body text-[14px] font-semibold text-charcoal">
              ₹{product.price}
            </span>
            <div className="flex items-center gap-1">
              <Star size={11} className="text-gold fill-gold" />
              <span className="font-body text-[11px] text-charcoal/50 font-medium">
                {product.rating}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
