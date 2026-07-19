import React from 'react';
import { useInView } from '../hooks/useInView';

export const Newsletter: React.FC = () => {
  const { ref: footerRef, inView: footerInView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-20 border-t border-zinc-900/60 overflow-hidden">
      <div
        ref={footerRef}
        className={`max-w-[1400px] mx-auto px-8 md:px-16 text-left transform transition-all duration-1000 ease-out ${
          footerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Contact Info Instead of Newsletter Form */}
        <div className="max-w-3xl mb-24">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white underline decoration-white decoration-2 underline-offset-8 mb-12">
            Keep Up with My Latest Work
          </h3>

          <div className="flex flex-col gap-6">
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light max-w-xl leading-relaxed">
              For direct inquiries, collaborations, and project bookings, feel free to reach out directly via phone or WhatsApp:
            </p>
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 block mb-1">
                Call / WhatsApp
              </span>
              <a 
                href="tel:+919619829669"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider text-white hover:text-zinc-300 transition-colors"
              >
                +91 9619829669
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright matching Screenshot 4 exactly */}
        <div className="text-xs sm:text-sm text-zinc-400 font-light tracking-wide pt-8 border-t border-zinc-900">
          <p>© 2026 by Darsh Shah. Senior Video Editor & Creative Storyteller.</p>
        </div>
      </div>
    </footer>
  );
};
