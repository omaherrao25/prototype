import { useState } from 'react'
import { motion } from 'framer-motion'
import { Leaf, ArrowRight, Mail, Phone, MapPin, Package, RefreshCw, CreditCard, Headphones } from 'lucide-react'

const SocialSVGs = {
  Instagram: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Facebook: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Pinterest: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.27-5.38 1.27-5.38s-.32-.65-.32-1.6c0-1.5.87-2.62 1.95-2.62.92 0 1.37.69 1.37 1.52 0 .93-.59 2.32-.9 3.6-.25 1.08.54 1.95 1.6 1.95 1.91 0 3.38-2.02 3.38-4.93 0-2.58-1.85-4.38-4.5-4.38-3.07 0-4.87 2.3-4.87 4.68 0 .93.36 1.92.8 2.46.09.11.1.2.07.31-.08.34-.26 1.08-.3 1.23-.05.2-.16.24-.37.14-1.4-.65-2.27-2.7-2.27-4.35 0-3.54 2.57-6.79 7.4-6.79 3.88 0 6.9 2.77 6.9 6.47 0 3.86-2.43 6.97-5.8 6.97-1.13 0-2.2-.59-2.57-1.28l-.7 2.6c-.25.96-.93 2.17-1.39 2.9.05.01.1.01.15.01z" />
    </svg>
  ),
  Youtube: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  ),
}

const serviceFeatures = [
  { Icon: Package, label: 'Free Shipping', sub: 'On orders above ₹999' },
  { Icon: CreditCard, label: 'Secure Payments', sub: 'UPI, Cards, Net Banking & more' },
  { Icon: RefreshCw, label: 'Easy Returns', sub: '7-day return policy' },
  { Icon: Headphones, label: '24/7 Support', sub: "We're here to help" },
]

const navCols = {
  Shop: ['All Products', 'Skincare Soaps', 'Cosmetics', 'Home Care', 'Gift Sets', 'New Arrivals'],
  Help: ['FAQs', 'Shipping Policy', 'Returns & Refunds', 'Terms & Conditions', 'Privacy Policy', 'Contact Us'],
  'About Us': ['Our Story', 'Ingredients', 'Blog', 'Sustainability', 'Careers'],
  'Contact Us': ['+91 98765 43210', 'hello@ecoveda.com', 'Mon–Sat, 10AM–7PM', 'Pan India & Worldwide Shipping'],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) { setSubscribed(true); setEmail('') }
  }

  return (
    <footer>
      {/* ── Service strip ── */}
      <div className="bg-offwhite border-y border-beige-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-5 lg:divide-x divide-beige-dark/50">
            {serviceFeatures.map(({ Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3.5 lg:px-6 lg:first:pl-0">
                <Icon size={22} className="text-forest flex-shrink-0" strokeWidth={1.3} />
                <div>
                  <p className="font-body font-semibold text-[13px] text-charcoal leading-tight">{label}</p>
                  <p className="font-body text-[11px] text-charcoal/45 mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="bg-charcoal text-beige/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">

            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-full bg-forest border border-sage/30 flex items-center justify-center">
                  <Leaf size={14} className="text-beige/80" />
                </div>
                <div>
                  <p className="font-heading text-xl font-medium text-beige">ecoveda</p>
                  <p className="font-body text-[8px] tracking-[0.2em] text-beige/35 uppercase">Natural · Handmade · Pure</p>
                </div>
              </div>
              <p className="font-body text-sm text-beige/45 leading-relaxed mb-5 max-w-[200px]">
                Ecoveda brings you the best of nature. Handmade with love for healthy, glowing skin &amp; a sustainable planet.
              </p>
              <div className="flex items-center gap-1.5 mb-5">
                {Object.entries(SocialSVGs).map(([name, Icon]) => (
                  <motion.a
                    key={name}
                    href="#"
                    whileHover={{ scale: 1.12, y: -2 }}
                    className="w-8 h-8 rounded-full bg-white/8 hover:bg-sage/25 border border-white/8 hover:border-sage/30 flex items-center justify-center text-beige/50 hover:text-sage transition-all duration-200"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
              <div className="space-y-1.5">
                {[
                  [Phone, '+91 98765 43210'],
                  [Mail, 'hello@ecoveda.com'],
                  [MapPin, 'Mumbai, India 400001'],
                ].map(([Icon, text]) => (
                  <div key={text} className="flex items-center gap-2 text-beige/35 text-[11px] font-body">
                    <Icon size={11} className="flex-shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            {Object.entries(navCols).map(([heading, links]) => (
              <div key={heading} className="col-span-1">
                <h4 className="font-body font-bold text-beige/85 text-xs tracking-[0.14em] uppercase mb-4">{heading}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="font-body text-[12px] text-beige/40 hover:text-beige/75 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="col-span-2 lg:col-span-1">
              <h4 className="font-body font-bold text-beige/85 text-xs tracking-[0.14em] uppercase mb-4">Stay Connected</h4>
              <p className="font-body text-[12px] text-beige/40 mb-4 leading-relaxed">
                Get exclusive offers &amp; skincare tips.
              </p>
              {subscribed ? (
                <div className="bg-sage/20 border border-sage/30 rounded-lg px-3 py-2.5 text-sage text-xs font-body">
                  ✓ Subscribed! Welcome.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2.5">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-white/8 border border-white/10 text-beige placeholder:text-beige/25 text-xs font-body rounded-lg px-3 py-2.5 outline-none focus:border-sage/50 transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-1.5 bg-sage hover:bg-sage-dark text-white text-xs font-body font-semibold py-2.5 rounded-lg transition-colors"
                  >
                    SUBSCRIBE <ArrowRight size={12} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-[11px] text-beige/28 text-center sm:text-left">
              © 2024 Ecoveda. All rights reserved. Handmade in India.
            </p>
            {/* Payment icons */}
            <div className="flex items-center gap-2">
              {['VISA', 'MC', 'UPI', 'RuPay'].map((pay) => (
                <div key={pay} className="h-6 px-2.5 border border-white/12 rounded-[2px] flex items-center justify-center">
                  <span className="font-body text-[9px] font-semibold text-beige/45 tracking-wide">{pay}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
