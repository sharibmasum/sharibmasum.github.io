import { useState, useEffect } from 'react';

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/sharibmasum/repos');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project) => (
          <a 
            key={project.id} 
            href={project.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card p-6 rounded-lg bg-black-200 border border-black-300 hover:border-green-500/50 hover:bg-gradient-to-br from-black-200 via-black-300 to-green-900/20 transition-all duration-300 cursor-pointer block"
          >
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-semibold text-white">{project.name}</h4>
              <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6 text-white-600" />
            </div>
            
            <p className="text-white-600 mb-4">{project.description || 'No description available'}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.topics?.map((topic, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-sm bg-white-500/10 text-white-600 rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default GitHubProjects;
