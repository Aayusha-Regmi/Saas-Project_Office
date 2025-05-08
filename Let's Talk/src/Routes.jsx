import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import ContactPage from './pages/Contact';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;