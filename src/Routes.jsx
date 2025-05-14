import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import IndustriesPage from './pages/Industries/PIndustries';
import AboutPage from './pages/About/PAbout';
import ServicesPage from './pages/Services/Services';
import TestimonialsSection from './pages/About/AboutComponents/TestimonialsSection';
import LetsTalk from "./pages/Contact/LetsTalk";
import IndustryForm from './pages/Industries/IndustryForm/IndustryForm';
import Insights from './pages/Insights/Insights';
import Teams from './pages/Team/Teams';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/industry-form" element={<IndustryForm />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/testimonials" element={<TestimonialsSection />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<LetsTalk />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;