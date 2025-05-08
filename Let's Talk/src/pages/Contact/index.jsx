import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import ContactInfoCards from './ContactInfoCards';
import ContactForm from './ContactForm';
import MapSection from './MapSection';

const ContactPage = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Insights', link: '/insights' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          title="Contact Us" 
          breadcrumbs={breadcrumbs} 
        />
        
        <ContactInfoCards />
        <ContactForm />
        <MapSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;