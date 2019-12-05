import React from 'react';
import Greeting from './Components/Greeting/Greeting';
import Icons from './Components/Icons/Icons';
import './App.css';

// Renders the main application which holds the greeting and icon components
function App() {
  return (
    <main id="container">
      <Greeting />
      <Icons />
    </main>
  );
}

export default App;
