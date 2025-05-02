import React, { useState, useEffect } from 'react';
import { Package, Apple, Play, Gift, Bike } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="bike-container">
        <div className="bike">
          <Bike className="w-6 h-6 text-[#00ff9d]" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Package className="h-8 w-8 text-[#ff00ff]" />
            <div className="absolute -inset-1 bg-[#00ff9d] blur-sm opacity-70 rounded-full animate-pulse"></div>
            <div className="absolute -inset-2 bg-[#ff00ff] blur-md opacity-30 rounded-full animate-pulse-slow"></div>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#ff00ff] to-[#00ff9d] text-transparent bg-clip-text">
            SendSafe
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'How It Works', 'Our Story', 'Screenshots'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-white/80 hover:text-[#00ff9d] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a 
            href="#play-to-earn"
            className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-white font-medium hover:bg-[#ff00ff]/20 transition-all duration-300 border border-white/10"
          >
            <Gift className="w-5 h-5" />
            <span>Play to Earn</span>
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <a 
            href="https://apps.apple.com/us/app/sendsafe/id6612034715" 
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full text-white font-medium transition-all duration-300 border border-white/10 hover:border-[#ff00ff]/50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Apple className="w-5 h-5" />
            <span className="hidden sm:inline">App Store</span>
          </a>
          <a 
            href="https://play.google.com/store/apps/details?id=com.sendsafe.android" 
            className="flex items-center gap-2 bg-gradient-to-r from-[#ff00ff] to-[#9d00ff] px-4 py-2 rounded-full text-white font-medium hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Play className="w-5 h-5" />
            <span className="hidden sm:inline">Play Store</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;