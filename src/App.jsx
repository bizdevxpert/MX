import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaUserMd, 
  FaShieldAlt, 
  FaRegLightbulb, 
  FaRegChartBar, 
  FaRegClock,
  FaCheck,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaBars,
  FaTimes
} from 'react-icons/fa';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import InvestmentPlans from './components/InvestmentPlans';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Benefits />
      <InvestmentPlans />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
