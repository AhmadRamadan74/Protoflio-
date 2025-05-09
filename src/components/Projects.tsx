import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import '../styles/Projects.css';

interface ProjectProps {
  title: string;
  icon: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  color: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  icon,
  description, 
  technologies,
  github,
  demo,
  color
}) => {
  return (
    <div className={`project-card ${color}`}>
      <div className="project-icon">{icon}</div>
      <div className="project-content">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-link">
              <Github size={20} />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="project-link">
              <ArrowUpRight size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Fresh Cart Ecommerce',
      icon: 'FC',
      description: 'A modern e-commerce platform with secure user authentication and real-time notifications.',
      technologies: ['React', 'React-Router-Dom', 'Context API', 'Bootstrap', 'Axios'],
      github: 'https://github.com/AhmadRamadan74/FreshCart',
      color: 'green-border'
    },
    
    {
      title: 'Multi-Threaded File Searcher',
      icon: 'MT',
      description: 'Efficient file searching tool utilizing multi-threading to improve performance.',
      technologies: ['Python', 'GUI Framework(Tkinter)', 'Multithreading'],
      github: 'https://github.com/AhmadRamadan74/MultiThreadedFileSearcher',
      color: 'blue-border'
    },
    {
      title: 'Whistle',
      icon: 'W',
      description: 'Social media platform allowing users to create and manage posts with comments.',
      technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'RESTful APIs'],
      github: 'https://github.com/AhmadRamadan74/Whistle',
      color: 'purple-border'
    },
    {
      title: 'Tetris Game Solver',
      icon: 'TS',
      description: 'A Java project that uses multithreaded backtracking to fit Tetris pieces into a 4x4 grid efficiently. Each thread explores placements in parallel.',
      technologies: ['React', 'React-Router-Dom', 'Context API', 'Bootstrap', 'Axios'],
      github: 'https://github.com/AhmadRamadan74/SolvingTetris',
      color: 'blue-border'
    },
    {
      title: 'Gym Management System',
      icon: 'GMS',
      description: 'A JavaFX Gym Management System with role-based access and training schedule management..',
      technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'RESTful APIs'],
      github: 'https://github.com/AhmadRamadan74/GYM-Management-System',
      color: 'purple-border'
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>Projects</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;