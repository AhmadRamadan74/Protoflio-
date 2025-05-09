import React from 'react';
import '../styles/CompetitiveProgramming.css';

const CompetitiveProgramming: React.FC = () => {
  const profiles = [
    {
      platform: 'LeetCode',
      username: 'TENJEN',
      url: 'https://leetcode.com/u/TENJEN/',
      stats: 'Active Problem Solver'
    },
    {
      platform: 'Codeforces',
      username: 'TENJEN',
      url: 'https://codeforces.com/profile/TENJEN',
      stats: 'Regular Contestant'
    },
    {
      platform: 'ICPC',
      username: 'Mr.Ahmad Ramadan',
      url: 'https://icpc.global/ICPCID/Z319B8W62YLW',
      stats: 'ECPC Finalist'
    }
  ];

  return (
    <section id="competitive" className="competitive-section">
      <div className="section-header">
        <h2>Competitive Programming</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="profiles-grid">
        {profiles.map((profile, index) => (
          <a 
            href={profile.url} 
            target="_blank" 
            rel="noreferrer" 
            key={index} 
            className="profile-card"
          >
            <h3>{profile.platform}</h3>
            <p className="username">@{profile.username}</p>
            <p className="stats">{profile.stats}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CompetitiveProgramming;