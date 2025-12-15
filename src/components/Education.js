import React from 'react';

const Education = () => {
  return (
    <div>
      <h2 style={{ marginTop: 0, color: '#333' }}>Opleiding</h2>

      {/* HBO-ICT */}
      <div style={{ 
        marginBottom: '2rem', 
        padding: '1.5rem', 
        background: '#f8f9fa', 
        borderRadius: '8px',
        borderLeft: '4px solid #007bff'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <h3 style={{ margin: 0, color: '#007bff' }}>HBO-ICT – Software Development</h3>
          <span style={{ color: '#666', fontSize: '0.9rem', fontWeight: '600' }}>2017 - 2022</span>
        </div>
        <p style={{ color: '#555', fontWeight: '600', marginBottom: '1rem' }}>Hogeschool NOVI</p>
        <ul style={{ lineHeight: '1.8', color: '#555' }}>
          <li>Backend-ontwikkeling met Java, Spring Boot en SQL</li>
          <li>Frontend-ontwikkeling met HTML5, CSS3 en React</li>
          <li>Data-analyse met Python en R</li>
          <li>Ontwikkelen volgens Agile/Scrum-principes</li>
        </ul>
      </div>

      {/* Management & Marketing */}
      <div style={{ 
        marginBottom: '2rem', 
        padding: '1.5rem', 
        background: '#f8f9fa', 
        borderRadius: '8px',
        borderLeft: '4px solid #28a745'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <h3 style={{ margin: 0, color: '#28a745' }}>Management & Marketing</h3>
          <span style={{ color: '#666', fontSize: '0.9rem', fontWeight: '600' }}>2008 - 2014</span>
        </div>
        <p style={{ color: '#555', fontWeight: '600', marginBottom: '1rem' }}>Universiteit Continental (Peru)</p>
      </div>
    </div>
  );
};

export default Education;
