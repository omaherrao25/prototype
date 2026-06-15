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

export default function App() {
  return (
    <div className="min-h-screen bg-offwhite overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
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
