import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, ArrowRight, Mail, Phone, MapPin, Package, RefreshCw, CreditCard, Headphones, ChevronDown } from 'lucide-react'
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from 'react-icons/fa'

const SocialSVGs = {
  Instagram: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Facebook: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Pinterest: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.27-5.38 1.27-5.38s-.32-.65-.32-1.6c0-1.5.87-2.62 1.95-2.62.92 0 1.37.69 1.37 1.52 0 .93-.59 2.32-.9 3.6-.25 1.08.54 1.95 1.6 1.95 1.91 0 3.38-2.02 3.38-4.93 0-2.58-1.85-4.38-4.5-4.38-3.07 0-4.87 2.3-4.87 4.68 0 .93.36 1.92.8 2.46.09.11.1.2.07.31-.08.34-.26 1.08-.3 1.23-.05.2-.16.24-.37.14-1.4-.65-2.27-2.7-2.27-4.35 0-3.54 2.57-6.79 7.4-6.79 3.88 0 6.9 2.77 6.9 6.47 0 3.86-2.43 6.97-5.8 6.97-1.13 0-2.2-.59-2.57-1.28l-.7 2.6c-.25.96-.93 2.17-1.39 2.9.05.01.1.01.15.01z" />
    </svg>
  ),
}

const serviceFeatures = [
  { Icon: Package, label: 'Free Shipping', sub: 'On orders above ₹1499' },
  { Icon: CreditCard, label: 'Secure Payments', sub: 'UPI, Cards, Net Banking & more' },
  { Icon: RefreshCw, label: 'Easy Returns', sub: '7-day return policy' },
  { Icon: Headphones, label: '24/7 Support', sub: "We're always here to help" },
]

const footerLinks = [
  {
    heading: 'Explore',
    links: [
      { label: 'Home', path: '/' },
      { label: 'Shop', path: '/shop' },
    ]
  },
  {
    heading: 'Information',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Contact', path: '/contact' },
    ]
  }
]

