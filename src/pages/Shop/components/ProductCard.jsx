import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      className="group cursor-pointer flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-[#EFEBE9] overflow-hidden mb-4 rounded-sm flex items-center justify-center">
        {/* Badges */}
        {product.isBestSeller && (
          <div className="absolute top-3 left-3 z-10 bg-charcoal text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">
            Hit
          </div>
        )}

        {/* Product Image with Hover Zoom */}
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Add to Cart Overlay Button */}
        <button className="absolute bottom-3 right-3 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm border border-black/5 text-charcoal opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-white hover:scale-110">
          <ShoppingBag size={18} strokeWidth={1.5} />
        </button>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1">
        <h3 className="font-body text-[14px] text-charcoal font-medium leading-snug">{product.name}</h3>
        <p className="font-body text-[13px] text-charcoal/70 font-semibold mt-0.5">₹{product.price.toLocaleString()}</p>
      </div>
    </motion.div>
  );
}
