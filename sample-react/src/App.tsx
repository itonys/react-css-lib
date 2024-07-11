import React from 'react';
import logo from './logo.svg';

import './App.css';

import Button from '@mui/material/Button';

function App() {
  const handleClick = () => {
    alert('Button was clicked!');
  };
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <h2>native</h2>
        <button onClick={handleClick}>native button</button>
        <button onClick={handleClick} className="color-surface-indigo-50">native button</button>
        <button onClick={handleClick} className="color-surface-indigo-100">native button</button>
        <h2>mui</h2>
        <Button onClick={handleClick} variant="contained">
          mui button
        </Button>
      </div>
    </div>
  );
}

export default App;
