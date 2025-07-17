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
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
      <img 
        src="/images/photo.jpg" 
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
    </header>
  );
};

export default Header;