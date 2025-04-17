
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const categories = ["All", "Web", "Mobile", "Data/ML"];

const projects = [
  {
    id: 1,
    title: "Election Data Analysis",
    category: "Data/ML",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    description: "Python-based election data analysis with visualization",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
    url: "#",
  },
  {
    id: 2,
    title: "Donation App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1770",
    description: "React Native donation platform with Firebase integration",
    technologies: ["React Native", "Firebase", "Google Maps API"],
    url: "#",
  },
  {
    id: 3,
    title: "AI Recommendation Engine",
    category: "Data/ML",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=2070",
    description: "Gemini AI-powered outfit recommendation engine",
    technologies: ["Gemini AI", "Node.js", "MongoDB"],
    url: "#",
  },
  {
    id: 4,
    title: "Customer Support Portal",
    category: "Web",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=2070",
    description: "Angular & .NET Core support portal with real-time chat",
    technologies: ["Angular", "TypeScript", ".NET Core"],
    url: "#",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      {/* Category Filter */}
      <div className="flex justify-center mb-10 overflow-x-auto pb-2">
        <div className="flex space-x-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === category 
                ? 'bg-portfolio-gold text-portfolio-black' 
                : 'bg-portfolio-gray/50 text-portfolio-white hover:bg-portfolio-gray'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="bg-portfolio-gray rounded-lg overflow-hidden group"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <div className="p-6">
              <div className="text-xs text-portfolio-gold mb-2">{project.category}</div>
              <h3 className="text-xl font-serif mb-2">{project.title}</h3>
              <p className="text-sm text-portfolio-white/70 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className="text-xs bg-portfolio-black/40 px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <a 
                  href="https://github.com/Divyavipparla911" 
                  className="inline-flex items-center text-sm text-portfolio-white/70 hover:text-portfolio-gold"
                  aria-label={`View ${project.title} code on GitHub`}
                >
                  Code <Github size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
