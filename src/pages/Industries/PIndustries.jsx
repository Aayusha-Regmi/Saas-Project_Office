import React from 'react';
import TopHeader from '../../components/common/TopHeader';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import IndustryHeroSection from '../../components/common/IndustryHeroSection';
import IndustrySection from './industryComponent/IndustrySection';
import ContactCTA from './industryComponent/ContactCTA';

const PIndustries = () => {
  const breadcrumbItem = [
    { label: 'Home', path: '/' },
    { label: 'Industries', path: '/industries', className:'text-red-500' },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      
      <TopHeader />
      <Header />
      
      <main className="flex-grow">
        <IndustryHeroSection 
          title="Industries" 
          breadcrumbItem={breadcrumbItem} 
        />
        
        <IndustrySection />
        
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default PIndustries;