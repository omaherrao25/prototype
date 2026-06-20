import { useState } from 'react'
import { motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ value = 1, onChange }) {
  const handleDecrement = () => {
    if (value > 1) onChange(value - 1)
  }

  const handleIncrement = () => {
    if (value < 10) onChange(value + 1)
  }

  return (
    <div className="inline-flex items-center rounded-full border border-beige-dark/60 bg-white overflow-hidden h-10">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleDecrement}
        disabled={value <= 1}
        className="w-10 h-full flex items-center justify-center text-charcoal/50 hover:text-charcoal hover:bg-beige/40 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Minus size={13} strokeWidth={2} />
      </motion.button>

      <span className="w-8 text-center font-body text-[13px] font-semibold text-charcoal tabular-nums select-none">
        {value}
      </span>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleIncrement}
        disabled={value >= 10}
        className="w-10 h-full flex items-center justify-center text-charcoal/50 hover:text-charcoal hover:bg-beige/40 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Plus size={13} strokeWidth={2} />
      </motion.button>
    </div>
  )
}
