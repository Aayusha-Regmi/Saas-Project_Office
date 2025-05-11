import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import RequestForProposalForm from './pages/RequestForProposal';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RequestForProposalForm />} />
        <Route path="/request-for-proposal" element={<RequestForProposalForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;