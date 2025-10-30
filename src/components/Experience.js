import React, { useState } from 'react';

const Experience = () => {
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
        Werkervaring {open ? '▲' : '▼'}
      </h2>
      {open && (
        <div>
      <div>
        <h3>Frontend Developer</h3>
        <p>2025 - Heden</p>
        <p>Profource ervaring met:</p>
        <ul>
          <li>Oracle rapportages</li>
          <li>SQL Query's</li>
          <li>Playwright</li>
          <li>Postman</li>
        </ul>
      </div>
      <div>
        <h3>Business Central Developer </h3>
        <p>2021 - 2025</p>
        <p>Mysolution Business Central Developer ervaring met:</p>
        <ul>
          <li>Microsoft ERP systeem Dynamics 365 Business Central</li>
          <li>AL code (Application Language)</li>
          <li> Visual studio code</li>
          <li>Azure DevOps voor gezamenlijke ontwikkeling</li>
          <li>Agile methodologie voor stand-ups en springplanning</li>
        </ul>
      </div>
      <div>
        <h3>Medewerker Salaris Administratie </h3>
        <p>2017 - 2021</p>
        <p>IRS Salaris Rijswijk, ervaring met:</p>
        <ul>
          <li>Unit4 systeem.</li>
          <li> Excel rapportages</li>
        </ul>
      </div>
      </div>
      )}
    </section>
  );
};

export default Experience;
