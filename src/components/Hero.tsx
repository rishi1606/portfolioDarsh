import React, { useState, useEffect } from 'react';
import type { VideoItem } from '../types';

interface HeroProps {
  onPlayReel: (video: VideoItem) => void;
  featuredVideo: VideoItem;
}

const SLIDESHOW_IMAGES = [
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop', // Colorful retro aesthetic matching screenshot 1
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop', // Concert neon aesthetic
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop', // Cinematic film set
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop'  // High contrast sunset framing
];

export const Hero: React.FC<HeroProps> = ({ onPlayReel, featuredVideo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDESHOW_IMAGES.length);
    }, 4500); // Automatic smooth transition every 4.5s
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-end">
      {/* Automatic Background Slideshow matching Screenshot 1 & User Request */}
      <div className="absolute inset-0 z-0">
        {SLIDESHOW_IMAGES.map((imgUrl, index) => (
          <div
            key={imgUrl}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1500 ease-in-out ${
              index === currentIndex ? 'opacity-100 scale-105 transition-transform duration-[6000ms]' : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
        ))}
        {/* Subtle Dark Gradient Overlay to make bottom-left text crisp and legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30" />
      </div>

      {/* Bottom Left Overlay Content matching Screenshot 1 exactly */}
      <div className="relative z-10 max-w-[1700px] w-full mx-auto px-8 md:px-16 pb-16 md:pb-24 flex flex-col items-start text-left">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05] drop-shadow-lg">
          Darsh Shah. <br />
          Senior Video Editor.
        </h1>

        <button
          onClick={() => onPlayReel(featuredVideo)}
          className="mt-6 md:mt-8 group inline-flex items-center gap-3 text-white sm:text-lg md:text-xl font-normal tracking-wide hover:opacity-80 transition-all drop-shadow-md"
        >
          <span>Watch Showreel</span>
          <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-2xl font-light">→</span>
        </button>
      </div>

      {/* Slideshow Progress Dots (Subtle) */}
      <div className="absolute bottom-6 right-16 z-20 hidden sm:flex items-center gap-2">
        {SLIDESHOW_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
