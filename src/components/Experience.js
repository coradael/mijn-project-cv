import React from 'react';

const Experience = () => {
  return (
    <div>
      <h2 style={{ marginTop: 0, color: '#333' }}>Werkervaring</h2>
      
      {/* Profource */}
      <div style={{ 
        marginBottom: '2rem', 
        padding: '1.5rem', 
        background: '#f8f9fa', 
        borderRadius: '8px',
        borderLeft: '4px solid #007bff'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <h3 style={{ margin: 0, color: '#007bff' }}>Developer - Technisch Consultant</h3>
          <span style={{ color: '#666', fontSize: '0.9rem', fontWeight: '600' }}>2025 - Heden</span>
        </div>
        <p style={{ color: '#555', fontWeight: '600', marginBottom: '1rem' }}>Profource</p>
        <ul style={{ lineHeight: '1.8', color: '#555' }}>
          <li>Ontwikkelen en onderhouden van technische oplossingen voor klanten binnen een Oracle Fusion-omgeving</li>
          <li>Schrijven en optimaliseren van complexe SQL-queries</li>
          <li>Ontwikkelen en testen van API's met Postman</li>
          <li>Testautomatisering met Playwright</li>
          <li>Samenwerken met functionele en technische teams binnen een Agile omgeving</li>
        </ul>
      </div>

      {/* Mysolution */}
      <div style={{ 
        marginBottom: '2rem', 
        padding: '1.5rem', 
        background: '#f8f9fa', 
        borderRadius: '8px',
        borderLeft: '4px solid #28a745'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <h3 style={{ margin: 0, color: '#28a745' }}>Business Central Developer</h3>
          <span style={{ color: '#666', fontSize: '0.9rem', fontWeight: '600' }}>2021 - 2025</span>
        </div>
        <p style={{ color: '#555', fontWeight: '600', marginBottom: '1rem' }}>Mysolution</p>
        <ul style={{ lineHeight: '1.8', color: '#555' }}>
          <li>Ontwikkelen en onderhouden van maatwerkoplossingen in Microsoft Business Central</li>
          <li>Programmeren in AL (Application Language)</li>
          <li>Data-analyse en rapportages met SQL</li>
          <li>Werken met Azure DevOps voor versiebeheer en CI/CD</li>
          <li>Actieve bijdrage aan stand-ups, sprintplanning en reviews</li>
          <li>Focus op kwaliteit, onderhoudbaarheid en continu verbeteren</li>
        </ul>
      </div>

      {/* IRS Salaris */}
      <div style={{ 
        marginBottom: '2rem', 
        padding: '1.5rem', 
        background: '#f8f9fa', 
        borderRadius: '8px',
        borderLeft: '4px solid #6c757d'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <h3 style={{ margin: 0, color: '#6c757d' }}>Medewerker Salarisadministratie</h3>
          <span style={{ color: '#666', fontSize: '0.9rem', fontWeight: '600' }}>2017 - 2021</span>
        </div>
        <p style={{ color: '#555', fontWeight: '600', marginBottom: '1rem' }}>IRS Salaris, Rijswijk</p>
        <ul style={{ lineHeight: '1.8', color: '#555' }}>
          <li>Werken met het Unit4-systeem</li>
          <li>Opstellen van Excel-rapportages</li>
          <li>Zorgvuldig omgaan met vertrouwelijke data</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
