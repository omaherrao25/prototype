import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { soaps } from '../../../data/soaps'
import { Link } from 'react-router-dom'

export default function HeroSection({ activeTheme, setActiveTheme }) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % soaps.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  // Sync theme
  useEffect(() => {
    if (setActiveTheme) {
      setActiveTheme(soaps[activeIndex])
    }
  }, [activeIndex, setActiveTheme])

  // Left copy animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <div className="bg-white">
      <motion.section
        className="relative overflow-hidden transition-colors duration-1000 ease-in-out rounded-bl-[80px] lg:rounded-bl-[120px]"
        style={{ backgroundColor: '#F4EDE0' }}
      >
        <div className="relative flex items-stretch min-h-[75vh] sm:min-h-[80vh] lg:min-h-[95vh]">

          {/* Left: Copy */}
          <div
            className="relative z-20 w-full lg:w-[50%] flex items-center justify-center lg:justify-start px-6 sm:px-10 lg:pl-20 xl:pl-36 2xl:pl-44 pt-[35vh] sm:pt-[38vh] pb-16 sm:pb-20 lg:pt-0 lg:pb-0 transition-all duration-1000"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full max-w-[480px] mt-12 lg:mt-20 xl:mt-28 flex flex-col items-center text-center lg:items-start lg:text-left"
            >

              <motion.h1
                variants={itemVariants}
                className="font-heading font-bold leading-[1.05] tracking-[-0.01em] mb-4 sm:mb-6 text-charcoal"
                style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}
              >
                Handcrafted<br />
                <span className="italic" style={{ color: activeTheme?.text, transition: 'color 1s ease' }}>artisan</span> soaps.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-body text-[15px] sm:text-[1.1rem] leading-relaxed mb-8 sm:mb-10 max-w-[380px] text-charcoal opacity-80"
              >
                Experience the purest ingredients from nature. Our soaps are handcrafted to nourish, protect, and restore your skin naturally.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-4 sm:gap-5 mb-10">
                <Link
                  to="/shop"
                  className="w-full sm:w-auto px-8 py-4 text-[12px] sm:text-[13px] uppercase tracking-widest font-bold transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] text-center flex items-center justify-center min-h-touch"
                  style={{ backgroundColor: activeTheme?.text || '#2F4F3A', color: '#FFFFFF' }}
                >
                  Shop Now
                </Link>
                <button
                  className="w-full sm:w-auto px-8 py-4 text-[12px] sm:text-[13px] uppercase tracking-widest font-bold transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 border border-charcoal/40 hover:border-charcoal text-charcoal rounded-full flex items-center justify-center min-h-touch"
                >
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Carousel */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[58%] overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">

              {/* 1. Static Background Square */}
              <div
                className="absolute right-0 top-0 bottom-0 w-[62%] rounded-bl-[120px] transition-colors duration-1000 overflow-hidden"
                style={{ backgroundColor: activeTheme?.bgDark || activeTheme?.bgLight }}
              >
                {/* 2. Static Name (with elegant vertical fade) */}
                <div className="absolute right-12 top-1/2 -translate-y-1/2 select-none pointer-events-none">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeTheme?.name}
                      initial={{ opacity: 0, filter: 'blur(10px)' }}
                      animate={{ opacity: 0.65, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, filter: 'blur(10px)' }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="font-heading text-[clamp(4rem,7vw,7rem)] whitespace-nowrap leading-none mix-blend-multiply"
                      style={{
                        writingMode: 'vertical-rl',
                        color: activeTheme?.text
                      }}
                    >
                      {activeTheme?.name}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* 3. Soap Images with Elegant Crossfade & Float */}
              <div className="absolute inset-0 flex items-center justify-center -ml-32 pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    className="absolute w-full h-full flex items-center justify-center max-w-[800px]"
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -40, scale: 1.05 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.img
                      src={soaps[activeIndex].image}
                      alt={soaps[activeIndex].name}
                      className="w-auto h-auto max-w-[100%] max-h-[85%] object-contain drop-shadow-2xl"
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

          {/* Mobile: Image foreground & Dots */}
          <div className="lg:hidden absolute inset-0 z-30 pointer-events-none overflow-hidden">
            {/* Sliding Soap Image (Overlapping Heading) */}
            <div className="absolute top-[12vh] sm:top-[14vh] inset-x-0 h-[38vh] flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={activeIndex}
                  src={soaps[activeIndex].image}
                  initial={{ opacity: 0, x: 200, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -200, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="w-auto h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
                />
              </AnimatePresence>
            </div>
            
            {/* Mobile Dots Indicator */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10 pointer-events-auto">
              {soaps.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-6 bg-charcoal/60' : 'w-1.5 bg-charcoal/20'}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
