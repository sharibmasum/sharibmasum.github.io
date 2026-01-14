import { useState } from 'react';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('smasum@uwo.ca');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space pt-20 sm:pt-40 pb-0" id="about">
      <h3 className="head-text mb-6">About Me</h3>
      <div className="grid grid-cols-3 gap-4 h-full">
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
              <p className="grid-headtext">Looking for Summer 2026 Opportunities</p>
              <p className="grid-subtext">I'm based in Toronto, Canada and open to remote work worldwide.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid-container p-4 rounded-lg bg-gradient-to-br from-black-200 via-black-300 to-green-900/20 border border-green-500/50 shadow-2xl shadow-black-200">
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <span className="text-white text-xl">{hasCopied ? '✓' : '📋'}</span>
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">smasum@uwo.ca</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
