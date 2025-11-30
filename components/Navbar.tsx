import React, { useState } from 'react';
import { Menu, X, Package } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-unity-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
            U
          </div>
          <span className={`text-2xl font-bold ${scrolled ? 'text-slate-800' : 'text-slate-800 md:text-white'}`}>
            گروه یونیتی
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-unity-gold ${scrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-unity-gold hover:bg-amber-600 text-white px-5 py-2 rounded-full font-bold transition-transform hover:scale-105"
          >
            مشاوره رایگان
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col p-4 animate-in slide-in-from-top-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-3 px-4 text-slate-700 hover:bg-gray-50 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-unity-blue text-white text-center py-3 rounded-xl font-bold"
          >
            تماس با ما
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;