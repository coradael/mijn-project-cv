import React, { useState } from 'react';

const Header = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('coradael@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const handleCopyPhone = () => {
    navigator.clipboard.writeText('0614287434');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      background: '#0078D4',
      color: '#fff',
      padding: '2rem',
      borderRadius: '15px',
      margin: '1rem 0',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e0e0e0'
    }}>
      <div>
        <h1>Elí Coronel</h1>
        <p>Software Developer</p>
        <p>
          Email: coradael@gmail.com 
          <button 
            style={{ marginLeft: '10px', padding: '2px 8px', cursor: 'pointer', borderRadius: '5px', border: 'none', background: '#007bff', color: '#fff' }}
            onClick={handleCopyEmail}
            title="Copy email"
          >
            📋
          </button>
          {' '}|{' '}
           Tel: 06-14287434
          <button 
            style={{ marginLeft: '10px', padding: '2px 8px', cursor: 'pointer', borderRadius: '5px', border: 'none', background: '#007bff', color: '#fff' }}
            onClick={handleCopyPhone}
            title="Copy Phone Number"
          >
            📞
          </button>
          {copied && <span style={{ marginLeft: '8px', color: 'green' }}>Gekopieerd!</span>}
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img 
          src="/images/EliCoronel.jpg" 
          alt="Elí Coronel Logo" 
          className="header-logo"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '50%',
            transition: 'transform 0.3s',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.07)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          onError={e => { e.target.onerror = null; e.target.src = '/default-avatar.png'; }}
        />
      </div>
    </header>
  );
};

export default Header;