import { useState } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer'
import { soaps } from './data/soaps'

export default function App() {
  const [activeTheme, setActiveTheme] = useState(soaps[0])

  return (
    <div className="min-h-screen bg-offwhite overflow-x-hidden">
      <Navbar activeTheme={activeTheme} />
      <Home activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
      <Footer />
    </div>
  )
}
