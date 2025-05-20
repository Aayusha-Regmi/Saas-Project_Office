import React from 'react';
import { useParams } from 'react-router-dom';
import BankingandFinances from './Pages/BankingandFinances/BankingandFinance';
import Manufacturing from './Pages/Manufacturing/Manufacturing';
import NGO_INGO from './Pages/NGO_INGO/NGO_INGO';
import TradingandRetail from './Pages/TradingandRetail/TradingandRetail';
import TravelTourismandHotel from './Pages/TravelTourismandHotel/TravelTourismandHotel';
import HospitalandEducationIndustry from './Pages/HospitalandEducationIndustry/HospitalandEducationIndustry';
import HydropowerandConstruction from './Pages/HydropowerandConstruction/HydropowerandConstruction';
import ElectronicsandCommunicationIndustry from './Pages/ElectronicsandCommunicationIndustry/ElectronicsandCommunicationIndustry';
import TopHeader from '@/components/common/TopHeader';
import PrimaryHeader from '@/components/common/PrimaryHeader';
import SecondaryHeroSection from '@/components/common/SecondaryHeroSection';
import Footer from '@/components/common/Footer';
import ContactCTA from '../industryComponent/ContactCTA';
import IndustriesSection from './InsidePageSecondaryComponent/IndustriesSection';

const InsidePagesMain = () => {
  const { page } = useParams();

  const breadcrumbItem = [
    { label: 'Home', path: '/' },
    { label: 'Industries', path: '/industries', className:'text-red-500' },
  ];

  const renderContent = () => {
    switch (page) {
      case 'banking':
        return <BankingandFinances />;
      case 'manufacturing':
        return <Manufacturing />;
      case 'ngo-ingo':
        return <NGO_INGO />;
      case 'trading':
        return <TradingandRetail />;
      case 'travel':
        return <TravelTourismandHotel />;
      case 'hospital':
        return <HospitalandEducationIndustry />;
      case 'hydropower':
        return <HydropowerandConstruction />;
      case 'electronics':
        return <ElectronicsandCommunicationIndustry />;
      default:
        return <BankingandFinances />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader/>
      <PrimaryHeader/>
    
      <SecondaryHeroSection 
        title="Industries" 
        breadcrumbItem={breadcrumbItem} 
      />
        
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 mb-12 gap-8">
         
          
          {/* Main Content */}
          <div className="md:col-span-3">
            {renderContent()}
          </div>
          {/* Sidebar */}
          <div className="md:col-span-1">
            <IndustriesSection />
          </div>
        </div>
        
      </div>
      <ContactCTA/>
      <Footer />
    </div>
  );
};

export default InsidePagesMain;

