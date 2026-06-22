import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Are products handmade?',
    answer: 'Yes, every Ecoveda product is meticulously handcrafted in small batches to ensure the highest quality, freshness, and attention to detail. Our artisan process preserves the natural benefits of the ingredients.'
  },
  {
    question: 'Are soaps chemical free?',
    answer: 'Absolutely. We believe in pure skincare. Our soaps are completely free from parabens, sulfates, synthetic fragrances, and artificial colors. We only use plant-based ingredients, essential oils, and natural colorants like clays and botanical powders.'
  },
  {
    question: 'Suitable for sensitive skin?',
    answer: 'Yes, our gentle formulas are designed with sensitive skin in mind. Ingredients like neem, turmeric, and rose soothe and nourish without irritation. However, we always recommend a patch test if you have specific allergies to botanical ingredients.'
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently, we ship nationwide within India. We are actively working on expanding our sustainable shipping practices to offer international delivery in the near future. Join our newsletter to be the first to know.'
  },
  {
    question: 'Are products cruelty free?',
    answer: 'We are proudly 100% cruelty-free. We never test our products on animals, and we only source ingredients from suppliers who share our strict ethical standards.'
  }
]

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ backgroundColor: '#FAF8F3' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-8 bg-forest/30" />
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-forest/60"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Curiosity
            </span>
            <div className="h-px w-8 bg-forest/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-light text-charcoal leading-[1.15]"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            Frequently Asked <span className="italic text-forest">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-charcoal/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <h3 className="font-heading text-lg sm:text-xl font-normal text-charcoal group-hover:text-forest transition-colors pr-8">
                  {faq.question}
                </h3>
                <span className="text-forest/50 group-hover:text-forest transition-colors flex-shrink-0">
                  {openIndex === i ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p
                      className="pb-6 text-charcoal/55 text-[14.5px] leading-relaxed pr-8 lg:pr-12"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
