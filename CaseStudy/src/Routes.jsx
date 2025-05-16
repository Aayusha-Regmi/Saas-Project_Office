import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components

import CaseStudy from './pages/CaseStudy/CorporateTaxPlanning/components/TaxPlanning/CaseStudy';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/case-study" element={<CaseStudy/>} />
        {/* Redirect from root to case study for this single-page example */}
        <Route path="/" element={<CaseStudy />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;