import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home' },
  { label: 'Shop' },
  { label: 'Skincare' },
  { label: 'Cosmetics' },
  { label: 'Home Care' },
  { label: 'Collections' },
  { label: 'About Us' },
  { label: 'Contact Us' },
]

const EcovedaLogo = () => (
  <a href="#" className="flex items-center gap-2.5 cursor-pointer select-none group">
    <div className="relative">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#2F4F3A" />
        <path d="M16 7 C19.5 11 21 17 16 25 C11 17 12.5 11 16 7Z" fill="#EFE8DD" opacity="0.9" />
        <path d="M16 7 L16 25" stroke="#6E8B61" strokeWidth="0.8" opacity="0.5" />
        <path d="M12 16 C14 15 18 15 20 16" stroke="#EFE8DD" strokeWidth="0.7" opacity="0.5" />
      </svg>
    </div>
    <div>
      <p className="font-heading text-2xl font-medium text-charcoal leading-none tracking-wide">ecoveda</p>
      <p className="font-body text-[9px] tracking-[0.22em] text-charcoal/40 uppercase leading-tight">Natural · Handmade · Pure</p>
    </div>
  </a>
)

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const cartCount = 2

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-card border-b border-beige-dark/30'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px] lg:h-[76px]">

          <EcovedaLogo />

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="relative text-[12px] font-body font-medium tracking-[0.04em] text-charcoal/65 hover:text-forest transition-colors duration-300 py-1 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-forest group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-0.5">
            {[Search, Heart, User].map((Icon, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                className="hidden sm:flex p-2.5 text-charcoal/55 hover:text-charcoal rounded-full hover:bg-offwhite transition-all duration-200"
              >
                <Icon size={18} strokeWidth={1.6} />
              </motion.button>
            ))}

            {/* Cart with badge */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              className="relative p-2.5 text-charcoal/55 hover:text-charcoal rounded-full hover:bg-offwhite transition-all duration-200"
            >
              <ShoppingBag size={18} strokeWidth={1.6} />
              {cartCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-[17px] h-[17px] bg-forest text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              )}
            </motion.button>

            {/* Mobile menu */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="xl:hidden p-2.5 text-charcoal/55 hover:text-charcoal rounded-full hover:bg-offwhite transition-all duration-200 ml-1"
            >
              {isMobileOpen ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden overflow-hidden bg-white border-t border-beige-dark/30"
          >
            <div className="px-5 py-5 space-y-0.5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href="#"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center justify-between py-3 border-b border-beige-dark/20 text-[14px] font-body font-medium text-charcoal/70 hover:text-forest transition-colors"
                >
                  {link.label}
                  <span className="text-charcoal/25 text-xs">›</span>
                </motion.a>
              ))}
              <div className="flex items-center gap-3 pt-4">
                {[Search, Heart, User].map((Icon, i) => (
                  <button key={i} className="p-2 text-charcoal/40 hover:text-forest transition-colors">
                    <Icon size={19} strokeWidth={1.5} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
