import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import PricingPlansPage from './pages/PricingPlans';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PricingPlansPage />} />
        <Route path="/pricing-plans" element={<PricingPlansPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;