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
import StatsSection from '../About/AboutComponents/StatsSection';
import CaseStudySection from './pageComponents/CaseStudySection';
import ConsultationSection from './pageComponents/ConsultationSection';
import ExpertiseSection from './pageComponents/ExpertiseSection';

import ExpertsSection from './pageComponents/ExpertsSection';
import TestimonialsSection from './pageComponents/TestimonialsSection';
import ContactForm from '../Contact/LetsTalkComponent.jsx/ContactForm';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HomeHeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        
        <PricingSection />
        <PricingCTASection />
        <FeaturesSection />
        <HowItWorksSection />
        <CaseStudySection />
        <ConsultationSection />
        <ExpertiseSection />
        <ContactForm />
        <ExpertsSection />
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;