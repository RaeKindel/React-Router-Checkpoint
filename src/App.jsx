import React from 'react';
import Movielist from './components/Movielist';
import { Routes, Route } from 'react-router-dom';
import Moviepage from './components/Moviepage';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Movielist />} />
      <Route path="/Desc" element={<Moviepage />} />
    </Routes>
  );
}

export default App 
