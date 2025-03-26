import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import { myProjects } from '../constants/index.js';

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section id="projects" className="c-space mt-2">
      <p className="head-text">Currently Working On</p>

      <div className="mt-12 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 rounded-lg bg-gradient-to-br from-black-200 via-black-300 to-green-900/20 border border-green-500/50 shadow-2xl shadow-black-200">
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <span key={index} className="text-white-600">{tag.name}</span>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-green-500 transition-colors duration-300"
              href="https://github.com/sharibmasum"
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
