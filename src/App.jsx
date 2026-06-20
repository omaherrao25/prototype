import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Product from './pages/Product/Product'
import Footer from './components/Footer'
import { soaps } from './data/soaps'

export default function App() {
  const [activeTheme, setActiveTheme] = useState(soaps[0])

  return (
    <Router>
      <div className="min-h-screen bg-offwhite overflow-x-hidden">
        <Navbar activeTheme={activeTheme} />
        <Routes>
          <Route path="/" element={<Home activeTheme={activeTheme} setActiveTheme={setActiveTheme} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
