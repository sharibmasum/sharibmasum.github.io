import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-8 pt-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="head-text mb-6">Currently Working On</p>

        <div className="flex flex-col gap-4 relative p-6 rounded-lg bg-gradient-to-br from-black-200 via-black-300 to-green-900/20 border border-green-500/50 shadow-2xl shadow-black-200">
          <div className="flex flex-col gap-3 text-white-600">
            <p className="text-white text-2xl font-semibold animatedText">Fit Forest</p>
            <p className="animatedText text-sm sm:text-base">A gamified fitness application that turns your workout journey into an adventure. Plant and grow virtual trees as you achieve your fitness goals, creating your own personal forest of achievements.</p>
          </div>

          <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden animatedText">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/E73U3hBaPuo"
              title="Fit Forest Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-white-600 text-sm">React Native</span>
              <span className="text-white-600 text-sm">Supabase</span>
              <span className="text-white-600 text-sm">Expo</span>
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-green-500 transition-colors duration-300 text-sm"
              href="https://github.com/sharibmasum/FitForest"
              target="_blank"
              rel="noreferrer">
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
