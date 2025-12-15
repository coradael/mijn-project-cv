import React, { useState, useEffect } from 'react';

const ChatBox = () => {
  const [open, setOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '👋 Hallo! Ik ben je CV-assistent. Waar wil je meer over weten, klick op een optie?' }
  ]);
  const [input, setInput] = useState('');

  const quickOptions = ['Ervaring', 'Skills', 'Opleiding', 'CV downloaden'];

  const responses = {
    'ervaring': (
      <div>
        <strong>Profource (2025 - Heden)</strong><br/>
        Developer - Technisch Consultant<br/>
        • Oracle Fusion-omgeving<br/>
        • SQL-queries & API's met Postman<br/>
        • Testautomatisering met Playwright<br/><br/>
        
        <strong>Mysolution (2021 - 2025)</strong><br/>
        Business Central Developer<br/>
        • AL (Application Language)<br/>
        • Azure DevOps & CI/CD<br/>
        • Agile/Scrum teamwork<br/><br/>
        
        <strong>IRS Salaris (2017 - 2021)</strong><br/>
        Medewerker Salarisadministratie<br/>
        • Unit4-systeem & Excel-rapportages
      </div>
    ),
    'skills': (
      <div>
        <strong>Backend & Data:</strong><br/>
        SQL, AL (Business Central), Java, Spring Boot<br/><br/>
        <strong>Frontend:</strong><br/>
        React, HTML5, CSS3, JavaScript<br/><br/>
        <strong>Tools:</strong><br/>
        Azure DevOps, GitHub, VS Code, Postman, Playwright<br/><br/>
        <strong>Werkwijze:</strong><br/>
        Agile/Scrum, Testgericht werken, CI/CD
      </div>
    ),
    'opleiding': (
      <div>
        <strong>HBO-ICT – Software Development</strong><br/>
        Hogeschool NOVI (2017-2022)<br/>
        • Java, Spring Boot, SQL<br/>
        • React, HTML5, CSS3<br/>
        • Python & R voor data-analyse<br/><br/>
        <strong>Management & Marketing</strong><br/>
        Universiteit Continental, Peru (2008-2014)
      </div>
    ),
    'hallo': 'Hallo! Leuk dat je hier bent. 😊',
    'cv downloaden': (
      <span>
        Je kunt de CV van Elí hier downloaden:<br />
        <a href="/EliCoronel.pdf" download="CV-Elí-Coronel.pdf">
          <button style={{
            marginTop: '8px',
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            📄 Download CV
          </button>
        </a>
      </span>
    ),
  };

  // Show welcome message after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSend = (text = input) => {
    if (!text.trim()) return;

    const userMessage = { sender: 'user', text };
    const key = text.toLowerCase();
    const botText =
      responses[key] ||
      'Sorry, dat snap ik niet. Probeer een van de opties hierboven.';
    const botResponse = { sender: 'bot', text: botText };

    setMessages([...messages, userMessage, botResponse]);
    setInput('');
  };

  const handleQuickOption = (option) => {
    handleSend(option);
  };

  const handleWelcomeClick = () => {
    setShowWelcome(false);
    setOpen(true);
  };

  const closeWelcome = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {/* Welcome popup */}
      {showWelcome && !open && (
        <div
          style={{
            position: 'fixed',
            right: '80px',
            bottom: '30px',
            zIndex: 1002,
            background: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            maxWidth: '280px',
            animation: 'slideIn 0.5s ease-out'
          }}
        >
          <button
            onClick={closeWelcome}
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              background: 'none',
              border: 'none',
              fontSize: '1.2rem',
              cursor: 'pointer',
              color: '#999'
            }}
          >
            ✕
          </button>
          <div style={{ marginTop: '5px' }}>
            <p style={{ margin: '0 0 0.5rem 0', color: '#333', fontWeight: '600' }}>
              👋 Hallo!
            </p>
            <p style={{ margin: '0 0 1rem 0', color: '#555', fontSize: '0.9rem' }}>
              Klik hier voor de CV van Elí te kunnen downloaden of andere opties te bekijken
            </p>
            <button
              onClick={handleWelcomeClick}
              style={{
                width: '100%',
                padding: '0.6rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Open CV Assistent
            </button>
          </div>
        </div>
      )}

      {/* Chat button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          right: open ? '320px' : '20px',
          bottom: '30px',
          zIndex: 1001,
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '1.5rem',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}
        title={open ? 'Sluit chat' : 'Open chat'}
      >
        {open ? '✖' : '💬'}
      </button>

      {/* Chat box */}
      <div
        style={{
          position: 'fixed',
          right: open ? '0' : '-400px',
          bottom: '0',
          width: '320px',
          height: '420px',
          background: 'white',
          borderLeft: '1px solid #ccc',
          boxShadow: '0 0 12px rgba(0,0,0,0.15)',
          borderRadius: '10px 0 0 0',
          transition: 'right 0.3s',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <h3 style={{ margin: '1rem 1rem 0.5rem 1rem', color: '#333' }}>
          <span role="img" aria-label="assistant" style={{ marginRight: '8px' }}>👨‍💻</span>
          CV Assistent
        </h3>
        
        {/* Quick Options */}
        <div style={{ margin: '0 1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {quickOptions.map((option) => (
            <button
              key={option}
              onClick={() => handleQuickOption(option)}
              style={{
                padding: '0.3rem 0.6rem',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ddd',
                borderRadius: '15px',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              {option}
            </button>
          ))}
        </div>

        <div style={{
          flex: 1,
          maxHeight: '200px',
          overflowY: 'auto',
          margin: '1rem 1rem 1rem 1rem',
          background: '#f9f9f9',
          padding: '1rem',
          borderRadius: '8px'
        }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              {msg.sender === 'bot' && (
                <span style={{ marginRight: '8px', fontSize: '1.5rem' }}>👨‍💻</span>
              )}
              <span style={{
                display: 'inline-block',
                backgroundColor: msg.sender === 'user' ? '#0c0d0dff' : '#eee',
                color: msg.sender === 'user' ? '#fff' : '#000',
                padding: '0.6rem 1rem',
                borderRadius: '20px',
                maxWidth: '75%',
                wordWrap: 'break-word',
                fontSize: '0.85rem',
                lineHeight: '1.4'
              }}>
                {typeof msg.text === 'string' ? msg.text : msg.text}
              </span>
            </div>
          ))}
        </div>
        <div style={{ padding: '0 1rem 1rem 1rem' }}>
          <input
            type="text"
            placeholder="Typ een vraag..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #ccc' }}
          />
          <button
            onClick={() => handleSend()}
            style={{
              marginTop: '0.5rem',
              width: '100%',
              padding: '0.6rem',
              borderRadius: '6px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Verstuur
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default ChatBox;