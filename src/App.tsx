import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorkGrid } from './components/WorkGrid';
import { About } from './components/About';
import { Newsletter } from './components/Newsletter';
import { VideoModal } from './components/VideoModal';
import { FEATURED_REEL, WIX_VIDEOS } from './data/videos';
import type { VideoItem } from './types';

export function App() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [activeSection, setActiveSection] = useState<string>('work');

  useEffect(() => {
    const sections = ['work', 'about', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 350;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation Bar matching JC Header */}
      <Header activeSection={activeSection} />

      {/* Main Content Areas Replicating Julian C. Screenshots 1-4 */}
      <main>
        {/* Screenshot 1: Automatic Slideshow Hero & Bottom-left title */}
        <Hero
          onPlayReel={(video) => setSelectedVideo(video)}
          featuredVideo={FEATURED_REEL}
        />

        {/* Screenshot 2: Featured Work & Video Grid */}
        <WorkGrid
          videos={WIX_VIDEOS}
          onSelectVideo={(video) => setSelectedVideo(video)}
        />

        {/* Screenshot 3: Julian C. Bio & Overlapping Vertical Card */}
        <About />

        {/* Screenshot 4: Keep Up with My Latest Work Footer */}
        <Newsletter />
      </main>

      {/* Interactive Video Modal Player */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}

export default App;
