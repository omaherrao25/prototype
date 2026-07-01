import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      className="group cursor-pointer flex flex-col"
    >
      <Link to={`/product/${product.id}`} className="block">
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
          <button 
            onClick={handleAddToCart}
            aria-label="Add to cart"
            className={`absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-sm border border-black/5 transform translate-y-0 sm:translate-y-2 transition-all duration-300 sm:group-hover:translate-y-0 active:scale-95 ${added ? 'bg-[#9C795C] text-white opacity-100 scale-105' : 'bg-white/90 sm:bg-white/80 backdrop-blur-md text-charcoal opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-white sm:hover:scale-110'}`}
          >
            {added ? <Check size={16} strokeWidth={2.5} className="sm:w-[18px] sm:h-[18px]" /> : <ShoppingBag size={16} strokeWidth={1.5} className="sm:w-[18px] sm:h-[18px]" />}
          </button>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-body text-[14px] text-charcoal font-medium leading-snug">{product.name}</h3>
            <p className="font-body text-[13px] text-charcoal/70 font-semibold whitespace-nowrap">₹{product.price.toLocaleString()}</p>
          </div>
          
          <div className="flex items-center gap-1.5 text-charcoal/50 text-[11px] font-body">
            <div className="flex items-center gap-0.5">
              <Star size={10} className="fill-[#C6A769] text-[#C6A769]" />
              <span className="font-medium text-charcoal/70">4.8</span>
            </div>
            <span>•</span>
            <span className="truncate">{product.skinType?.join(', ')}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
