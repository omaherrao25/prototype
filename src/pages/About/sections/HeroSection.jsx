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
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
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

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-32 lg:pb-16"
        style={{ y: textY }}
      >
        <div className="w-full mx-auto text-center">


          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-heading font-light text-charcoal mb-8 leading-[1.1]"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)' }}
          >
            Rooted in Nature.
            <br />
            <span className="italic text-forest">Crafted</span> with Intention.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="font-body text-[1rem] sm:text-[1.1rem] lg:text-[1.15rem] leading-[1.8] text-charcoal/60 max-w-xl mx-auto mb-12"
            style={{ fontFamily: "'Inter', sans-serif" }}
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
              className="group relative px-8 py-4 bg-forest text-white text-[11.5px] sm:text-[12px] font-medium tracking-[0.15em] uppercase rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(49,77,61,0.25)]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="relative z-10">Explore Products</span>
              <div className="absolute inset-0 bg-forest-light transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
            </Link>
            <Link
              to="/shop"
              className="px-8 py-4 border border-charcoal/15 text-charcoal/60 text-[11.5px] sm:text-[12px] font-medium tracking-[0.15em] uppercase rounded-full transition-all duration-500 hover:border-forest/40 hover:text-forest"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our Ingredients
            </Link>
          </motion.div>


        </div>
      </motion.div>
    </section>
  )
}
