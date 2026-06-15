import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function useCountdown(initialHours = 23, initialMins = 59, initialSecs = 52) {
  const [time, setTime] = useState({ h: initialHours, m: initialMins, s: initialSecs })
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 }
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 }
        if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return time
}

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span className="font-heading text-5xl sm:text-6xl font-normal text-white tabular-nums leading-none">
      {String(value).padStart(2, '0')}
    </span>
    <span className="font-body text-[10px] tracking-[0.22em] uppercase text-beige/40 mt-3">{label}</span>
  </div>
)

export default function OfferSection() {
  const { h, m, s } = useCountdown()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-forest">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="h-px w-9 bg-gold/50" />
            <span className="font-body text-[11px] font-medium tracking-[0.28em] uppercase text-gold/90">Limited Time</span>
            <span className="h-px w-9 bg-gold/50" />
          </div>

          <h2 className="font-heading text-[2.75rem] sm:text-[4rem] font-normal text-white leading-[1.04] tracking-tight mb-5">
            Enjoy <span className="italic text-gold">10% off</span><br />your first order
          </h2>

          <p className="font-body text-[14.5px] text-beige/55 leading-relaxed max-w-md mx-auto mb-12">
            Use code{' '}
            <span className="text-gold font-medium tracking-[0.08em] border-b border-gold/40">ECOFIRST</span>
            {' '}at checkout. Free shipping on orders over ₹999.
          </p>

          {/* Countdown */}
          <div className="flex items-start justify-center gap-7 sm:gap-12 mb-14">
            <TimeUnit value={h} label="Hours" />
            <span className="font-heading text-4xl text-white/25 leading-none mt-1">:</span>
            <TimeUnit value={m} label="Minutes" />
            <span className="font-heading text-4xl text-white/25 leading-none mt-1">:</span>
            <TimeUnit value={s} label="Seconds" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center gap-2 bg-gold text-forest font-body text-[12.5px] font-semibold tracking-[0.04em] px-9 py-4 rounded-[2px] hover:bg-[#d4b87f] transition-colors duration-300">
              Claim Your Offer <ArrowRight size={15} />
            </button>
            <button className="font-body text-[12.5px] tracking-[0.04em] text-beige/60 hover:text-white border border-white/15 hover:border-white/35 px-8 py-4 rounded-[2px] transition-colors duration-300">
              Shop All Products
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
