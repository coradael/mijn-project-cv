import React, { useState } from 'react';

const ChatBox = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '👋 Hallo! Ik ben je CV-assistent. Waar wil je meer over weten?' }
  ]);
  const [input, setInput] = useState('');

  const quickOptions = ['ervaring', 'skills', 'opleiding', 'cv downloaden'];

  const responses = {
    'ervaring': 'Ik heb 3 jaar ervaring als Microsoft Business Central developer (Application Language) en ook heb ik ervaring met React en JavaScript.',
    'skills': 'Mijn belangrijkste skills zijn: goede focus en probleemoplossend vermogen, nieuwsgierigheid en leergierigheid, teamwork en communicatie.',
    'opleiding': 'Ik heb een HBO Informatica diploma.',
    'hallo': 'Hallo! Leuk dat je hier bent. 😊',
    'cv downloaden': (
      <span>
        Je kunt de CV van Elí hier downloaden:<br />
        <a href="/EliCoronel.pdf" download="cv-Elí-Coronel.pdf">
          <button style={{marginTop: '8px'}}>📄 Download CV</button>
        </a>
      </span>
    ),
  };

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

  return (
    <>
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
            <div key={i} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
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
                wordWrap: 'break-word'
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
              border: 'none'
            }}
          >
            Verstuur
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBox;