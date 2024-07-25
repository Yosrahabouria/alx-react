import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import logo from './holberton_logo.png';  // Ensure this logo exists or update the path

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>{getFooterCopy(false)} - {getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
