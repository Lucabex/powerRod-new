import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Sectors from './pages/Sectors.jsx';
import './App.css'

import  './css/landing.css'

function App() {
  
  return (
    <>
     <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/sectors" element={<Sectors />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
