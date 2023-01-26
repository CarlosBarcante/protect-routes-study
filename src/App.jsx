import React from 'react';

import './App.css';

import Nav from './components/Nav';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Lessons />
      <About />
    </div>
  )
}

export default App
