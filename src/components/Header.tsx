import React, { useState, useEffect } from 'react';
import { X, Video, Globe, Share2 } from 'lucide-react';

interface HeaderProps {
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Featured Work', href: '#work' },
    { label: 'About Darsh Shah', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Header Bar Replicating Screenshot 1 */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-zinc-900 py-4'
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-6'
        }`}
      >
        <div className="max-w-[1700px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Top Left Logo: DS with Triangle Play outline matching exact template style */}
          <a
            href="#"
            className="group flex items-center gap-2 text-white font-extrabold text-xl md:text-2xl tracking-tighter transition-opacity hover:opacity-80"
          >
            <span className="font-sans font-black tracking-normal text-white">DS</span>
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 stroke-white fill-none stroke-[1.8] transform group-hover:scale-105 transition-transform"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 4v16l14-8-14-8z" />
            </svg>
            <span className="text-zinc-500 font-light text-xs tracking-widest hidden sm:inline-block pl-2 uppercase">
              Darsh Shah
            </span>
          </a>

          {/* Desktop & Mobile Menu Toggle Bar (Right side staggered bars) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:opacity-75 p-2 focus:outline-none flex flex-col items-end gap-[5px]"
            aria-label="Toggle Menu"
          >
            <span className={`w-7 h-[2px] bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-5 h-[2px] bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-7 h-[2px] bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </header>


      {/* Navigation Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 px-6 animate-fade-in">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white tracking-tighter text-3xl font-black mb-6 flex items-center gap-2"
          >
            DS
            <svg className="w-7 h-7 stroke-white fill-none stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 4v16l14-8-14-8z" />
            </svg>
          </a>

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl md:text-4xl tracking-tight font-extrabold text-zinc-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}

          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-zinc-800 text-zinc-400">
            <a href="https://vimeo.com" className="hover:text-white font-mono font-bold text-lg">v</a>
            <a href="https://youtube.com" className="hover:text-white"><Video className="w-5 h-5" /></a>
            <a href="https://facebook.com" className="hover:text-white font-mono font-bold text-lg">f</a>
            <a href="https://instagram.com" className="hover:text-white"><Globe className="w-5 h-5" /></a>
            <a href="https://twitter.com" className="hover:text-white"><Share2 className="w-5 h-5" /></a>
          </div>
        </div>
      )}
    </>
  );
};
