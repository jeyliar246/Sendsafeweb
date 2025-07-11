import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AppShowcase from './components/AppShowcase';
import OurStory from './components/OurStory';
import Footer from './components/Footer';
import PlayToEarn from './components/PlayToEarn';
import TermsAndPrivacy from './components/TermsAndPrivacy';
import { AnimationProvider } from './context/AnimationContext';

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AppShowcase />
      <HowItWorks />
      <PlayToEarn />
      <OurStory />
    </>
  );
}

function App() {
  return (
    <Router>
      <AnimationProvider>
        <div className="min-h-screen bg-gradient-to-b from-black to-[#0a1a0a] text-white overflow-hidden">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/terms" element={<TermsAndPrivacy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AnimationProvider>
    </Router>
  );
}

export default App;