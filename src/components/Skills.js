import React, { useState } from 'react';

const Skills = () => {
  const [open, setOpen] = useState(false);

  return (
    <section style={{
      background: 'white',
      color: '#333',
      padding: '2rem',
      borderRadius: '15px',
      margin: '1rem 0',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e0e0e0'
    }}>
      <h2
        style={{ cursor: 'pointer', userSelect: 'none' }}
        onClick={() => setOpen(!open)}
        title="Klik om te openen/sluiten"
      >
        Vaardigheden {open ? '▲' : '▼'}
      </h2>
      {open && (
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML / CSS</li>
          <li>Git / GitHub</li>
          <li>Playwright</li>
          <li>RESTful APIs</li>
          <li>Java</li>
          <li>SQL</li>
        </ul>
      )}
    </section>
  );
};

export default Skills;