import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import '../styles/Navbar.css';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setMobileMenuOpen(false);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1 className="name-logo">Ahmad Ramadan</h1>
        </div>

        <div className="navbar-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
        </div>

        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="navbar-link" onClick={() => scrollToSection('about')}>About</div>
          <div className="navbar-link" onClick={() => scrollToSection('education')}>Education</div>
          <div className="navbar-link" onClick={() => scrollToSection('experience')}>Experience</div>
          <div className="navbar-link" onClick={() => scrollToSection('skills')}>Skills</div>
          <div className="navbar-link" onClick={() => scrollToSection('projects')}>Projects</div>
          <div className="navbar-link" onClick={() => scrollToSection('languages')}>Languages</div>
          <div className="navbar-link" onClick={() => scrollToSection('contact')}>Contact</div>
        </div>

        <div className="navbar-actions">
          <a href="/images/Ahmad_Ramadan_Cv.pdf" download className="resume-button">
            <Download size={16} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
