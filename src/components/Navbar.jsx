import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, User, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home' },
  { label: 'Products' },
  { label: 'About' },
  { label: 'Contact' },
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

export default function Navbar({ activeTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const cartCount = 2

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlighted tab styles
  const highlightedBg = isScrolled ? '#EFE6D5' : (activeTheme?.bgDark || '#EFEBE9');
  const highlightedText = isScrolled ? '#2F4F3A' : (activeTheme?.text || '#4E342E');

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 pt-6 px-4 sm:px-6 lg:px-8 transition-all duration-500 pointer-events-none"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Branding */}
        <EcovedaLogo />

        {/* Desktop nav container */}
        <div className={`hidden xl:flex items-center transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-[#FDFBF7]/95 backdrop-blur-xl shadow-sm rounded-full p-1.5 gap-2 border border-beige-dark/20' 
            : 'gap-4'
        }`}>
          
          {/* Pill 1: Links */}
          <div className={`flex items-center transition-all duration-500 ease-in-out ${
            isScrolled ? 'gap-1' : 'bg-white/40 backdrop-blur-md rounded-full p-1.5 gap-1 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-white/30'
          }`}>
            {navLinks.map((link, idx) => {
              const isHighlighted = idx === 0;
              return (
                <a
                  key={link.label}
                  href="#"
                  className={`px-5 py-2 rounded-full text-[13.5px] font-body font-medium transition-colors duration-500 ${
                    !isHighlighted ? 'text-charcoal/70 hover:text-charcoal' : ''
                  }`}
                  style={isHighlighted ? { backgroundColor: highlightedBg, color: highlightedText } : {}}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Pill 2: Icons */}
          <div className={`flex items-center transition-all duration-500 ease-in-out ${
            isScrolled ? 'gap-2 px-3' : 'bg-white/40 backdrop-blur-md rounded-full p-1.5 px-3 gap-2 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-white/30'
          }`}>
            <button className="p-2 text-charcoal/70 hover:text-charcoal transition-colors">
              <User size={19} strokeWidth={1.5} />
            </button>
            <button className="relative p-2 text-charcoal/70 hover:text-charcoal transition-colors">
              <ShoppingBag size={19} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-0 w-[15px] h-[15px] bg-[#2F4F3A] text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>

        {/* Mobile menu toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`xl:hidden p-2.5 text-charcoal/70 hover:text-charcoal rounded-full backdrop-blur-md transition-all duration-200 border ${
            isScrolled ? 'bg-[#FDFBF7]/95 shadow-sm border-beige-dark/20' : 'bg-white/40 border-white/30'
          }`}
        >
          {isMobileOpen ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
        </motion.button>
      </nav>

      {/* Mobile menu dropdown */}
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
