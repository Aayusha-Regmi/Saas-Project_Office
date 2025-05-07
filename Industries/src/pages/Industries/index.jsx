import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import IndustrySection from './components/IndustrySection';
import ContactCTA from './components/ContactCTA';

const Industries = () => {
  return (
    <div className="min-h-screen flex flex-col">
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