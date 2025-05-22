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

        {/* Contact Us Section */}
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-gray-600 rounded-xl">
            <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold">%</span>
            </div>
            <span className="text-base font-semibold text-blue-500 px-4">Contact Us</span>
          </div>
        </div>
     
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-16">
          Contact Us
        </h2>

        <ContactForm style={{ marginTop: '-10rem' }} />



        <ExpertsSection />
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;