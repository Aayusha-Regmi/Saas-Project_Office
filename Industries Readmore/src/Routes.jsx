import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import BankingFinancialServicesPage from './pages/BankingFinancialServices';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/banking-financial-services" element={<BankingFinancialServicesPage />} />
        <Route path="/" element={<BankingFinancialServicesPage />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;