import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2 style={{ marginTop: 0, color: '#333' }}>Contact</h2>
      <p>Je kunt contact met mij opnemen via:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '1rem 0' }}>📧 Email: coradael@gmail.com</li>
        <li style={{ margin: '1rem 0' }}>📱 Telefoon: 06-14287434</li>
        <li style={{ margin: '1rem 0' }}>
          💼 LinkedIn: <a 
            href="https://www.linkedin.com/in/elí-coronel-5a9754114" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#007bff', textDecoration: 'underline' }}
          >
            Elí Coronel
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
