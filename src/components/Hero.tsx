import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Globe, ChevronDown } from 'lucide-react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, 'rgba(56, 189, 248, 0.03)');
    gradient.addColorStop(1, 'rgba(168, 85, 247, 0.03)');

    const stars: { x: number; y: number; size: number; speed: number }[] = [];
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5,
        speed: Math.random() * 0.5 + 0.1
      });
    }

    const waves = [
      { amp: 25, freq: 0.005, speed: 0.001, color: 'rgba(56, 189, 248, 0.2)', offset: 0 },
      { amp: 15, freq: 0.008, speed: 0.0015, color: 'rgba(168, 85, 247, 0.15)', offset: Math.PI },
      { amp: 30, freq: 0.003, speed: 0.0005, color: 'rgba(14, 165, 233, 0.1)', offset: Math.PI / 2 }
    ];

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);
      
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
        
        star.y += star.speed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      });
      
      const baseHeight = height * 0.8;
      waves.forEach(wave => {
        ctx.beginPath();
        for (let x = 0; x < width; x += 5) {
          const y = baseHeight + wave.amp * Math.sin(x * wave.freq + time * wave.speed + wave.offset);
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-content">
        <div className="hero-profile">
          <div className="profile-image-container">
            <img src="/images/Screenshot_20250507_225253_Gallery.jpg.png" alt="Ahmad Ramadan" className="profile-image" />
          </div>
          <div className="hero-title">
            <h1 className="title-main">Backend NodeJs</h1>
            <h2 className="title-sub"></h2>
            <div className="hero-roles">
              <p className="role">Ex-SWE <span>@Scale Ai</span></p>
              <p className="role">Qualified to <span>ECPC finals</span></p>
              <p className="role">SWE & Problem Solver</p>
            </div>
          </div>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/AhmadRamadan74" className="social-link" target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a href="https://linkedin.com/in/ahmad-elemam-dev" className="social-link" target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
          <a href="mailto:ramadan.fcai@gmail.com" className="social-link">
            <Mail />
          </a>
          <a href="#" className="social-link">
            <Globe />
          </a>
        </div>
        
        <button className="explore-button" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          Explore My Work
          <ChevronDown className="arrow-down" />
        </button>
      </div>
    </section>
  );
};

export default Hero;