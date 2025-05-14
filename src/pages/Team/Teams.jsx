import React from 'react';
import PrimaryHeader from '../../components/common/PrimaryHeader';
import Footer from '../../components/common/Footer';
import SecondaryHeroSection from '../../components/common/SecondaryHeroSection';
import TeamSection from './TeamsComponent/TeamSection';
import TopHeader from '../../components/common/TopHeader';

const Teams = () => {
  const breadcrumbItem = [
    { label: 'Home', path: '/' },
    { label: 'Team', path: '/teams',className:'text-red-500' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <PrimaryHeader />
      
      <main className="flex-grow">
        <SecondaryHeroSection 
          title="Team" 
          breadcrumbItem={breadcrumbItem} 
        />
        
        <TeamSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Teams;