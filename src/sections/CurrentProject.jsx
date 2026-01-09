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

          <div className="animatedText">
            <div className="flex items-center gap-3">
              <div className="w-full h-2 bg-white-500/10 rounded">
                <div className="h-2 bg-green-500 rounded" style={{ width: '30%' }} />
              </div>
              <span className="text-white text-sm font-semibold">30%</span>
            </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          <div>
            <p className="head-text mb-6">Recently Updated</p>

            <div className="flex flex-col gap-4 relative p-6 rounded-lg bg-gradient-to-br from-black-200 via-black-300 to-green-900/20 border border-green-500/50 shadow-2xl shadow-black-200">
              <div className="flex flex-col gap-3 text-white-600">
                <p className="text-white text-2xl font-semibold animatedText">PercentDone.com</p>
                <p className="animatedText text-sm sm:text-base">A modern web application that helps users track and visualize their progress on various projects and goals. Set milestones, track completion percentages, and stay motivated with an intuitive interface.</p>
              </div>

              <div className="w-full h-[80px] rounded-lg overflow-hidden animatedText bg-gradient-to-br from-green-500/20 to-green-700/20 border border-green-500/30 flex items-center justify-center">
                <a
                  href="https://www.percentdone.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-lg font-semibold hover:text-green-400 transition-colors duration-300">
                  Visit PercentDone.com
                </a>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-white-600 text-sm">React</span>
                  <span className="text-white-600 text-sm">Supabase</span>
                  <span className="text-white-600 text-sm">Tailwind CSS</span>
                </div>

                <a
                  className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-green-500 transition-colors duration-300 text-sm"
                  href="https://github.com/sharibmasum/PercentDone"
                  target="_blank"
                  rel="noreferrer">
                  <p>GitHub</p>
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="head-text mb-6">Recently Finished</p>

            <div className="flex flex-col gap-4 relative p-6 rounded-lg bg-gradient-to-br from-black-200 via-black-300 to-green-900/20 border border-green-500/50 shadow-2xl shadow-black-200">
              <div className="flex flex-col gap-3 text-white-600">
                <p className="text-white text-2xl font-semibold animatedText">Mac Volume Control</p>
                <p className="animatedText text-sm sm:text-base">A lightweight macOS utility for quick, precise system volume control.</p>
              </div>

              <div className="w-full h-[80px] rounded-lg overflow-hidden animatedText bg-gradient-to-br from-green-500/20 to-green-700/20 border border-green-500/30 flex items-center justify-center">
                <a
                  href="https://github.com/sharibmasum?tab=repositories&q=mac%20volume%20control"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-lg font-semibold hover:text-green-400 transition-colors duration-300">
                  View Mac Volume Control
                </a>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-white-600 text-sm">MediaPipe</span>
                  <span className="text-white-600 text-sm">macOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
