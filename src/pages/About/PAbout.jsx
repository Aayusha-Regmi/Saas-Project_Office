import React from 'react';
import Footer from '../../components/common/Footer';
import SecondaryHeroSection from '../../components/common/SecondaryHeroSection';
import AboutSection from './AboutComponents/AboutSection';
import StatsSection from './AboutComponents/StatsSection';
import TestimonialsSection from './AboutComponents/TestimonialsSection';
import TeamSection from './AboutComponents/TeamSection';
import PartnersSection from './AboutComponents/PartnersSection';
import TopHeader from '../../components/common/TopHeader';
import PrimaryHeader from '../../components/common/PrimaryHeader';


const AboutUsPage = () => {
  const breadcrumbItem = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' ,className:'text-red-500'},
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />

      <PrimaryHeader />
      
      <main className="flex-grow">
        <SecondaryHeroSection 
          title="About Us" 
          breadcrumbItem={breadcrumbItem} 
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