import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import InsightsPage from './pages/Insights';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InsightsPage />} />
        <Route path="/insights" element={<InsightsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;