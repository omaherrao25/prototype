import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Product from './pages/Product/Product'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Account from './pages/Account/Account'
import Footer from './components/Footer'
import Cart from './pages/Cart/Cart'
import { soaps } from './data/soaps'

import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [activeTheme, setActiveTheme] = useState(soaps[0])

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-offwhite overflow-x-hidden">
        <Navbar activeTheme={activeTheme} />
        <Routes>
          <Route path="/" element={<Home activeTheme={activeTheme} setActiveTheme={setActiveTheme} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/account/*" element={<Account />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
