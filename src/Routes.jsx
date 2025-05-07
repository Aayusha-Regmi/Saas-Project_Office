import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import IndustriesPage from './pages/Industries/PIndustries';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/industries" element={<IndustriesPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;