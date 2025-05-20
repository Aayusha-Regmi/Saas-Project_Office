import React from 'react';

import IndustriesSection from '../../InsidePageSecondaryComponent/IndustriesSection';
import Button from '@/components/ui/Button';

const BankingFinancialServicesPage = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left Column */}
        <div className="md:col-span-2">
          {/* Section 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-[#071e45] mb-4">
              Banking & Financial Services Solutions
            </h2>
            <p className="text-gray-700 text-xl mb-4">
              Our comprehensive solutions for the banking and financial services industry are designed to help institutions navigate complex regulatory environments, optimize operations, and deliver exceptional customer experiences.
            </p>
            <p className="text-gray-700 text-xl mb-4">
              With our deep industry expertise and cutting-edge technology, we provide tailored services that address the unique challenges faced by banks, credit unions, investment firms, and other financial institutions.
            </p>
            <p className="text-gray-700 text-xl">
              From tax planning and compliance to digital transformation and risk management, our team of specialists works closely with you to develop strategies that drive growth, enhance efficiency, and ensure regulatory compliance.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-[#071e45] mb-4">
              Key Services for Financial Institutions
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl mb-6">
              <li>Tax planning and compliance for financial institutions</li>
              <li>Regulatory reporting and compliance</li>
              <li>Risk assessment and management</li>
              <li>Financial statement preparation and analysis</li>
              <li>Mergers and acquisitions advisory</li>
              <li>Digital transformation consulting</li>
              <li>Internal audit and control systems</li>
              <li>Anti-money laundering (AML) compliance</li>
            </ul>

            <Button 
              variant="secondary" 
              onClick={() => window.location.href = '/services/financial-institutions'}
              className="mt-4"
            >
              Learn More About Our Financial Services
            </Button>
          </div>
        </div>

        {/* Right Column */}
        
      </div>
    </div>
  );
};

export default BankingFinancialServicesPage;
