import React from 'react';

const Skills = () => {
  return (
    <div>
      <h2 style={{ marginTop: 0, color: '#333' }}>Technische Vaardigheden</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        
        {/* Backend & Data */}
        <div style={{ 
          padding: '1.5rem', 
          background: '#f8f9fa', 
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h3 style={{ color: '#007bff', marginTop: 0, display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>🗄️</span>
            Backend & Data
          </h3>
          <ul style={{ lineHeight: '1.8', color: '#555' }}>
            <li>SQL</li>
            <li>AL (Business Central)</li>
            <li>Java (opleiding & projecten)</li>
            <li>Spring Boot</li>
            <li>Python</li>
            <li>R</li>
          </ul>
        </div>
        
        {/* Frontend */}
        <div style={{ 
          padding: '1.5rem', 
          background: '#f8f9fa', 
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h3 style={{ color: '#28a745', marginTop: 0, display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>🎨</span>
            Frontend (basis)
          </h3>
          <ul style={{ lineHeight: '1.8', color: '#555' }}>
            <li>React</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
          </ul>
        </div>
        
        {/* Tools & Platformen */}
        <div style={{ 
          padding: '1.5rem', 
          background: '#f8f9fa', 
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h3 style={{ color: '#6f42c1', marginTop: 0, display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>🛠️</span>
            Tools & Platformen
          </h3>
          <ul style={{ lineHeight: '1.8', color: '#555' }}>
            <li>Azure DevOps</li>
            <li>GitHub</li>
            <li>Visual Studio Code</li>
            <li>Postman</li>
            <li>Playwright (testautomatisering)</li>
            <li>Oracle Fusion</li>
          </ul>
        </div>
        
        {/* Werkwijze */}
        <div style={{ 
          padding: '1.5rem', 
          background: '#f8f9fa', 
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h3 style={{ color: '#dc3545', marginTop: 0, display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>⚡</span>
            Werkwijze
          </h3>
          <ul style={{ lineHeight: '1.8', color: '#555' }}>
            <li>Agile / Scrum</li>
            <li>Testgericht werken</li>
            <li>CI/CD</li>
            <li>DevOps</li>
            <li>Versiebeheer</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;