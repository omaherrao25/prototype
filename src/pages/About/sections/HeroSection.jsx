import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }
  })
}

// Floating botanical leaf SVG
const FloatingLeaf = ({ className, delay = 0, duration = 8 }) => (
  <motion.svg
    className={`absolute pointer-events-none opacity-[0.07] ${className}`}
    width="120" height="120" viewBox="0 0 120 120" fill="none"
    animate={{ y: [0, -20, 0], rotate: [0, 5, -3, 0] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    <path
      d="M60 10C60 10 20 40 20 70C20 90 38 110 60 110C82 110 100 90 100 70C100 40 60 10 60 10Z"
      fill="#314D3D"
    />
    <path
      d="M60 10C60 10 60 110 60 110"
      stroke="#F7F3EE" strokeWidth="1" opacity="0.4"
    />
    <path
      d="M60 40C60 40 40 55 35 70"
      stroke="#F7F3EE" strokeWidth="0.5" opacity="0.3"
    />
    <path
      d="M60 55C60 55 80 65 85 80"
      stroke="#F7F3EE" strokeWidth="0.5" opacity="0.3"
    />
  </motion.svg>
)

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section
      ref={ref}
      className="relative min-h-[100vh] flex items-center overflow-hidden"
      style={{ backgroundColor: '#F7F3EE' }}
    >
      {/* Soft gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, rgba(199,160,108,0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(49,77,61,0.05) 0%, transparent 50%)'
        }}
      />

      {/* Background botanical image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <img
          src="/about/hero-botanical.png"
          alt=""
          className="w-full h-full object-cover opacity-[0.12]"
        />
      </motion.div>

      {/* Leaf shadow overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='200' cy='100' rx='80' ry='120' transform='rotate(-30 200 100)' fill='%23314D3D'/%3E%3Cellipse cx='300' cy='280' rx='60' ry='100' transform='rotate(20 300 280)' fill='%23314D3D'/%3E%3C/svg%3E")`,
          backgroundSize: '600px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Floating leaves */}
      <FloatingLeaf className="top-[10%] left-[5%] w-16 h-16 lg:w-24 lg:h-24" delay={0} duration={9} />
      <FloatingLeaf className="top-[15%] right-[8%] w-20 h-20 lg:w-28 lg:h-28 rotate-45" delay={2} duration={7} />
      <FloatingLeaf className="bottom-[20%] left-[12%] w-14 h-14 lg:w-20 lg:h-20 -rotate-30" delay={1} duration={10} />
      <FloatingLeaf className="bottom-[15%] right-[15%] w-12 h-12 lg:w-16 lg:h-16 rotate-90" delay={3} duration={8} />
      <FloatingLeaf className="top-[45%] right-[3%] w-10 h-10 lg:w-14 lg:h-14 -rotate-15" delay={1.5} duration={11} />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32"
        style={{ y: textY }}
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <div className="h-px w-8 bg-[#C7A06C]/40" />
            <span className="font-body text-[11px] font-medium tracking-[0.3em] uppercase text-[#314D3D]/60">
              About Ecoveda
            </span>
            <div className="h-px w-8 bg-[#C7A06C]/40" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-heading font-light text-[#1E1E1E] mb-8 leading-[1.1]"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
          >
            Rooted in Nature.
            <br />
            <span className="italic text-[#314D3D]">Crafted</span> with Intention.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="font-body text-[1rem] sm:text-[1.1rem] lg:text-[1.15rem] leading-[1.8] text-[#1E1E1E]/60 max-w-xl mx-auto mb-12"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Ecoveda was created to bring calm, honesty, and mindful self-care back
            into everyday skincare through handcrafted products inspired by timeless
            wellness rituals.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-5"
          >
            <Link
              to="/shop"
              className="group relative px-8 py-4 bg-[#314D3D] text-white text-[11.5px] sm:text-[12px] font-medium tracking-[0.15em] uppercase rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(49,77,61,0.25)]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-[#3D6B4F] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
            </Link>
            <Link
              to="/shop"
              className="px-8 py-4 border border-[#1E1E1E]/15 text-[#1E1E1E]/60 text-[11.5px] sm:text-[12px] font-medium tracking-[0.15em] uppercase rounded-sm transition-all duration-500 hover:border-[#314D3D]/40 hover:text-[#314D3D]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Our Ingredients
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-20 lg:mt-28 flex flex-col items-center gap-3"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#1E1E1E]/30 font-body">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-[#C7A06C]/50 to-transparent"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
