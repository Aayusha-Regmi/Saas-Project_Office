import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HomeHeroSection from './pageComponents/HeroSection';
import ServicesSection from './pageComponents/ServicesSection';
import AboutSection from './pageComponents/AboutSection';
import PricingSection from './pageComponents/PricingSection';
import PricingCTASection from './pageComponents/PricingCTASection';
import FeaturesSection from './pageComponents/FeaturesSection';
import HowItWorksSection from './pageComponents/HowItWorksSection';
import CaseStudySection from './pageComponents/CaseStudySection';
import ConsultationSection from './pageComponents/ConsultationSection';
import ExpertiseSection from './pageComponents/ExpertiseSection';
import ContactSection from './pageComponents/ContactSection';
import ExpertsSection from './pageComponents/ExpertsSection';
import TestimonialsSection from './pageComponents/TestimonialsSection';

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