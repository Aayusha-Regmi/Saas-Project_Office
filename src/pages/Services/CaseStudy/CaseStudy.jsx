import React from 'react';
import { useParams } from 'react-router-dom';
import CaseDetailsSidebar from './SecondaryComponents/CaseDetailsSidebar';
import TaxPlanning from './CSContentPages/CorporateTaxPlanning/TaxPlanning';
import PersonalTax from './CSContentPages/PersonalTax/PersonalTax';
import TaxAuditSupport from './CSContentPages/TaxAuditSupport/TaxAuditSupport';
import InternationalTax from './CSContentPages/InternationalTax/InternationalTax';
import TaxAdvisory from './CSContentPages/TaxAdvisorySupport/TaxAdvisory';
import InvestmentAdvisor from './CSContentPages/InvestmentAdvisor/InvestmentAdvisor';
import InsuranceTax from './CSContentPages/InsuranceTax/InsuranceTax';
import CorporateTax from './CSContentPages/CorporateTax/CorporateTax';
import TopHeader from '@/components/common/TopHeader';
import PrimaryHeader from '@/components/common/PrimaryHeader';
import SecondaryHeroSection from '@/components/common/SecondaryHeroSection';
import Footer from '@/components/common/Footer';

const CaseStudy = () => {
  const { page } = useParams();

  const breadcrumbItem = [
    { label: 'Home', path: '/' },
    { label: 'Case Study', path: '/caseStudy', className:'text-red-500' },
  ];

  const renderContent = () => {
    switch (page) {
      case 'personal-tax':
        return <PersonalTax />;
      case 'tax-audit-support':
        return <TaxAuditSupport />;
      case 'international-tax':
        return <InternationalTax />;
      case 'tax-advisory':
        return <TaxAdvisory/>;
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
      <TopHeader/>
      <PrimaryHeader/>
      
      {/* Hero Banner */}
      <SecondaryHeroSection 
        title="Case-Study" 
        breadcrumbItem={breadcrumbItem} 
      />
        
      
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