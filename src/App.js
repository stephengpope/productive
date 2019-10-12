import React from 'react';

import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Greetings />
      <Welcome />
    </div>
  );
}

export default App;
