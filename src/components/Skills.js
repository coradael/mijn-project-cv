import React, { useState } from 'react';

const Skills = () => {
  const [open, setOpen] = useState(false);

  return (
    <section>
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