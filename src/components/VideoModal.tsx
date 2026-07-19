import React, { useEffect } from 'react';
import { X, Film, Clock } from 'lucide-react';
import type { VideoItem } from '../types';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (video) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl animate-fade-in p-4 md:p-10">
      {/* Background Click outside */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-5xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-900 bg-black">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
              {video.genre || 'Wix Video Player'}
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-none transition-colors flex items-center gap-1.5 text-xs tracking-wider uppercase font-mono"
          >
            <span>Close</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          {video.videoUrl ? (
            video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be') ? (
              <iframe
                src={`https://www.youtube.com/embed/${
                  video.videoUrl.includes('youtu.be/')
                    ? video.videoUrl.split('youtu.be/')[1]?.split('?')[0]
                    : new URLSearchParams(video.videoUrl.split('?')[1] || '').get('v') || ''
                }?autoplay=1`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-none"
              />
            ) : (
              <video
                src={video.videoUrl}
                poster={video.coverUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            )
          ) : (
            <div className="relative w-full h-full">
              <img src={video.coverUrl} alt={video.title} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/60">
                <Film className="w-12 h-12 text-zinc-500 mb-4 animate-pulse" />
                <p className="text-sm font-mono tracking-widest uppercase text-zinc-300">Preview Reel Stream</p>
                <h4 className="text-2xl font-bold text-white mt-1">{video.title}</h4>
              </div>
            </div>
          )}
        </div>

        {/* Video Details Strip */}
        <div className="p-6 md:p-8 bg-zinc-950 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-zinc-900">
          <div>
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">
              <span>{video.artist}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {video.duration}</span>
              {video.year && <><span>•</span><span>{video.year}</span></>}
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-white uppercase">
              {video.title}
            </h3>
            {video.description && (
              <p className="mt-2 text-xs md:text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">
                {video.description}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-6 py-3 border border-zinc-700 hover:border-white text-xs tracking-[0.2em] font-medium uppercase text-zinc-300 hover:text-white transition-colors"
          >
            Back to Grid
          </button>
        </div>
      </div>
    </div>
  );
};
