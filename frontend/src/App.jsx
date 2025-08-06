import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Library from './pages/library';
import Community from './pages/community';
import Games from './pages/games';
import Classes from './pages/classes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="library" element={<Library />} />
        <Route path="community" element={<Community />} />
        <Route path="games" element={<Games />} />
        <Route path="classes" element={<Classes />} />
      </Route>
    </Routes>
  );
}

export default App;