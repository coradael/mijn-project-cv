import React, { useState } from 'react';

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <h2 
        style={{ cursor: 'pointer', userSelect: 'none' }}
        onClick={() => setOpen(!open)}
        title="Klik om te openen/sluiten"
      >
        Over mij {open ? '▲' : '▼'}
      </h2>
      {open && (
        <p>
          Ik ben een enthousiaste developer met een groot doorzettingsvermogen.
          Met mijn sterke focus en creativiteit los ik complexe issues op. Ik vind het
          belangrijk om grote problemen simpel te maken om betere kwaliteit te
          leveren. In alles wat ik onderneem, streef ik ernaar mijn best te doen en
          mezelf continu te verbeteren.
          Ik ben een rustige en vriendelijke persoon en ik vind betrokkenheid binnen
          het team belangrijk. Natuurlijk is het ook leuk om naast werk samen leuke
          dingen te doen, zoals een potje voetballen.
        </p>
      )}
    </section>
  );
};

export default About;