import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import CaseDetailsSidebar from './SecondaryComponents/CaseDetailsSidebar';
import TaxPlanning from './CSContentPages/CorporateTaxPlanning/TaxPlanning';
import PersonalTax from './CSContentPages/PersonalTax/PersonalTax';
import TaxAuditSupport from './CSContentPages/TaxAuditSupport/TaxAuditSupport';
import InternationalTax from './CSContentPages/InternationalTax/InternationalTax';
import TaxAdvisorySupport from './CSContentPages/TaxAdvisorySupport/TaxAdvisorySupport';
import InvestmentAdvisor from './CSContentPages/InvestmentAdvisor/InvestmentAdvisor';
import InsuranceTax from './CSContentPages/InsuranceTax/InsuranceTax';
import CorporateTax from './CSContentPages/CorporateTax/CorporateTax';

const CaseStudy = () => {
  const { page } = useParams();

  const renderContent = () => {
    switch (page) {
      case 'personal-tax':
        return <PersonalTax />;
      case 'tax-audit-support':
        return <TaxAuditSupport />;
      case 'international-tax':
        return <InternationalTax />;
      case 'tax-advisory-support':
        return <TaxAdvisorySupport />;
      case 'investment-advisor':
        return <InvestmentAdvisor />;
      case 'insurance-tax':
        return <InsuranceTax />;
      case 'corporate-tax':
        return <CorporateTax />;
      case 'corporate-tax-planning':
        return <TaxPlanning />;
      default:
        return <TaxPlanning />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Banner */}
      <div 
        className="w-full h-80 bg-cover bg-center relative" style={{ backgroundImage: 'url("/images/img_image.png")' }}
      >
        <div className="absolute inset-0 bg-blue-700 bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl font-extrabold mb-2">Case Study Single</h1>
          <p className="text-lg font-extrabold">Home&gt;&gt;Services</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <CaseDetailsSidebar />
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CaseStudy;