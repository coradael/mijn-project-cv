import React from 'react';

const Contact = () => {
  return (
    <section style={{
      background: 'white',
      color: 'black',
      padding: '2rem',
      borderRadius: '15px',
      margin: '1rem 0',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
    }}>
      <h2>Contact</h2>
      <p>Je kunt contact met mij opnemen via:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '1rem 0' }}>📧 Email: coradael@gmail.com</li>
        <li style={{ margin: '1rem 0' }}>📱 Telefoon: 06-14287434</li>
        <li style={{ margin: '1rem 0' }}>
          💼 LinkedIn: <a 
            href="https://www.linkedin.com/in/elí-coronel-5a9754114" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#212185ff', textDecoration: 'underline' }}
          >
            Elí Coronel
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
