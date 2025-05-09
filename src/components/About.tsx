import React from 'react';
import { Code2, Briefcase, Award } from 'lucide-react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            Junior Software Development Engineer eager to apply emerging software engineering talent. 
            With a strong proficiency in programming languages including C, C++, and Java. 
            Passionate about mathematics and competitive programming, actively engaged in the ACM 
            community and a participant in the ICPC.
          </p>
        </div>
        
        <div className="about-cards">
          <div className="about-card">
            <div className="card-icon">
              <Code2 size={32} />
            </div>
            <h3>Problem Solver</h3>
            <p>Skilled in algorithmic thinking and efficient solution design</p>
          </div>
          
          <div className="about-card">
            <div className="card-icon">
              <Briefcase size={32} />
            </div>
            <h3>Software Engineer</h3>
            <p>Backend development at Scale AI and coaching at Coach Academy</p>
          </div>
          
          <div className="about-card">
            <div className="card-icon">
              <Award size={32} />
            </div>
            <h3>Competitive Programmer</h3>
            <p>ECPC Finalist with strong algorithmic skills</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;