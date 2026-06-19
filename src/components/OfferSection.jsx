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
    <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full border border-[#9C795C]/20 bg-white/40 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-4">
      <span className="font-body text-4xl sm:text-[2.5rem] font-light text-[#314D3D] tabular-nums leading-none">
        {String(value).padStart(2, '0')}
      </span>
    </div>
    <span className="font-body text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#1C1C1C]/60 font-medium">{label}</span>
  </div>
)

export default function OfferSection() {
  const { h, m, s } = useCountdown()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-[#F6F1E9] overflow-hidden">
      {/* Subtle decorative background blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EFE8DD] rounded-full blur-[100px] opacity-60 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#EFE8DD] rounded-full blur-[100px] opacity-60 pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-heading text-[2.75rem] sm:text-5xl lg:text-[4rem] font-normal tracking-wide text-[#9C795C] uppercase mb-6 leading-[1.1]">
            Enjoy <span className="italic text-[#314D3D] normal-case">10% off</span><br />your first order
          </h2>

          <p className="font-body text-[15px] sm:text-[17px] text-[#1C1C1C]/70 leading-relaxed max-w-lg mx-auto mb-14">
            Use code{' '}
            <span className="text-[#314D3D] font-bold tracking-[0.1em] border-b border-[#314D3D]/30 pb-0.5">ECOFIRST</span>
            {' '}at checkout. Free shipping on orders over ₹999.
          </p>

          {/* Countdown */}
          <div className="flex items-start justify-center gap-6 sm:gap-10 mb-16">
            <TimeUnit value={h} label="Hours" />
            <span className="font-body text-4xl sm:text-[2.5rem] font-light text-[#9C795C]/30 leading-none mt-5 sm:mt-6">:</span>
            <TimeUnit value={m} label="Minutes" />
            <span className="font-body text-4xl sm:text-[2.5rem] font-light text-[#9C795C]/30 leading-none mt-5 sm:mt-6">:</span>
            <TimeUnit value={s} label="Seconds" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="font-body px-10 py-4 sm:py-4.5 bg-[#314D3D] text-[#F6F1E9] rounded-full text-[12px] sm:text-[13px] tracking-[0.1em] uppercase font-semibold shadow-[0_10px_30px_rgba(49,77,61,0.2)] hover:bg-[#23382c] transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
              Claim Your Offer <ArrowRight size={15} />
            </button>
            <button className="font-body px-10 py-4 sm:py-4.5 text-[#314D3D] rounded-full text-[12px] sm:text-[13px] tracking-[0.1em] uppercase font-semibold border border-[#314D3D]/20 hover:border-[#314D3D] hover:bg-[#314D3D]/5 transition-all w-full sm:w-auto">
              Shop All Soaps
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
