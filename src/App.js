import React from 'react';

import logo from './logo.svg';
import './App.css';

import Today from './components/Today'
import Goals from './components/Goals'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Router>
        <div className="NavBar">
        <nav>
            <ul>
              <li>
                <Link to="/">Today</Link>
              </li>
              <li>
                <Link to="/focus">Focus</Link>
              </li>
              <li>
                <Link to="/goals">Goals</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/goals">
            <Goals />
          </Route>
          <Route path="/focus">
            <Focus />
          </Route>
          <Route path="/">
            <Today />
          </Route>
          </Switch>
      </Router>
    </div>
    
  );
}



function Focus() {
  return <h2>Focus</h2>;
}

export default App;
