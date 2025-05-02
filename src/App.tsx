import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AppShowcase from './components/AppShowcase';
import OurStory from './components/OurStory';
import Footer from './components/Footer';
import PlayToEarn from './components/PlayToEarn';
import { AnimationProvider } from './context/AnimationContext';

function App() {
  return (
    <AnimationProvider>
      <div className="min-h-screen bg-gradient-to-b from-black to-[#1a0033] text-white overflow-hidden">
        <Header />
        <main>
          <Hero />
          <Features />
          <AppShowcase />
          <HowItWorks />
          <PlayToEarn />
          <OurStory />
        </main>
        <Footer />
      </div>
    </AnimationProvider>
  );
}

export default App;