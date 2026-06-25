import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, User, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const EcovedaLogo = ({ compact }) => (
  <Link to="/" className="flex items-center gap-2.5 cursor-pointer select-none group">
    <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-[#2F4F3A] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="font-heading text-[22px] font-medium text-charcoal leading-none tracking-wide">
        Ecoveda
      </span>
      <div className={`overflow-hidden transition-all duration-[600ms] ease-[0.22,1,0.36,1] ${compact ? 'max-h-0 opacity-0 mt-0' : 'max-h-[20px] opacity-100 mt-0.5'}`}>
        <span className="font-sans text-[8px] font-bold tracking-[0.35em] text-charcoal/45 uppercase block">pure botanicals</span>
      </div>
    </div>
  </Link>
)

export default function Navbar({ activeTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const cartCount = 0

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isLightPages = ['/shop', '/about', '/contact'].includes(location.pathname)
  const highlightedBg = isLightPages ? '#EFE6D5' : (isScrolled ? '#EFE6D5' : (activeTheme?.bgDark || '#EFEBE9'))
  const highlightedText = isLightPages ? '#2F4F3A' : (isScrolled ? '#2F4F3A' : (activeTheme?.text || '#4E342E'))

  const linksGroup = (
    <>
      {navLinks.map((link) => {
        const activeHighlight = location.pathname === link.path;
        return (
          <Link
            key={link.label}
            to={link.path}
            className={`px-5 py-2 rounded-full text-[13.5px] font-body font-medium transition-colors duration-500 ${!activeHighlight ? 'text-charcoal/70 hover:text-charcoal' : ''
              }`}
            style={activeHighlight ? { backgroundColor: highlightedBg, color: highlightedText } : {}}
          >
            {link.label}
          </Link>
        )
      })}
    </>
  )

  const iconsGroup = (
    <>
      <Link to="/account" className="p-2 text-charcoal/70 hover:text-charcoal transition-colors block">
        <User size={19} strokeWidth={1.5} />
      </Link>
      <button className="relative p-2 text-charcoal/70 hover:text-charcoal transition-colors">
        <ShoppingBag size={19} strokeWidth={1.5} />
        {cartCount > 0 && (
          <span className="absolute top-1 right-0 w-[15px] h-[15px] bg-[#2F4F3A] text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none shadow-sm">
            {cartCount}
          </span>
        )}
      </button>
    </>
  )

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 pt-6 px-4 sm:px-6 lg:px-8 pointer-events-none"
    >
      <nav className="max-w-7xl mx-auto h-[60px] pointer-events-auto relative">

        {/* Mobile toggle */}
        <div className="absolute right-4 sm:right-6 lg:right-8 xl:hidden z-50 mt-1">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2.5 text-charcoal/70 hover:text-charcoal rounded-full bg-white/50 backdrop-blur-md border border-white/40 shadow-sm transition-all"
          >
            {isMobileOpen ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
          </button>
        </div>

        {/* Desktop Navbar - Pure CSS Transitions for absolute perfection */}
        <div className="hidden xl:block w-full h-full relative">

          {/* Logo */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 transition-all duration-[700ms] ease-[0.22,1,0.36,1] z-30 flex items-center ${isScrolled ? 'left-[calc(50%-320px)]' : 'left-0'
              }`}
          >
            <EcovedaLogo compact={isScrolled} />
            {/* Left Divider (Fade in when scrolled) */}
            <div className={`absolute right-[20px] top-1/2 -translate-y-1/2 w-px h-6 bg-charcoal/10 transition-opacity duration-[700ms] ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
          </div>

          {/* Center Links Pill Wrapper (Also acts as the merged background container) */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 transition-all duration-[700ms] ease-[0.22,1,0.36,1] flex items-center z-20 ${isScrolled ? 'left-[calc(50%-8px)]' : 'left-1/2'
              } -translate-x-1/2`}
          >
            <div
              className={`transition-all duration-[700ms] ease-[0.22,1,0.36,1] flex items-center rounded-full relative ${isScrolled
                ? 'bg-[#FDFBF7]/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/60 p-1.5 pl-[170px] pr-[125px]'
                : 'bg-white/50 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-white/40 p-1.5 pl-1.5 pr-1.5'
                }`}
            >

              {/* Links Group */}
              <div className="flex items-center gap-1 z-10 px-2">
                {linksGroup}
              </div>

            </div>
          </div>

          {/* Right Icons Pill */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 transition-all duration-[700ms] ease-[0.22,1,0.36,1] flex items-center z-30 ${isScrolled ? 'left-[calc(50%+200px)]' : 'left-[calc(88%-90px)]'
              }`}
          >
            {/* Right Divider (Fade in when scrolled) */}
            <div className={`absolute left-[-5px] top-1/2 -translate-y-1/2 w-px h-6 bg-charcoal/10 transition-opacity duration-[700ms] ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />

            <div
              className={`transition-all duration-[700ms] ease-[0.22,1,0.36,1] flex items-center gap-2 ${isScrolled
                ? 'p-1.5 px-3 bg-transparent shadow-none border-transparent'
                : 'bg-white/50 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] rounded-full p-1.5 px-3 border border-white/40'
                }`}
            >
              {iconsGroup}
            </div>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
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
                  <Link key={link.label} to={link.path} onClick={() => setIsMobileOpen(false)} className="block py-3 px-4 rounded-xl hover:bg-beige-dark/10 font-body font-medium text-charcoal/80">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
