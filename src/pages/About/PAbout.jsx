import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/AboutHeroSection';
import AboutSection from './AboutComponents/AboutSection';
import StatsSection from './AboutComponents/StatsSection';
import TestimonialsSection from './AboutComponents/TestimonialsSection';
import TeamSection from './AboutComponents/TeamSection';
import PartnersSection from './AboutComponents/PartnersSection';
import TopHeader from '../../components/common/TopHeader';


const AboutUsPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' ,className:'text-red-500'},
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />

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