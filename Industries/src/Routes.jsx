import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import IndustriesPage from './pages/Industries';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndustriesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;