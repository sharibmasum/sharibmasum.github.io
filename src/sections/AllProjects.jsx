import { useState, useEffect } from 'react';

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/sharibmasum/repos');
        const data = await response.json();
        const sorted = Array.isArray(data)
          ? [...data].sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
          : [];
        setProjects(sorted);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const removedNames = new Set(['fitforest', 'percentdone', 'macvolumecontrol', 'volumecontrol']);
  const featuredNames = new Set(['minecraft', 'smartcart']);

  const sanitizedProjects = projects.filter((p) => {
    const name = (p?.name || '').toLowerCase();
    return name && !removedNames.has(name);
  });

  const featuredProjects = sanitizedProjects.filter((p) => featuredNames.has((p.name || '').toLowerCase()));
  const otherProjects = sanitizedProjects.filter((p) => !featuredNames.has((p.name || '').toLowerCase()));

  const getFeaturedImage = (name) => {
    const key = (name || '').toLowerCase();
    if (key === 'minecraft') return '/assets/Images/Minecraft.png';
    if (key === 'smartcart') return '/assets/Images/SmartCart.png';
    return undefined;
  };

  if (loading) {
    return (
      <section id="projects" className="c-space my-5 min-h-[40vh]">
        <h3 className="head-text">All Projects</h3>
        <div className="flex justify-center items-center h-40">
          <p className="text-white-600">Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="c-space my-5 min-h-[40vh]">
      <h3 className="head-text">All of My Projects</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <a
                key={project.id}
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card p-6 rounded-lg bg-black-200 border border-black-300 hover:border-green-500/50 hover:bg-gradient-to-br from-black-200 via-black-300 to-green-900/20 transition-all duration-300 cursor-pointer block"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl font-semibold text-white break-words leading-snug">
                      {project.name}
                    </h4>
                  </div>
                  <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6 text-white-600 flex-shrink-0" />
                </div>

                <p
                  className="text-white-600"
                  style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                >
                  {project.description || 'No description available'}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="flex flex-col gap-4">
            {featuredProjects.map((project) => {
              const imgSrc = getFeaturedImage(project.name);
              return (
                <a
                  key={project.id}
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card p-4 rounded-lg bg-black-200 border border-black-300 hover:border-green-500/50 hover:bg-gradient-to-br from-black-200 via-black-300 to-green-900/20 transition-all duration-300 cursor-pointer block"
                >
                  {imgSrc && (
                    <div className="w-full h-40 rounded-md overflow-hidden mb-3">
                      <img
                        src={imgSrc}
                        alt={`${project.name} preview`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-white">{project.name}</h4>
                    <img src="/assets/github.svg" alt="GitHub" className="w-5 h-5 text-white-600" />
                  </div>
                  <p
                    className="text-white-600 text-sm"
                    style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                  >
                    {project.description || 'No description available'}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubProjects;
