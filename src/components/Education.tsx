import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import '../styles/Education.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="education-section">
      <div className="section-header">
        <h2>Education</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="education-card">
        <div className="education-header">
          <h3>Bachelor's Degree in Computer Science</h3>
          <span className="university">Helwan University</span>
        </div>
        <div className="education-info">
          <div className="info-item">
            <Calendar size={16} />
            <span>September 2021 - January 2025</span>
          </div>
          <div className="info-item">
            <MapPin size={16} />
            <span>Cairo</span>
          </div>
        </div>
        <div className="education-description">
          <p>
            Completed a comprehensive computer science curriculum with a focus on algorithm design, 
            data structures, object-oriented programming, and software engineering principles.
          </p>
          <ul>
            <li>Achieved high academic standing throughout the program</li>
            <li>Participated actively in programming competitions</li>
            <li>Completed several hands-on projects demonstrating practical application of concepts</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;