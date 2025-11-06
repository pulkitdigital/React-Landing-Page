import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import TrustedBy from './components/TrustedBy.jsx'
import StatsSection from './components/StatsSection.jsx'
import WhyBeBeyond from './components/WhyBebeyond.jsx'
import OurWork from './components/OurWork.jsx'
import PremiumFeatures from './components/PremiumFeatures.jsx'
import DifferenceSection from './components/DifferenceSection.jsx'
import Pricing from './components/Pricing.jsx'
import Reviews from './components/Reviews.jsx'
import CTASection from "./components/CTASection";
import Contact from './components/Contact.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <TrustedBy/>
      <StatsSection/>
      <WhyBeBeyond/>
      <OurWork/>
      <PremiumFeatures/>
      <DifferenceSection/>
      <Pricing/>
      <Reviews/>
      <FAQ/>
      <CTASection/>
      <Contact/>

      <Footer/>
    </>
  ) 
}
export default App
