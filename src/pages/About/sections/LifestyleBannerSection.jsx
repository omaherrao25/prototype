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

      {/* Warm overlay */}
      <div className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to right, rgba(30,30,30,0.65), rgba(30,30,30,0.35))'
        }}
      />

      {/* Leaf shadow texture */}
      <div className="absolute inset-0 z-[2] opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='150' cy='80' rx='60' ry='90' transform='rotate(-25 150 80)' fill='%23F7F3EE'/%3E%3Cellipse cx='230' cy='220' rx='45' ry='75' transform='rotate(15 230 220)' fill='%23F7F3EE'/%3E%3C/svg%3E")`,
          backgroundSize: '500px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-44">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-10 bg-[#C7A06C]/60" />
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C7A06C]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Mindful Living
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-light text-white leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
          >
            Self-care should feel{' '}
            <span className="italic text-[#C7A06C]">intentional</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/60 leading-[1.8] mb-10 max-w-lg"
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: '1rem' }}
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
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[11.5px] font-medium tracking-[0.15em] uppercase rounded-sm transition-all duration-500 hover:bg-white/20 hover:border-white/40"
              style={{ fontFamily: "'Manrope', sans-serif" }}
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
