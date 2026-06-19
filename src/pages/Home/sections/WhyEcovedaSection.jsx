import { motion } from 'framer-motion'
import { Sprout, Syringe, Ban, Award, Leaf } from 'lucide-react'

export default function WhyEcovedaSection() {
  return (
    <section className="py-16 lg:py-24 bg-white flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-[1000px] mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl sm:text-5xl font-normal tracking-wide text-[#9C795C] mb-5 uppercase"
        >
          Why Ecoveda?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-body text-[14.5px] text-charcoal/60 leading-relaxed mb-20 max-w-2xl mx-auto"
        >
          We believe in the power of nature to heal and protect. Our products are formulated with pure, 
          botanical ingredients to give your skin the delicate care it deserves without any harsh chemicals.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-8 lg:gap-12">
          {/* Item 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-6 text-[#9C795C] flex items-center justify-center w-20 h-20">
              <Sprout size={56} strokeWidth={1} />
            </div>
            <h3 className="font-body font-bold text-[17px] text-charcoal mb-3">Natural</h3>
            <p className="font-body text-[13px] text-charcoal/50 leading-relaxed max-w-[220px]">
              Sourced from the purest botanical ingredients nature has to offer.
            </p>
          </motion.div>

          {/* Item 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-6 text-[#9C795C] flex items-center justify-center w-20 h-20">
              <Syringe size={40} strokeWidth={1.2} className="transform -translate-y-1" />
              <Ban size={64} strokeWidth={1} className="absolute inset-0 m-auto text-[#9C795C]" />
            </div>
            <h3 className="font-body font-bold text-[17px] text-charcoal mb-3">No Side effect</h3>
            <p className="font-body text-[13px] text-charcoal/50 leading-relaxed max-w-[220px]">
              Clinically tested to be gentle and safe for all skin types.
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-6 text-[#9C795C] flex items-center justify-center w-20 h-20">
              <Award size={60} strokeWidth={1} />
              <div className="absolute top-0 left-0 w-full h-[45px] flex items-center justify-center">
                <Leaf size={22} strokeWidth={1.5} className="transform -translate-y-0.5" />
              </div>
            </div>
            <h3 className="font-body font-bold text-[17px] text-charcoal mb-3">100% Organic</h3>
            <p className="font-body text-[13px] text-charcoal/50 leading-relaxed max-w-[220px]">
              Certified organic processes ensuring earth-friendly skincare.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
