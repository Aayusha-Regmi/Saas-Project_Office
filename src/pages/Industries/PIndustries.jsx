import React from 'react';
import IndustryHeader from '../../components/common/IndustryHeader';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import HeroSection from '../../components/common/IndustryHeroSection';
import IndustrySection from './industryComponent/IndustrySection';
import ContactCTA from './industryComponent/ContactCTA';

const Industries = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <IndustryHeader />
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          title="Industries" 
          breadcrumb="Home>>Industries" 
        />
        
        <IndustrySection />
        
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Industries;