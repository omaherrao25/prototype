import { motion } from 'framer-motion'
import HeroSection from './sections/HeroSection'
import OurStorySection from './sections/OurStorySection'
import PhilosophySection from './sections/PhilosophySection'
import IngredientsSection from './sections/IngredientsSection'
import CraftsmanshipSection from './sections/CraftsmanshipSection'
import LifestyleBannerSection from './sections/LifestyleBannerSection'
import SustainabilitySection from './sections/SustainabilitySection'
import CommunitySection from './sections/CommunitySection'
import FAQSection from './sections/FAQSection'
import CTASection from './sections/CTASection'

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="bg-white min-h-screen"
    >
      <HeroSection />
      <OurStorySection />
      <PhilosophySection />
      <IngredientsSection />
      <CraftsmanshipSection />
      <LifestyleBannerSection />
      <SustainabilitySection />
      <CommunitySection />
      <FAQSection />
      <CTASection />
    </motion.main>
  )
}
