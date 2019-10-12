import React from 'react';

import logo from './logo.svg';
import './App.css';

import Today from './components/Today'
import Greetings from './components/Greetings'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <div class="NavBar">
        <a href="/">Today</a> | <a href="/">Focus</a> | <a href="/">Set and Plan Goals</a>
      </div>

      <Today />
    </div>
  );
}

export default App;
