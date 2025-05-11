import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import SecondaryHeroSection from '@/components/common/SecondaryHeroSection';
import ContactInfoCards from './LetsTalkComponent.jsx/ContactInfoCards';
import ContactForm from './LetsTalkComponent.jsx/ContactForm';
import MapSection from './LetsTalkComponent.jsx/MapSection';
import TopHeader from '@/components/common/TopHeader';

const LetsTalk = () => {
  const breadcrumbItem = [
    { label: 'Home', link: '/' },
    { label: 'Contact Us', link: '/contact',className:'text-red-500' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <TopHeader />
      <Header />
      <main className="flex-grow">
        <SecondaryHeroSection 
          title="Contact Us" 
          breadcrumbItem={breadcrumbItem} 
        />
        
        <ContactInfoCards />
        <ContactForm />
        <MapSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default LetsTalk;