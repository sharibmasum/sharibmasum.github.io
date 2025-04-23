import { useState } from 'react';
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('sharibmasum@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space pt-20 sm:pt-40 pb-6 min-h-[75vh]" id="about">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 h-full">
        <div className="col-span-1">
          <div className="grid-container p-4 rounded-lg bg-gradient-to-br from-black-200 via-black-300 to-green-900/20 border border-green-500/50 shadow-2xl shadow-black-200">
            <div>
              <p className="grid-headtext">Hi, I'm Sharib Masum</p>
              <p className="grid-subtext">
                I am an engineering student at Western University with a deep passion for math, physics, and computer science. 
                I build anything that catches my interest and am always willing to learn something new.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid-container p-4 rounded-lg bg-gradient-to-br from-black-200 via-black-300 to-green-900/20 border border-green-500/50 shadow-2xl shadow-black-200">
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I have a strong focus on full-stack development, working with technologies like Node.js, React.js, and SQL databases such as PostgreSQL. 
                Additionally, I am proficient in programming languages including Python, Java, and C++.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid-container p-4 rounded-lg bg-gradient-to-br from-black-200 via-black-300 to-green-900/20 border border-green-500/50 shadow-2xl shadow-black-200">
            <div>
              <p className="grid-headtext">Looking for Summer 2025 Opportunities</p>
              <p className="grid-subtext">I'm based in Toronto, Canada and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-4" />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid-container p-4 rounded-lg bg-gradient-to-br from-black-200 via-black-300 to-green-900/20 border border-green-500/50 shadow-2xl shadow-black-200">
            <div>
              <p className="grid-headtext">My Passion for Building</p>
              <p className="grid-subtext">
                I like making cool stuff for the sake of making cool stuff. Whether it's a new project or learning a new technology,
                I'm always excited to explore and create something interesting.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid-container p-4 rounded-lg bg-gradient-to-br from-black-200 via-black-300 to-green-900/20 border border-green-500/50 shadow-2xl shadow-black-200">
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <span className="text-white text-xl">{hasCopied ? '✓' : '📋'}</span>
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">sharibmasum@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
