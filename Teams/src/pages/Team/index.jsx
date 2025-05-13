import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import TeamSection from './TeamSection';

const TeamPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Team', path: '/team' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          title="Team" 
          breadcrumbItems={breadcrumbItems} 
        />
        
        <TeamSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamPage;