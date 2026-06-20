import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // We want the new page to instantly start from the top, no animation.
    const scrollOptions = { top: 0, left: 0, behavior: 'auto' }

    window.scrollTo(scrollOptions)

    // Fallback: sometimes the wrapper div handles the scroll instead of window
    const wrapper = document.querySelector('.overflow-x-hidden')
    if (wrapper) wrapper.scrollTo(scrollOptions)

    setTimeout(() => {
      window.scrollTo(scrollOptions)
      if (wrapper) wrapper.scrollTo(scrollOptions)
    }, 10)
  }, [pathname])

  return null
}
