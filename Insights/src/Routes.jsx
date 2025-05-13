import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import Insights from './pages/Insights/Insights';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Insights />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;