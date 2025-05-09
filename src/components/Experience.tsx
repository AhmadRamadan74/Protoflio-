import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';
import '../styles/Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h2>Experience</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="experience-container">
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="company-info">
              <h3>Scale Ai</h3>
              <div className="exp-duration">
                <Calendar size={16} />
                <span>January 2024 - October 2024</span>
              </div>
              <div className="badge">Full Time</div>
            </div>
            
            <div className="experience-content">
              <h4>Software Engineer</h4>
              
              <div className="responsibilities">
                <h5>Key Responsibilities</h5>
                <ul>
                  <li>
                  Contributed to the training of LLM, enhancing generative AI performance in code tasks.
                  </li>
                  <li>
                  Developed a unique methodology that enabled collaborative learning and streamlined issue resolution processes
                  </li>
                  <li>
                  Designed and implemented evaluation strategies to identify model weaknesses
                  </li>
                </ul>
              </div>
              


              <div className="technologies">
                <h5>Technologies Used</h5>
                <div className="tech-tags">
                  <span className="tech-tag">C++</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Algorithms</span>
                  <span className="tech-tag">SQL</span>
                  <span className="tech-tag">Code Review</span>
                  <span className="tech-tag">Prompt Engineering</span>
                  <span className="tech-tag">Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
          

          <div className="experience-item">
            <div className="company-info">
              <h3>Route Academy</h3>
              <div className="exp-duration">
                <Calendar size={16} />
                <span>Oct 2024 - Present</span>
              </div>
            </div>
            
            <div className="experience-content">
              <h4>Intern (MERN Stack)</h4>
              
              <div className="responsibilities">
                <h5>Key Responsibilities</h5>
                <ul>
                  <li>
                  As an enthusiastic Node.js Backend Development Trainee, I am eager to build a strong foundation in web application development using the Node.js runtime environment. 
                  </li>
                  <li>
                  With a keen interest in backend technologies and a commitment to continuous learning, I am excited to develop my skills and contribute to innovative projects.
                  </li>
                </ul>
              </div>
            </div>
          </div>



          <div className="experience-item">
            <div className="company-info">
              <h3>Coach Academy</h3>
              <div className="exp-duration">
                <Calendar size={16} />
                <span>November 2022 - December 2024</span>
              </div>
            </div>
            
            <div className="experience-content">
              <h4>Trainee</h4>
              
              <div className="responsibilities">
                <h5>Key Responsibilities</h5>
                <ul>
                  <li>
                  focus on mastering algorithms and problem-solving
                  </li>
                  <li>
                  engage in challenging tasks that enhance my coding skills and logical thinking, fostering a passion for continuous learning in technology.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Experience;