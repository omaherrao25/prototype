import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Disable browser's default scroll restoration to prevent it from fighting our custom logic
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const resetScroll = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      
      const wrapper = document.querySelector('.overflow-x-hidden')
      if (wrapper) wrapper.scrollTop = 0
    }

    // Fire immediately
    resetScroll()

    // Fire again slightly after paint to ensure it sticks
    const timer1 = setTimeout(resetScroll, 10)
    const timer2 = setTimeout(resetScroll, 50)
    const timer3 = setTimeout(resetScroll, 100)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [pathname])

  return null
}
