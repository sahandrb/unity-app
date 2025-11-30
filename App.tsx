import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProductShowcase from './components/ProductShowcase';
import UnityBrand from './components/UnityBrand';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-slate-800 bg-white overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Stats />
        <ProductShowcase />
        <UnityBrand />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;