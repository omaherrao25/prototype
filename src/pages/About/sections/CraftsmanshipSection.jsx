import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function CraftsmanshipSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Organic texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23314D3D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Main image */}
              <motion.div
                className="relative overflow-hidden rounded-sm aspect-[4/5]"
                style={{ y: imageY }}
              >
                <img
                  src="/about/craftsmanship.png"
                  alt="Ecoveda handcrafted soap making process"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/15 to-transparent" />
              </motion.div>

              {/* Layered accent image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-8 -right-8 lg:-right-12 w-[45%] aspect-square overflow-hidden rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-4 border-white/80"
              >
                <img
                  src="/about/ingredients-showcase.png"
                  alt="Natural botanical ingredients"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative frame */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t border-l border-gold/25" />
            </div>
          </motion.div>

          {/* Right: Text */}
          <div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-light text-charcoal leading-[1.15] mb-8"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Crafted <span className="italic text-forest">slowly</span>.
              <br />
              Made <span className="italic text-forest">mindfully</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-charcoal/55 leading-[1.9] mb-10 max-w-lg"
              style={{ fontFamily: "'Manrope', sans-serif", fontSize: '1rem' }}
            >
              Every Ecoveda product is carefully handcrafted in small batches to
              preserve purity, texture, and effectiveness while maintaining the
              beauty of natural skincare rituals.
            </motion.p>

            {/* Process steps */}
            <div className="space-y-6">
              {[
                { num: '01', label: 'Source', desc: 'Ethically sourced botanicals and raw ingredients' },
                { num: '02', label: 'Formulate', desc: 'Small-batch recipes perfected over time' },
                { num: '03', label: 'Craft', desc: 'Handmade with care and traditional methods' },
                { num: '04', label: 'Cure', desc: 'Naturally cured for maximum gentleness' },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="flex items-start gap-5 group"
                >
                  <span className="font-heading text-gold/40 text-xl font-light mt-0.5 transition-colors duration-300 group-hover:text-gold">
                    {step.num}
                  </span>
                  <div>
                    <h4
                      className="font-heading text-charcoal text-base font-normal mb-1 transition-colors duration-300 group-hover:text-forest"
                    >
                      {step.label}
                    </h4>
                    <p
                      className="text-charcoal/40 text-sm leading-relaxed"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
