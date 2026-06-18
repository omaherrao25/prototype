import { useState } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CollectionsSection from './components/CollectionsSection'
import BestsellersSection from './components/BestsellersSection'
import ComingSoonSection from './components/ComingSoonSection'
import WhyChooseSection from './components/WhyChooseSection'
import TestimonialsSection from './components/TestimonialsSection'
import InstagramSection from './components/InstagramSection'
import BlogSection from './components/BlogSection'
import OfferSection from './components/OfferSection'
import Footer from './components/Footer'
import { soaps } from './data/soaps'

export default function App() {
  const [activeTheme, setActiveTheme] = useState(soaps[0])

  return (
    <div className="min-h-screen bg-offwhite overflow-x-hidden">
      <AnnouncementBar />
      <Navbar activeTheme={activeTheme} />
      <main>
        <HeroSection activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
        <CollectionsSection />
        <BestsellersSection />
        <ComingSoonSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <InstagramSection />
        <BlogSection />
        <OfferSection />
      </main>
      <Footer />
    </div>
  )
}
