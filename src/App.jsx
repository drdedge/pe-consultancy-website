import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

export default function App() {
  const location = useLocation()
  const isPortfolioPage = location.pathname.startsWith('/portfolio')

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:caseId" element={<Portfolio />} />
      </Routes>
      {!isPortfolioPage && <Footer />}
    </>
  )
}
