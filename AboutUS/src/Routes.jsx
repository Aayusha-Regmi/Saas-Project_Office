import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import PAbout from './pages/AboutUs/PAbout';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PAbout />} />
        <Route path="/about" element={<PAbout />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;