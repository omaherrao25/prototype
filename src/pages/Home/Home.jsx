import HeroSection from './sections/HeroSection'
import WhyEcovedaSection from './sections/WhyEcovedaSection'
import BestsellersSection from './sections/BestsellersSection'
import LifestyleBannerSection from './sections/LifestyleBannerSection'
import ComingSoonSection from './sections/ComingSoonSection'
import TestimonialsSection from './sections/TestimonialsSection'
import OfferSection from './sections/OfferSection'

export default function Home({ activeTheme, setActiveTheme }) {
  return (
    <main>
      <HeroSection activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
      <WhyEcovedaSection />
      <BestsellersSection />
      <LifestyleBannerSection />
      <ComingSoonSection />
      <TestimonialsSection />
      <OfferSection />
    </main>
  )
}
