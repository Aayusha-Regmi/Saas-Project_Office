import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import AboutUsPage from './pages/AboutUs';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutUsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;