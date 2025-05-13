import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import SecondaryHeroSection from '../../components/common/SecondaryHeroSection';
import InsightsCardsMain from './InsightsComponent/InsightsCardsMain';
import TopHeader from '../../components/common/TopHeader';

const InsightsPage = () => {
  const breadcrumbItem = [
    { label: 'Home', path: '/' },
    { label: 'Insights', path: '/insights', className:'text-red-500' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <SecondaryHeroSection 
          title="Insights" 
          breadcrumbItem={breadcrumbItem} 
        />
        
        {/* Main Content */}
        <section className="bg-[#eaf8ff] py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Insights Header */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-[30px] py-4 px-8 flex items-center">
                <div className="bg-[#22a8ff] w-14 h-14 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl font-semibold text-white">%</span>
                </div>
                <h2 className="text-3xl font-semibold text-[#32b5fd]">Insights</h2>
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