const paymentIcons = [
  { name: 'Visa', Icon: FaCcVisa },
  { name: 'Mastercard', Icon: FaCcMastercard },
  { name: 'Amex', Icon: FaCcAmex },
  { name: 'PayPal', Icon: FaCcPaypal },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (heading) => {
    setOpenAccordion(openAccordion === heading ? null : heading)
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) { setSubscribed(true); setEmail('') }
  }

  return (
    <footer className="relative z-10 -mt-12 overflow-hidden bg-[#314D3D] text-[#F6F1E9] rounded-t-[30px] sm:rounded-t-[60px] lg:rounded-t-[80px]">
      {/* ── Service strip ── */}
      <div className="border-y border-[#F6F1E9]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 lg:divide-x divide-[#F6F1E9]/10">
            {serviceFeatures.map(({ Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-4 lg:px-6 lg:first:pl-0">
                <div className="w-10 h-10 rounded-full bg-[#F6F1E9]/5 flex flex-shrink-0 items-center justify-center">
                  <Icon size={18} className="text-[#9C795C]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body font-bold text-[12.5px] sm:text-[13px] uppercase tracking-[0.12em] text-[#F6F1E9] leading-tight mb-0.5">{label}</p>
                  <p className="font-body text-[13.5px] sm:text-[14px] text-[#F6F1E9]/60">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">

          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#F6F1E9]/10 border border-[#F6F1E9]/20 flex items-center justify-center">
                <Leaf size={18} className="text-[#F6F1E9]" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <p className="font-heading text-3xl font-normal tracking-wide text-[#F6F1E9]">ecoveda</p>
                <p className="font-body text-[9px] tracking-[0.25em] text-[#9C795C] uppercase">Handcrafted Wellness</p>
              </div>
            </div>
            <p className="font-body text-[14.5px] text-[#F6F1E9]/60 leading-relaxed mb-6 max-w-[280px]">
              Ecoveda brings you the best of nature. Handmade with love for healthy, glowing skin &amp; a sustainable planet.
            </p>
            <div className="flex items-center gap-3 mb-8">
              {Object.entries(SocialSVGs).map(([name, Icon]) => (
                <motion.a
                  key={name}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-11 h-11 rounded-full bg-[#F6F1E9]/5 hover:bg-[#9C795C] border border-[#F6F1E9]/10 hover:border-[#9C795C] flex items-center justify-center text-[#F6F1E9]/70 hover:text-white transition-all duration-300 min-w-touch min-h-touch"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
            <div className="space-y-4 w-full flex flex-col items-center sm:items-start">
              {[
                [Phone, '+91 9876543210'],
                [Mail, 'ecoveda@gmail.com'],
                [MapPin, 'Nashik, India 422009'],
              ].map(([Icon, text]) => (
                <div key={text} className="flex items-center gap-3 text-[#F6F1E9]/60 text-[13.5px] font-body min-h-[24px]">
                  <Icon size={16} className="flex-shrink-0" strokeWidth={1.5} />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Nav columns (Accordion on mobile) */}
          {footerLinks.map(({ heading, links }) => (
            <div key={heading} className="col-span-1 border-b border-[#F6F1E9]/10 sm:border-none pb-4 sm:pb-0">
              <button
                onClick={() => toggleAccordion(heading)}
                className="w-full flex items-center justify-between sm:hidden py-2"
              >
                <h4 className="font-body font-bold text-[#F6F1E9]/90 text-[12px] tracking-[0.16em] uppercase">{heading}</h4>
                <motion.div
                  animate={{ rotate: openAccordion === heading ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} className="text-[#F6F1E9]/60" />
                </motion.div>
              </button>

              {/* Desktop heading */}
              <h4 className="hidden sm:block font-body font-bold text-[#F6F1E9]/90 text-[11px] tracking-[0.16em] uppercase mb-6">{heading}</h4>

              <AnimatePresence initial={false}>
                {(openAccordion === heading || window.innerWidth >= 640) && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 sm:space-y-3.5 overflow-hidden pt-2 sm:pt-0"
                  >
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link to={link.path} className="font-body text-[14px] sm:text-[13.5px] text-[#F6F1E9]/50 hover:text-[#9C795C] sm:hover:pl-1 transition-all duration-300 block py-1 sm:py-0">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 mt-4 sm:mt-0 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-body font-bold text-[#F6F1E9]/90 text-[12px] sm:text-[11px] tracking-[0.16em] uppercase mb-4 sm:mb-6">Stay Connected</h4>
            <p className="font-body text-[14px] sm:text-[13.5px] text-[#F6F1E9]/60 mb-6 leading-relaxed max-w-[300px]">
              Join our newsletter for exclusive offers &amp; skincare rituals.
            </p>
            {subscribed ? (
              <div className="bg-[#9C795C]/20 border border-[#9C795C]/40 rounded-full px-5 py-4 text-[#F6F1E9] text-[14px] font-body text-center w-full max-w-[320px]">
                ✓ Welcome to Ecoveda!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3 w-full max-w-[320px]">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full min-h-[48px] bg-[#F6F1E9]/5 border border-[#F6F1E9]/15 text-[#F6F1E9] placeholder:text-[#F6F1E9]/40 text-[14px] font-body rounded-full px-6 py-3.5 outline-none focus:border-[#9C795C] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 bg-[#9C795C] hover:bg-[#85654C] text-white text-[12px] uppercase tracking-[0.15em] font-body font-bold py-3.5 rounded-full transition-colors"
                >
                  Subscribe <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[#F6F1E9]/10 bg-[#253A2E]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[12px] text-[#F6F1E9]/50 text-center sm:text-left">
            © {new Date().getFullYear()} Ecoveda. All rights reserved. Handmade in India.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-4 sm:gap-3">
            {paymentIcons.map(({ name, Icon }) => (
              <div key={name} className="flex items-center justify-center text-[#F6F1E9]/40 hover:text-[#F6F1E9]/90 transition-all duration-300 cursor-pointer" aria-label={name} title={name}>
                <Icon size={28} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
