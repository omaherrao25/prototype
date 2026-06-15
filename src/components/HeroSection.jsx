import { motion } from 'framer-motion'
import Img from './shared/Img'

// ── Minimal line icons for the feature row ─────────────────────
const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path d="M20 4C10 4 5 9 5 16c0 1 .2 2 .5 3M5 19c7 0 14-4 15-15" stroke="#2F4F3A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const IconHand = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path d="M8 13V6.5a1.5 1.5 0 0 1 3 0V12m0-1.5a1.5 1.5 0 0 1 3 0V12m0-1a1.5 1.5 0 0 1 3 0v4c0 3-2 5-5 5s-4-1-5.5-3L5 15.5a1.6 1.6 0 0 1 2.4-2.1L8 14" stroke="#2F4F3A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const IconDrop = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path d="M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11Z" stroke="#2F4F3A" strokeWidth="1.3" strokeLinejoin="round"/>
    <path d="M9 15a3 3 0 0 0 2 2.6" stroke="#2F4F3A" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
)
const IconRabbit = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path d="M9 21c-2.2 0-4-1.7-4-3.9 0-1.7 1-3 2.4-3.8M9 21h6m-6 0c0-2 1-3 1.5-3.6M15 21c2.2 0 4-1.7 4-3.9 0-1.7-1-3-2.4-3.8M15 21c0-2-1-3-1.5-3.6M7.4 13.3C6.6 11 7 6 9 4c.8 1.6 1.3 4 1.2 6M16.6 13.3C17.4 11 17 6 15 4c-.8 1.6-1.3 4-1.2 6" stroke="#2F4F3A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const features = [
  { Icon: IconLeaf,   title: 'Natural Ingredients', desc: 'Ethically sourced botanicals' },
  { Icon: IconHand,   title: 'Handmade',            desc: 'Crafted in small batches' },
  { Icon: IconDrop,   title: 'Chemical Free',       desc: 'No synthetic additives' },
  { Icon: IconRabbit, title: 'Cruelty Free',        desc: 'Never tested on animals' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#F4EDE0' }}>

      {/* ── Main hero block ── */}
      <div className="relative flex items-stretch min-h-[68vh] lg:min-h-[78vh]">

        {/* Left: copy */}
        <div
          className="relative z-20 w-full lg:w-[46%] flex items-center px-6 sm:px-10 lg:pl-14 xl:pl-24 lg:pr-8 py-20 lg:py-0"
          style={{ background: 'linear-gradient(to right, #F4EDE0 68%, transparent)' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[440px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="rule" />
              <span className="eyebrow">Natural Skincare · Est. 2019</span>
            </div>

            <h1
              className="font-heading font-normal text-charcoal leading-[1.02] tracking-[-0.01em] mb-6"
              style={{ fontSize: 'clamp(2.8rem, 5.2vw, 5rem)' }}
            >
              Skincare rooted<br />
              in <span className="italic text-forest">nature.</span>
            </h1>

            <p className="font-body text-[1rem] text-charcoal/55 leading-relaxed mb-9 max-w-[380px]">
              Handcrafted soaps, serums and home rituals — made with pure botanicals
              for skin that feels genuinely cared for.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <button className="btn-primary">Shop the Collection</button>
              <button className="btn-outline">Our Story</button>
            </div>

            {/* Quiet trust line — no floating cards */}
            <div className="flex items-center gap-4 text-charcoal/55">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} viewBox="0 0 12 12" className="w-3 h-3 fill-gold">
                    <path d="M6 0l1.5 4H12L8.5 6.5 10 11 6 8.5 2 11l1.5-4.5L0 4h4.5z"/>
                  </svg>
                ))}
              </div>
              <p className="font-body text-[12.5px]">
                <span className="font-semibold text-charcoal">4.9</span> from 10,000+ happy customers
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: portrait (desktop) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-[58%]"
        >
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#F4EDE0] to-transparent z-10 pointer-events-none" />
          <Img
            src="/images/hero.png"
            alt="Woman holding an Ecoveda handmade soap bar"
            className="w-full h-full"
            gradient="linear-gradient(135deg,#EFE8DD 0%,#bfd4b1 100%)"
          />
        </motion.div>

        {/* Mobile: image background */}
        <div className="lg:hidden absolute inset-0 z-0">
          <Img
            src="/images/hero.png"
            alt="Ecoveda natural skincare"
            className="w-full h-full"
            gradient="linear-gradient(135deg,#EFE8DD,#bfd4b1)"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F4EDE0]/90 via-[#F4EDE0]/65 to-[#F4EDE0]/92" />
        </div>
      </div>

      {/* ── Feature row ── */}
      <div className="relative z-10 bg-white border-t border-[#E5DCCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {features.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className={`flex items-center gap-3.5 py-6 lg:py-7 px-2 lg:px-6 ${
                  i !== 0 ? 'lg:border-l border-[#EFE7D8]' : ''
                }`}
              >
                <Icon />
                <div>
                  <p className="font-body font-semibold text-[12.5px] text-charcoal leading-tight">{title}</p>
                  <p className="font-body text-[11px] text-charcoal/45 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
