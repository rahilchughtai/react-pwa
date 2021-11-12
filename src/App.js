import React from 'react';
import dhbwLogo from './assets/dhbwCoolersvg.svg'
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1> DHBW Chat App </h1>
        <img src={dhbwLogo} className="App-logo" alt="logo" />
      </header>

      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
    </div>
  );
}

export default App;
