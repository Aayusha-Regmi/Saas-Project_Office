import React from 'react';
import PrimaryHeader from '@/components/common/PrimaryHeader';
import Footer from '@/components/common/Footer';
import ProposalForm from './IndustryFormComponent/ProposalForm';
import ContactCTA from '@/pages/Industries/industryComponent/ContactCTA';
import TopHeader from '@/components/common/TopHeader';
import SecondaryHeroSection from '@/components/common/SecondaryHeroSection';

const IndustryForm = () => {
  const breadcrumbItem = [
    { label: 'Home', path: '/' },
    { label: 'Industries', path: '/industries', className:'text-red-500' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <PrimaryHeader />
      
      <main className="flex-grow">
        <SecondaryHeroSection 
          title="Request For Proposal" 
          breadcrumbItem={breadcrumbItem} 
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <ProposalForm />
          </div>
        </section>
        
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default IndustryForm;