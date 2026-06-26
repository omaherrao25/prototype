import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function LifestyleBannerSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Full-width image background with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <img
          src="/about/lifestyle-banner.png"
          alt="Ecoveda lifestyle"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Center Wide Blur Effect */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
        <div className="w-full h-[150%] sm:w-[150%] max-w-[1200px] max-h-[1000px] backdrop-blur-[8px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"></div>
      </div>

      {/* Center Wide Color Overlay for Text Readability */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
        <div className="w-full h-[150%] sm:w-[150%] max-w-[1200px] max-h-[1000px] bg-[#F6F1E9]/85 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center py-16 px-4 sm:px-12">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-light text-[#1C1C1C] leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
          >
            Self-care should feel{' '}
            <span className="italic text-[#314D3D]">intentional</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#1C1C1C]/80 leading-[1.8] mb-10 max-w-lg mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem' }}
          >
            Designed to bring calm, balance, and nourishment into your daily ritual.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#314D3D] text-[#F6F1E9] text-[11.5px] font-semibold tracking-[0.15em] uppercase rounded-full shadow-[0_12px_40px_rgba(49,77,61,0.25)] transition-all duration-500 hover:bg-[#23382c]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Discover Bestsellers
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"
              >
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
