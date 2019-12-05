import React, { useState } from 'react';
import './greeting.css';

// Greeting component to display greeting text and name which is stored in state, for later flexibility
function Greeting() {
  const [name, setName] = useState('Armin Dizdarevic');

  return (
    <div id="greeting">
      <h1 id="greeting-text">Hello, my name is</h1>
      <h1 id="greeting-name">{name}</h1>
    </div>
  );
}

export default Greeting;
