import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Loading spinner/component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-lightBlue"></div>
    <p className="ml-2 text-primary-darkBlue font-semibold">Loading...</p>
  </div>
);

// Lazy load page components
const HomePage = lazy(() => import('./pages/Home'));
const IndustriesPage = lazy(() => import('./pages/Industries/PIndustries'));
const AboutPage = lazy(() => import('./pages/About/PAbout'));
const ServicesPage = lazy(() => import('./pages/Services/Services'));
const TestimonialsSection = lazy(() => import('./pages/About/AboutComponents/TestimonialsSection'));
const LetsTalk = lazy(() => import('./pages/Contact/LetsTalk'));
const IndustryForm = lazy(() => import('./pages/Industries/IndustryForm/IndustryForm'));
const Insights = lazy(() => import('./pages/Insights/Insights'));
const Teams = lazy(() => import('./pages/Team/Teams'));
const CaseStudy = lazy(() => import('./pages/Services/CaseStudy/CaseStudy'));
const InsidePagesMain = lazy(() => import('./pages/Industries/IndustryInsidePages/InsidePagesMain'));

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Dynamic route with a parameter */}
        <Route path="/caseStudy/:page" element={<CaseStudy />} />
        <Route path="/caseStudy" element={<CaseStudy />} />
        <Route path="/industries/:page" element={<InsidePagesMain />} />
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