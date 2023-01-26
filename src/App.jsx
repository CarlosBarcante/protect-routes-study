import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import Nav from './components/Nav';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import About from './pages/About';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/lessons', element: <Lessons /> },
  { path: '/about', element: <About /> },
])

function App() {
  return (
    <div className="App">
      <Nav />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
