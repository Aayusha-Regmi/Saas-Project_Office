import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import IndustryForm from './pages/RequestForProposal/IndustryForm';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndustryForm />} />
        <Route path="/request-for-proposal" element={<IndustryForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;