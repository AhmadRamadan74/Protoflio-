import React from 'react';
import { Heart } from 'lucide-react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">Ahmad Ramadan</div>
          <p className="footer-copyright">
            © {currentYear} All rights reserved
          </p>
        </div>
        
        <div className="footer-made-with">
          <p>
            <Heart size={16} className="heart-icon" /> 
          </p>
        </div>
        
        <div className="footer-back-to-top">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;