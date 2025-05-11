import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import ProposalForm from './ProposalForm';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const RequestForProposal = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industries' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          title="Request For Proposal" 
          breadcrumbs={breadcrumbItems} 
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <ProposalForm />
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-[40px] font-semibold text-[#071e45] mb-12">
              How can we help you?
            </h2>
            
            <div className="flex justify-center space-x-6">
              <Link to="/contact">
                <Button 
                  variant="primary" 
                  className="w-[326px] h-[43px] flex items-center justify-center"
                >
                  <span className="text-[18px] font-bold">CONTACT US</span>
                </Button>
              </Link>
              
              <Link to="/request-for-proposal">
                <Button 
                  variant="secondary" 
                  className="w-[326px] h-[43px] flex items-center justify-center"
                >
                  <span className="text-[18px] font-bold">REQUEST FOR PROPOSAL</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RequestForProposal;