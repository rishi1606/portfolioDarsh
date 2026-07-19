import React from 'react';
import { Play } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import type { VideoItem } from '../types';

interface WorkGridProps {
  videos: VideoItem[];
  onSelectVideo: (video: VideoItem) => void;
}

export const WorkGrid: React.FC<WorkGridProps> = ({ videos, onSelectVideo }) => {
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: mainCardRef, inView: mainCardInView } = useInView({ threshold: 0.15, triggerOnce: true });
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="work" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Subtle Static/Glitch Background Texture matching Screenshot 2 */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header Replicating Screenshot 2: Center text with horizontal lines animating in */}
        <div
          ref={headerRef}
          className={`flex items-center justify-center gap-6 mb-16 transition-all duration-1000 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="h-[1px] bg-zinc-600 w-24 sm:w-48 md:w-64" />
          <h2 className="text-sm sm:text-base md:text-lg tracking-[0.2em] font-light text-zinc-300 uppercase whitespace-nowrap">
            Featured Commercials & Brand Work
          </h2>
          <div className="h-[1px] bg-zinc-600 w-24 sm:w-48 md:w-64" />
        </div>

        {/* Featured Video Main Banner Replicating Screenshot 2 Center Card with smooth scale-up animation */}
        <div
          ref={mainCardRef}
          onClick={() => onSelectVideo(videos[0] || {
            id: 'featured',
            title: 'Being Strong - "Train like a Gladiator"',
            artist: 'Being Strong (Salman Khan Brand)',
            songTitle: 'Gladiator Training',
            duration: '00:57',
            coverUrl: '/being_strong_banner.png',
            genre: 'Promotional & Social Reel'
          })}
          className={`group relative w-full aspect-[16/9] md:aspect-[21/9] bg-blue-900/40 mb-16 overflow-hidden cursor-pointer border border-zinc-800 shadow-2xl transition-all duration-1000 ease-out ${
            mainCardInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
          }`}
        >
          <img
            src={videos[0]?.coverUrl || "/being_strong_banner.png"}
            alt={videos[0]?.title || "Being Strong - Train like a Gladiator"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-90 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-blue-950/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          {/* Center Title & White Pill Button matching Screenshot 2 exactly */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg mb-6 max-w-4xl uppercase">
              {videos[0]?.title || "Being Strong - Train like a Gladiator"}
            </h3>
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-white text-black font-semibold text-xs md:text-sm tracking-wider uppercase shadow-xl group-hover:bg-zinc-200 transition-colors">
              <Play className="w-3.5 h-3.5 fill-black translate-x-0.5" />
              <span>Play Video</span>
            </div>
          </div>
        </div>

        {/* 3-Column Grid with staggered scroll animations */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, idx) => {
            const delayClass = idx === 0 ? 'delay-0' : idx === 1 ? 'delay-150' : idx === 2 ? 'delay-300' : idx === 3 ? 'delay-100' : idx === 4 ? 'delay-200' : 'delay-300';
            return (
              <div
                key={video.id}
                onClick={() => onSelectVideo(video)}
                className={`group cursor-pointer flex flex-col bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all duration-700 ease-out overflow-hidden ${delayClass} ${
                  gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                  <img
                    src={video.coverUrl}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-all duration-300">
                      <Play className="w-4 h-4 fill-black translate-x-0.5" />
                    </div>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow bg-black border-t border-zinc-900/60">
                  <div>
                    <h4 className="text-base font-bold tracking-wide text-white group-hover:text-zinc-300 transition-colors">
                      {video.title}
                    </h4>
                    <p className="mt-1 text-xs text-zinc-500 font-mono uppercase">
                      {video.artist}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
