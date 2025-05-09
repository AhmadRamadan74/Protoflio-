import React from 'react';
import '../styles/Languages.css';

const Languages: React.FC = () => {
  const languages = [
    {
      name: 'Arabic',
      level: 'Native',
      proficiency: 100
    },
    {
      name: 'English',
      level: 'Advanced',
      proficiency: 85
    }
  ];

  return (
    <section id="languages" className="languages-section">
      <div className="section-header">
        <h2>Languages</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="languages-container">
        {languages.map((language, index) => (
          <div key={index} className="language-card">
            <div className="language-info">
              <h3>{language.name}</h3>
              <span className="language-level">{language.level}</span>
            </div>
            
            <div className="language-progress-container">
              <div className="language-progress">
                <div 
                  className="language-progress-bar" 
                  style={{ width: `${language.proficiency}%` }}
                ></div>
              </div>
              <span className="language-percentage">{language.proficiency}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;