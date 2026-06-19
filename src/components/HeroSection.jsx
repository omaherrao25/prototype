import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { soaps } from '../data/soaps'

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

  return (
    <motion.section
      className="relative overflow-hidden transition-colors duration-1000 ease-in-out"
      style={{ backgroundColor: '#F4EDE0' }}
    >
      <div className="relative flex items-stretch min-h-[85vh] lg:min-h-[90vh]">

        {/* Left: Copy */}
        <div
          className="relative z-20 w-full lg:w-[50%] flex items-center justify-center lg:justify-start px-6 sm:px-10 lg:pl-20 xl:pl-36 2xl:pl-44 py-20 lg:py-0 transition-all duration-1000"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[480px] mt-12 lg:mt-20 xl:mt-28"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-charcoal" />
              <span className="text-sm tracking-widest uppercase font-medium text-charcoal">
                Pure Botanicals
              </span>
            </div>

            <h1
              className="font-heading font-bold leading-[1.02] tracking-[-0.01em] mb-6 text-charcoal"
              style={{ fontSize: 'clamp(2.8rem, 5.2vw, 5rem)' }}
            >
              Handcrafted<br />
              <span className="italic" style={{ color: activeTheme?.accent }}>artisan</span> soaps.
            </h1>

            <p
              className="font-body text-[1rem] leading-relaxed mb-9 max-w-[380px] text-charcoal opacity-80"
            >
              Experience the purest ingredients from nature. Our soaps are handcrafted to nourish, protect, and restore your skin naturally.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                className="px-8 py-3.5 text-[13px] uppercase tracking-widest font-semibold transition-all duration-1000 hover:scale-105 rounded-sm"
                style={{ backgroundColor: activeTheme?.text || '#2F4F3A', color: '#FFFFFF' }}
              >
                Order Now
              </button>
              <button
                className="px-8 py-3.5 text-[13px] uppercase tracking-widest font-semibold transition-all duration-300 hover:scale-105 border border-charcoal text-charcoal rounded-sm"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right: Carousel */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[58%] overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">

            {/* 1. Static Background Square */}
            <div
              className="absolute inset-y-0 right-0 w-[55%] rounded-l-[80px] transition-colors duration-1000 shadow-2xl flex items-center overflow-hidden"
              style={{ backgroundColor: activeTheme?.bgDark || activeTheme?.bgLight }}
            >
              {/* 2. Static Name (with fade transition on text change) */}
              <div className="absolute right-12 top-1/2 -translate-y-1/2">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeTheme?.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.6, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="font-heading text-[clamp(4rem,7vw,7rem)] whitespace-nowrap"
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

            {/* 3. Soap Images with Circular Transition */}
            <div className="absolute inset-0 flex items-center justify-center -ml-20">
              <AnimatePresence mode="popLayout">
                {soaps.map((soap, idx) => {
                  const isActive = idx === activeIndex;
                  const isNext = idx === (activeIndex + 1) % soaps.length;
                  const isPrev = idx === (activeIndex - 1 + soaps.length) % soaps.length;

                  if (!isActive && !isNext && !isPrev) return null;

                  // Circular Transition
                  let xPos = 0;
                  let yPos = 0;
                  let rotate = 0;
                  let scale = 1;
                  let opacity = 1;
                  let zIndex = 10;

                  if (isActive) {
                    xPos = '-5%';
                    yPos = '0%';
                    rotate = 0;
                    scale = 1.15;
                    zIndex = 20;
                    opacity = 1;
                  } else if (isNext) {
                    xPos = '50%';
                    yPos = '50%';
                    rotate = 45;
                    scale = 0.8;
                    zIndex = 10;
                    opacity = 0;
                  } else if (isPrev) {
                    xPos = '-50%';
                    yPos = '-50%';
                    rotate = -45;
                    scale = 0.8;
                    zIndex = 10;
                    opacity = 0;
                  }

                  return (
                    <motion.div
                      key={soap.id}
                      className="absolute w-full h-full flex items-center justify-center max-w-[800px]"
                      initial={{ x: '50%', y: '50%', rotate: 45, scale: 0.8, opacity: 0 }}
                      animate={{ x: xPos, y: yPos, rotate: rotate, scale: scale, opacity: opacity }}
                      exit={{ x: '-50%', y: '-50%', rotate: -45, scale: 0.8, opacity: 0 }}
                      transition={{ duration: 1.2, ease: [0.25, 1, 0.35, 1] }}
                      style={{ zIndex, transformOrigin: 'center center', outline: '1px solid transparent', backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
                    >
                      <img
                        src={soap.image}
                        alt={soap.name}
                        className="w-auto h-auto max-w-[100%] max-h-[85%] object-contain drop-shadow-2xl"
                        style={{ filter: isActive ? 'none' : 'brightness(0.8)', border: '1px solid transparent' }}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Mobile: Image background (fallback) */}
        <div className="lg:hidden absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={activeIndex}
              src={soaps[activeIndex].image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div
            className="absolute inset-0 transition-colors duration-1000"
            style={{
              background: `linear-gradient(to bottom, #F4EDE0E6, #F4EDE0A6, #F4EDE0EB)`
            }}
          />
        </div>
      </div>
    </motion.section>
  )
}
