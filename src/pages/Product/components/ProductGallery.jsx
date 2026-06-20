import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProductGallery({ images, name }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const galleryImages = [
    images[0],
    images[1] || images[0],
    images[0],
    images[1] || images[0],
  ]

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square lg:aspect-[5/6] max-h-[520px] bg-gradient-to-br from-[#F5F0E8] to-[#EDE7DD] rounded-2xl overflow-hidden group">
        {/* Soft ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/[0.02] to-transparent pointer-events-none z-10" />

        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={galleryImages[activeIndex]}
            alt={`${name} - View ${activeIndex + 1}`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </AnimatePresence>

        {/* Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-block bg-forest/90 text-white text-[9px] font-body font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full backdrop-blur-sm">
            Best Seller
          </span>
        </div>
      </div>

      {/* Horizontal Thumbnails (all screens) */}
      <div className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-1">
        {galleryImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
              activeIndex === idx
                ? 'ring-2 ring-forest ring-offset-2 ring-offset-offwhite shadow-luxury'
                : 'ring-1 ring-beige-dark/30 opacity-50 hover:opacity-85 hover:ring-sage/40'
            }`}
          >
            <img
              src={img}
              alt={`${name} thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
