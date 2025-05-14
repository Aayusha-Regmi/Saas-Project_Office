import React from 'react';
import Footer from '../../components/common/Footer';
import SecondaryHeroSection from '../../components/common/SecondaryHeroSection';
import InsightsCardsMain from './InsightsComponent/InsightsCardsMain';
import TopHeader from '../../components/common/TopHeader';
import PrimaryHeader from '../../components/common/PrimaryHeader';

const InsightsPage = () => {
  const breadcrumbItem = [
    { label: 'Home', path: '/' },
    { label: 'Insights', path: '/insights', className:'text-red-500' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <PrimaryHeader />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <SecondaryHeroSection 
          title="Insights" 
          breadcrumbItem={breadcrumbItem} 
        />
        
        {/* Main Content */}
        <section className="bg-[#eaf8ff] py-12 md:py-20">
        <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-gray-600 rounded-xl">
            <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold">%</span>
            </div>
            <span className="text-base font-semibold text-blue-500 px-4">Insights</span>
          </div>
        </div>
            
            {/* Section Title */}
            <h2 className="text-4xl font-semibold text-[#071e45] text-center mb-16">
              Let's Check Our <span className="text-[#32b5fd]">Insights</span>
            </h2>
            
            {/* Insights Cards */}
            <InsightsCardsMain/>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InsightsPage;