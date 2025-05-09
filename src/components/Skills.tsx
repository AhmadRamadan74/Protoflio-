import React, { useState } from 'react';
import '../styles/Skills.css';

type SkillCategory = 
  | 'All Skills' 
  | 'Programming Languages' 
  | 'Frameworks & Libraries' 
  | 'Databases' 
  | 'DevOps & Cloud' 
  | 'Version Control & Collaboration' 
  | 'API & Testing Tools' 
  | 'Software Engineering Concepts'
  | 'Productivity & Documentation'
  | 'Web & Data Utilities'
  | 'Operating Systems';

interface Skill {
  name: string;
  category: SkillCategory[];
  color: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All Skills');
  
  const categories: SkillCategory[] = [
    'All Skills',
    'Programming Languages',
    'Frameworks & Libraries',
    'Databases',
    'DevOps & Cloud',
    'Version Control & Collaboration',
    'API & Testing Tools',
    'Productivity & Documentation',
    'Web & Data Utilities',
  ];
  
  const skills: Skill[] = [
    { name: 'C', category: ['Programming Languages'], color: 'border-blue-500' },
    { name: 'C++', category: ['Programming Languages'], color: 'border-pink-500' },
    { name: 'Python', category: ['Programming Languages'], color: 'border-purple-500' },
    { name: 'GO', category: ['Programming Languages'], color: 'border-green-500' },
    { name: 'JavaScript', category: ['Programming Languages'], color: 'border-yellow-500' },
    { name: 'Java', category: ['Programming Languages'], color: 'border-blue-500' },
    { name: 'HTML', category: ['Programming Languages', 'Web & Data Utilities'], color: 'border-blue-400' },
    { name: 'CSS', category: ['Programming Languages', 'Web & Data Utilities'], color: 'border-pink-400' },
    { name: 'React JS', category: ['Frameworks & Libraries'], color: 'border-green-500' },
    { name: 'FastAPI', category: ['Frameworks & Libraries', 'API & Testing Tools'], color: 'border-blue-500' },
    { name: 'Bootstrap', category: ['Frameworks & Libraries'], color: 'border-blue-400' },
    { name: 'MySQL', category: ['Databases'], color: 'border-pink-500' },
    { name: 'Spanner', category: ['Databases'], color: 'border-purple-400' },
    { name: 'Docker', category: ['DevOps & Cloud'], color: 'border-blue-500' },
    { name: 'Git', category: ['Version Control & Collaboration'], color: 'border-blue-300' },
    { name: 'GitHub', category: ['Version Control & Collaboration'], color: 'border-white' },
    { name: 'Trello', category: ['Version Control & Collaboration', 'Productivity & Documentation'], color: 'border-pink-500' },
    { name: 'Postman', category: ['API & Testing Tools'], color: 'border-green-400' }
  ];
  
  const filteredSkills = activeCategory === 'All Skills'
    ? skills
    : skills.filter(skill => skill.category.includes(activeCategory));
  
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2>Skills</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="skills-categories">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`category-button ${activeCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div key={index} className={`skill-hexagon ${skill.color}`}>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;