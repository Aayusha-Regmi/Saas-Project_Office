import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import PricingSection from './PricingSection';

const PricingPlansPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Calculations', path: '/calculations' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          title="Calculations" 
          breadcrumbItems={breadcrumbItems} 
        />
        
        <PricingSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPlansPage;