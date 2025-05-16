import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import Sidebar from '../../components/common/Sidebar';
import Button from '../../components/ui/Button';


const BankingFinancialServicesPage = () => {
  const [email, setEmail] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleRequestProposal = () => {
    alert('Request for proposal submitted!');
  };
  
  const handleContactUs = () => {
    alert('Contact form will be displayed!');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection 
          title="Industries" subtitle="Banking & Financial Service"
          breadcrumbs={[
            { label: 'Home', link: '/' },
            { label: 'Industries', link: '/industries' },
            { label: 'Banking & Financial Service' }
          ]}
        />
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar - Industry Categories */}
            <div className="md:col-span-1">
              <Sidebar activeCategory="Banking & Financial Service" />
            </div>
            
            {/* Main Content Area */}
            <div className="md:col-span-2 space-y-8">
              {/* CTA Buttons */}
              <div className="space-y-4">
                <Button 
                  variant="primary" size="large" className="w-full py-4 text-center flex justify-center items-center bg-[#22a8ff]"
                  onClick={handleRequestProposal}
                >
                  REQUEST FOR PROPOSAL
                </Button>
                
                <Button 
                  variant="secondary" size="large" className="w-full py-4 text-center flex justify-center items-center bg-[#030f89]"
                  onClick={() => {}}
                >
                  INDUSTRIES
                </Button>
              </div>
              
              {/* Industry Content would go here */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold text-[#071e45] mb-4">Banking & Financial Services</h2>
                <p className="text-gray-700 mb-4">
                  Our specialized services for the Banking & Financial sector are designed to help institutions navigate complex regulatory environments, optimize operations, and drive growth in a competitive landscape.
                </p>
                <p className="text-gray-700 mb-4">
                  We provide comprehensive solutions including tax planning, audit support, regulatory compliance, risk management, and strategic advisory services tailored specifically for financial institutions.
                </p>
                <p className="text-gray-700">
                  With our deep industry expertise, we help banks, credit unions, investment firms, and other financial service providers achieve operational excellence while maintaining compliance with evolving regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Help Section */}
        <div className="bg-white py-16 text-center">
          <h2 className="text-4xl font-semibold text-[#071e45] mb-8">How can we help you?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-4xl mx-auto px-4">
            <Button 
              variant="primary" size="large" className="py-3 px-12 bg-[#32b5fd]"
              onClick={handleContactUs}
            >
              CONTACT US
            </Button>
            <Button 
              variant="secondary" size="large" className="py-3 px-12 bg-[#04108a]"
              onClick={handleRequestProposal}
            >
              REQUEST FOR PROPOSAL
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BankingFinancialServicesPage;