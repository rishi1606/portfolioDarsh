import React from 'react';
import { useInView } from '../hooks/useInView';

export const About: React.FC = () => {
  const { ref: leftRef, inView: leftInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: rightRef, inView: rightInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="bg-black text-white relative pt-20 pb-32 overflow-hidden">
      {/* Wide Cinematic Background Banner matching Screenshot 3 exactly */}
      <div className="relative w-full min-h-[550px] md:min-h-[620px] bg-cover bg-center flex items-center"
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518173946687-a4c8a683392e?q=80&w=2070&auto=format&fit=crop")' }}>
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-8 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column coming from LEFT on scroll */}
          <div
            ref={leftRef}
            className={`lg:col-span-7 space-y-6 text-left transform transition-all duration-1000 ease-out ${
              leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-zinc-300 text-xs tracking-[0.2em] uppercase font-semibold">
              <span>Senior Video Editor • 10+ Years Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Darsh Shah.
            </h2>

            <p className="text-zinc-200 text-sm sm:text-base md:text-lg font-light leading-relaxed tracking-wide max-w-xl">
              I am Darsh Shah, a Senior Video Editor and Visual Storyteller dedicated to turning raw footage into cinematic, high-impact stories. With over a decade of post-production leadership, I specialize in crafting commercials, documentaries, and brand reels that capture attention instantly, connect emotionally, and drive real results.
            </p>

            <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-light leading-relaxed tracking-wide max-w-lg">
              Having produced and mastered over 500+ commercial campaigns for industry giants like Jerai Fitness, Being Strong (Salman Khan Brand), MRAI, Unique Stays, and Hero Earth, I bring deep expertise in Premiere Pro, After Effects, and DaVinci Resolve color grading. I don't just edit videos—I build unforgettable visual identities that make your brand stand out from the crowd.
            </p>
          </div>

          {/* Right Overlapping Vertical Portrait Card coming from RIGHT on scroll */}
          <div
            ref={rightRef}
            className={`lg:col-span-5 flex justify-center lg:justify-end relative transform transition-all duration-1000 delay-200 ease-out ${
              rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
            }`}
          >
            <div className="w-64 sm:w-72 md:w-80 aspect-[3/4.2] shadow-2xl overflow-hidden border border-zinc-800/80 transform translate-y-12 lg:translate-y-24 bg-zinc-900 z-20 hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-all">
              <img
                src="darsh_portrait.png"
                alt="Darsh Shah Portrait"
                className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4 text-center">
                <span className="text-xs font-mono tracking-widest text-white uppercase block font-bold">Darsh Shah</span>
                <span className="text-[10px] text-zinc-400 block tracking-wider">Senior Video Editor</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Below Banner Area on Pure Black with Contact Email sliding up on scroll */}
      <div
        ref={contactRef}
        className={`max-w-[1400px] mx-auto px-8 md:px-16 pt-24 lg:pt-32 pb-6 text-left transform transition-all duration-1000 delay-300 ease-out ${
          contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-6">
          <p className="text-sm md:text-base font-light text-zinc-300 tracking-wide">
            Contact: <a href="mailto:darsh257@gmail.com" className="hover:text-white font-semibold underline decoration-zinc-600 underline-offset-4">darsh257@gmail.com</a>
          </p>
          <p className="text-xs md:text-sm font-mono tracking-widest text-zinc-500 uppercase">
            📍 Mumbai, Maharashtra • Available for Commercial Projects
          </p>
        </div>
      </div>
    </section>
  );
};
