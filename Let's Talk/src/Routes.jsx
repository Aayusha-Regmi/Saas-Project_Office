import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import LetsTalk from './pages/Contact/LetsTalk.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LetsTalk />} />
        <Route path="/lets-talk" element={<LetsTalk />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;