import React, { useContext } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeContext, ThemeProvider } from './components/ThemeToggle';

const AppContent: React.FC = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Loader />
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className="main-content">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <CompetitiveProgramming />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;