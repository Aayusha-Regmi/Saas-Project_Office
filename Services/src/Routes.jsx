import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import ServicesPage from './pages/Services';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/" element={<ServicesPage />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;