// App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ChatBox from './components/Chatbox'; // Ensure this is the correct import path
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <ChatBox/>
    </div>
  );
}

export default App;
