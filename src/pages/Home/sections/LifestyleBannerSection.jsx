import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link);

export default function LifestyleBannerSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Slow parallax effect for background
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section
      ref={ref}
      className="relative w-full h-auto sm:h-[85vh] min-h-[500px] sm:min-h-[700px] flex items-center overflow-hidden bg-[#F6F1E9]"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 scale-110"
      >
        <img
          src={encodeURI('/images/lifestyle-banner.jpeg')}
          alt="Ecoveda Lifestyle"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Subtle cinematic overlay */}
      <div className="absolute inset-0 z-10 bg-black/10 mix-blend-overlay pointer-events-none"></div>

      {/* Center Wide Blur Effect */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="w-full h-[150%] sm:w-[150%] max-w-[1200px] max-h-[1000px] backdrop-blur-[8px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"></div>
      </div>

      {/* Center Wide Color Overlay for Text Readability */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="w-full h-[150%] sm:w-[150%] max-w-[1200px] max-h-[1000px] bg-[#F6F1E9]/85 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center px-6 sm:px-12 py-16 sm:py-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="max-w-[700px] flex flex-col items-center text-center mx-auto pointer-events-auto"
        >

          {/* Heading */}
          <h2 className="font-heading text-[2.8rem] sm:text-[4.75rem] leading-[1.05] sm:leading-[1.02] text-[#1C1C1C] mb-5 sm:mb-6 font-normal tracking-tight">
            Rooted in nature.<br />
            <span className="italic text-[#314D3D]">Crafted with intention.</span>
          </h2>

          {/* Description */}
          <p className="font-body text-[14.5px] sm:text-[17px] leading-[1.85] text-[#1C1C1C]/80 mb-8 sm:mb-10 max-w-lg">
            Every Ecoveda product is handmade using skin-loving ingredients inspired by timeless wellness rituals. Designed to nourish your skin while bringing calm and balance to your daily self-care routine.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <MotionLink
              to="/shop"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="font-body px-9 py-4 sm:px-10 sm:py-4.5 bg-[#314D3D] text-[#F6F1E9] rounded-full text-[12px] sm:text-[13px] tracking-[0.1em] uppercase font-semibold shadow-[0_12px_40px_rgba(49,77,61,0.25)] hover:bg-[#23382c] transition-colors flex items-center justify-center gap-3 group w-full sm:w-auto min-h-[48px]"
            >
              Explore Products
              <ArrowRight size={15} className="transform group-hover:translate-x-1 transition-transform" />
            </MotionLink>

            <motion.button
              whileHover={{ y: -2, color: '#314D3D' }}
              className="font-body px-2 py-4 text-[#1C1C1C]/80 text-[12px] sm:text-[13px] tracking-[0.1em] uppercase font-semibold flex items-center justify-center gap-2 border-b border-transparent hover:border-[#C7A06C] transition-all w-full sm:w-auto min-h-[48px]"
            >
              Our Story
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
