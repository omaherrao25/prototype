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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

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
            className={`px-5 py-2 rounded-full text-[13.5px] font-body font-medium transition-colors duration-300 ${!activeHighlight ? 'text-charcoal/70 hover:text-charcoal hover:bg-[#EFE6DF]' : ''
              }`}
            style={activeHighlight ? { backgroundColor: highlightedBg, color: highlightedText } : {}}
          >
            {link.label}
          </Link>
        )
      })}
    </>
  )

  const isAccountActive = location.pathname.startsWith('/account');
  const isCartActive = location.pathname === '/cart';

  const iconsGroup = (
    <>
      <Link
        to="/account"
        className={`p-2 rounded-full transition-colors block text-charcoal/70 hover:text-charcoal ${!isAccountActive ? 'hover:bg-[#EFE6DF]' : ''}`}
        style={isAccountActive ? { backgroundColor: '#EFE6DF', color: highlightedText } : {}}
      >
        <User size={19} strokeWidth={1.5} />
      </Link>
      <Link
        to="/cart"
        className={`relative p-2 rounded-full transition-colors block text-charcoal/70 hover:text-charcoal ${!isCartActive ? 'hover:bg-[#EFE6DF]' : ''}`}
        style={isCartActive ? { backgroundColor: '#EFE6DF', color: highlightedText } : {}}
      >
        <ShoppingBag size={19} strokeWidth={1.5} />
        {cartCount > 0 && (
          <span className="absolute top-1 right-0 w-[15px] h-[15px] bg-[#2F4F3A] text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none shadow-sm">
            {cartCount}
          </span>
        )}
      </Link>
    </>
  )

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 pt-4 sm:pt-6 pb-2 px-4 sm:px-6 lg:px-8 pointer-events-none"
    >
      {/* Mobile Scrolled Background */}
      <div 
        className={`absolute inset-x-4 sm:inset-x-6 top-4 sm:top-6 h-[60px] z-0 bg-white/60 backdrop-blur-xl border border-white/50 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-500 xl:hidden pointer-events-auto ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} 
      />

      <nav className="max-w-7xl mx-auto h-[60px] pointer-events-auto relative z-50">

        {/* Mobile Logo (Mobile Only) */}
        <div className="absolute left-4 sm:left-6 xl:hidden z-50 top-1/2 -translate-y-1/2 flex items-center">
          <EcovedaLogo compact={isScrolled} />
        </div>

        {/* Mobile toggle & Icons (Mobile Only) */}
        <div className="absolute right-4 sm:right-6 xl:hidden z-50 top-1/2 -translate-y-1/2 flex items-center gap-3">
          <Link
            to="/cart"
            className="relative p-2 text-charcoal/80 hover:text-charcoal bg-white/50 backdrop-blur-md rounded-full shadow-sm border border-white/40"
          >
            <ShoppingBag size={20} strokeWidth={1.6} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#2F4F3A] text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none shadow-sm">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2.5 text-charcoal/80 hover:text-charcoal rounded-full bg-white/50 backdrop-blur-md border border-white/40 shadow-sm transition-all"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMobileOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileOpen ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
              </motion.div>
            </AnimatePresence>
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

      {/* Cinematic Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 xl:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[84px] sm:top-[92px] right-4 sm:right-6 w-[240px] z-40 bg-white/95 backdrop-blur-3xl xl:hidden flex flex-col p-6 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-white/60 pointer-events-auto origin-top-right"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileOpen(false)}
                      className="font-heading text-2xl text-charcoal/80 hover:text-charcoal hover:translate-x-1.5 transition-all duration-300 block tracking-wide"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="flex flex-col gap-5 mt-5 pt-5 border-t border-charcoal/5"
              >
                <Link
                  to="/account"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center gap-3 text-charcoal/70 hover:text-charcoal transition-colors"
                >
                  <User size={18} strokeWidth={1.5} />
                  <span className="font-body text-[13px] font-medium tracking-wide">My Account</span>
                </Link>
                <Link
                  to="/shop"
                  onClick={() => setIsMobileOpen(false)}
                  className="font-body text-[11px] font-bold uppercase tracking-widest text-center text-white bg-forest px-6 py-2.5 rounded-full shadow-luxury"
                >
                  Shop Now
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
