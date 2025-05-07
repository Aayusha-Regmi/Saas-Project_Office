import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HomeHeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import PricingSection from './PricingSection';
import PricingCTASection from './PricingCTASection';
import FeaturesSection from './FeaturesSection';
import HowItWorksSection from './HowItWorksSection';
import CaseStudySection from './CaseStudySection';
import ConsultationSection from './ConsultationSection';
import ExpertiseSection from './ExpertiseSection';
import ContactSection from './ContactSection';
import ExpertsSection from './ExpertsSection';
import TestimonialsSection from './TestimonialsSection';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HomeHeroSection />
        <AboutSection />
        <ServicesSection />
        
        <PricingSection />
        <PricingCTASection />
        <FeaturesSection />
        <HowItWorksSection />
        <CaseStudySection />
        <ConsultationSection />
        <ExpertiseSection />
        <ContactSection />
        <ExpertsSection />
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;