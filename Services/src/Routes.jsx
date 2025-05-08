import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import Services from './pages/Services/Services';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/services" element={<Services/>} />
        <Route path="/" element={<Services />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;