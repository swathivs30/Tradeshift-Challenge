import React from 'react';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <div className="weather-app">
      <header className="weather-app__header">
        <p>Dark Sky Weather App</p>
      </header>
      <Layout />
      <footer className="weather-app__footer"> credit for design: https://designbymuriel.com/Fried-Cookie-Studios</footer>
    </div>
  );
}

export default App;
