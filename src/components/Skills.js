import React from 'react';

const Skills = () => {
  return (
    <div>
      <h2 style={{ marginTop: 0, color: '#333' }}>Vaardigheden</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        <div>
          <h3 style={{ color: '#007bff' }}>Technische Skills</h3>
          <ul>
            <li>React & JavaScript</li>
            <li>HTML / CSS</li>
            <li>Microsoft Business Central</li>
            <li>AL (Application Language)</li>
            <li>SQL & Oracle</li>
            <li>Git / GitHub</li>
            <li>Playwright</li>
            <li>Postman</li>
          </ul>
        </div>
        <div>
          <h3 style={{ color: '#007bff' }}>Soft Skills</h3>
          <ul>
            <li>Probleemoplossend vermogen</li>
            <li>Goede focus</li>
            <li>Nieuwsgierigheid en leergierigheid</li>
            <li>Teamwork en communicatie</li>
            <li>Doorzettingsvermogen</li>
            <li>Creativiteit</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;