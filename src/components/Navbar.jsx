import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, User, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home' },
  { label: 'Products' },
  { label: 'About' },
  { label: 'Contact' },
]

const EcovedaLogo = ({ compact = false }) => (
  <a href="#" className="flex items-center gap-2.5 cursor-pointer select-none group">
    <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-[#2F4F3A] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    </div>
    <div className="flex flex-col">
      {compact ? (
        <span className="font-heading text-[20px] font-medium text-charcoal/90 leading-none tracking-wide">
          Ecoveda
        </span>
      ) : (
        <>
          <span className="font-heading text-[26px] font-medium text-charcoal leading-none tracking-wide">
            Ecoveda
          </span>
          <span className="font-sans text-[8.5px] font-bold tracking-[0.35em] text-charcoal/45 uppercase mt-1">pure botanicals</span>
        </>
      )}
    </div>
  </a>
)

const IconPill = ({ isScrolled, cartCount }) => (
  <div className={`flex items-center transition-all duration-500 ease-in-out ${
    isScrolled ? 'gap-2 px-2' : 'bg-white/50 backdrop-blur-md rounded-full p-1.5 px-3 gap-2 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-white/40'
  }`}>
    <button className="p-2 text-charcoal/70 hover:text-charcoal transition-colors">
      <User size={19} strokeWidth={1.5} />
    </button>
    <button className="relative p-2 text-charcoal/70 hover:text-charcoal transition-colors">
      <ShoppingBag size={19} strokeWidth={1.5} />
      {cartCount > 0 && (
        <span className="absolute top-1 right-0 w-[15px] h-[15px] bg-[#2F4F3A] text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none shadow-sm">
          {cartCount}
        </span>
      )}
    </button>
  </div>
)

export default function Navbar({ activeTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const cartCount = 2

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const highlightedBg = isScrolled ? '#EFE6D5' : (activeTheme?.bgDark || '#EFEBE9')
  const highlightedText = isScrolled ? '#2F4F3A' : (activeTheme?.text || '#4E342E')

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 pt-8 px-4 sm:px-6 lg:px-8 transition-all duration-500 pointer-events-none"
    >
      {/* ===== UNSCROLLED LAYOUT ===== */}
      <div 
        className="max-w-7xl mx-auto pointer-events-auto transition-all duration-500"
        style={{ 
          opacity: isScrolled ? 0 : 1, 
          pointerEvents: isScrolled ? 'none' : 'auto',
          transform: isScrolled ? 'translateY(-10px)' : 'translateY(0)'
        }}
      >
        <nav className="flex items-center relative h-[50px]">
          {/* Brand left */}
          <div className="flex-shrink-0">
            <EcovedaLogo />
          </div>

          {/* Pill 1: Links — centered */}
          <div className="hidden xl:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center bg-white/50 backdrop-blur-md rounded-full p-1.5 gap-1 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-white/40">
              {navLinks.map((link, idx) => {
                const isHighlighted = idx === 0
                return (
                  <a
                    key={link.label}
                    href="#"
                    className={`px-6 py-2.5 rounded-full text-[13.5px] font-body font-semibold transition-all duration-500 ${
                      !isHighlighted ? 'text-charcoal/70 hover:text-charcoal' : ''
                    }`}
                    style={isHighlighted ? { backgroundColor: highlightedBg, color: highlightedText } : {}}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Pill 2: Icons — positioned far right (over the hero bg square) */}
          <div className="hidden xl:flex ml-auto" style={{ marginRight: '-2%' }}>
            <IconPill isScrolled={false} cartCount={cartCount} />
          </div>

          {/* Mobile toggle */}
          <div className="xl:hidden ml-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2.5 text-charcoal/70 hover:text-charcoal rounded-full bg-white/40 backdrop-blur-md border border-white/30 transition-all duration-200"
            >
              {isMobileOpen ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
            </motion.button>
          </div>
        </nav>
      </div>

      {/* ===== SCROLLED LAYOUT (merged pill at center) ===== */}
      <div
        className="max-w-7xl mx-auto pointer-events-auto transition-all duration-500 absolute top-8 left-0 right-0 px-4 sm:px-6 lg:px-8"
        style={{ 
          opacity: isScrolled ? 1 : 0, 
          pointerEvents: isScrolled ? 'auto' : 'none',
          transform: isScrolled ? 'translateY(0)' : 'translateY(10px)'
        }}
      >
        <nav className="flex items-center justify-center h-[50px]">
          <div className="hidden xl:flex items-center bg-[#FDFBF7]/95 backdrop-blur-xl shadow-sm rounded-full p-1.5 gap-1 border border-beige-dark/20">
            {/* Logo compact inside merged pill */}
            <div className="px-3 pr-1 flex items-center">
              <EcovedaLogo compact />
            </div>

            <div className="w-px h-6 bg-charcoal/10 mx-1" />

            {/* Links */}
            {navLinks.map((link, idx) => {
              const isHighlighted = idx === 0
              return (
                <a
                  key={link.label}
                  href="#"
                  className={`px-5 py-2.5 rounded-full text-[13px] font-body font-semibold transition-all duration-500 ${
                    !isHighlighted ? 'text-charcoal/70 hover:text-charcoal' : ''
                  }`}
                  style={isHighlighted ? { backgroundColor: '#EFE6D5', color: '#2F4F3A' } : {}}
                >
                  {link.label}
                </a>
              )
            })}

            <div className="w-px h-6 bg-charcoal/10 mx-1" />

            {/* Icons */}
            <button className="p-2 text-charcoal/70 hover:text-charcoal transition-colors">
              <User size={18} strokeWidth={1.5} />
            </button>
            <button className="relative p-2 text-charcoal/70 hover:text-charcoal transition-colors mr-1">
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-0 w-[15px] h-[15px] bg-[#2F4F3A] text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile toggle for scrolled */}
          <div className="xl:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2.5 text-charcoal/70 hover:text-charcoal rounded-full bg-[#FDFBF7]/95 backdrop-blur-xl shadow-sm border border-beige-dark/20 transition-all duration-200"
            >
              {isMobileOpen ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full mt-4 px-4 xl:hidden pointer-events-auto"
          >
            <div className="bg-[#FDFBF7]/95 backdrop-blur-xl border border-beige-dark/20 rounded-3xl p-5 shadow-xl">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a key={link.label} href="#" className="block py-3 px-4 rounded-xl hover:bg-beige-dark/10 font-body font-medium text-charcoal/80">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
