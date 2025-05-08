import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import CorporateTaxPlanningCaseStudy from './pages/CaseStudy/CorporateTaxPlanning';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/case-study/corporate-tax-planning" element={<CorporateTaxPlanningCaseStudy />} />
        {/* Redirect from root to case study for this single-page example */}
        <Route path="/" element={<CorporateTaxPlanningCaseStudy />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;