import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import AboutSection from './AboutSection';
import StatsSection from './StatsSection';
import TestimonialsSection from './TestimonialsSection';
import TeamSection from './TeamSection';
import PartnersSection from './PartnersSection';

const AboutUsPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          title="About Us" 
          breadcrumbItems={breadcrumbItems} 
        />
        
        <AboutSection />
        <StatsSection />
        <TestimonialsSection />
        <TeamSection />
        <PartnersSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUsPage;