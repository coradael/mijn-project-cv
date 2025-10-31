// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ChatBox from './components/Chatbox';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'Over mij', icon: '👨🏽' },
    { id: 'experience', label: 'Ervaring', icon: '💼' },
    { id: 'skills', label: 'Vaardigheden', icon: '⚡' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '2rem',
      minHeight: '100vh'
    }}>
      <Header />
      
      {/* Tab Navigation */}
      <div style={{
        background: 'white',
        borderRadius: '15px 15px 0 0',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        margin: '1rem 0 0 0',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #e0e0e0'
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                padding: '1rem',
                border: 'none',
                background: activeTab === tab.id ? '#007bff' : 'white',
                color: activeTab === tab.id ? 'white' : '#333',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: activeTab === tab.id ? 'bold' : 'normal',
                transition: 'all 0.3s ease',
                borderBottom: activeTab === tab.id ? '3px solid #0056b3' : '3px solid transparent'
              }}
              onMouseOver={(e) => {
                if (activeTab !== tab.id) {
                  e.target.style.backgroundColor = '#f8f9fa';
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== tab.id) {
                  e.target.style.backgroundColor = 'white';
                }
              }}
            >
              <span style={{ marginRight: '8px' }}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div style={{
          padding: '2rem',
          minHeight: '400px',
          background: 'white',
          borderRadius: '0 0 15px 15px'
        }}>
          {renderTabContent()}
        </div>
      </div>
      
      <ChatBox />
    </div>
  );
}

export default App;
