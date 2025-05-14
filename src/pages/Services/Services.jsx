import React from 'react';
import Footer from '../../components/common/Footer';
import SecondaryHeroSection from '../../components/common/SecondaryHeroSection';
import ServicesCards from './ServicesComponent/ServicePlans';
import TopHeader from '@/components/common/TopHeader';
import PrimaryHeader from '@/components/common/PrimaryHeader';

const ServicesPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services',className:'text-red-500' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader/>
      <PrimaryHeader />
      
      <main className="flex-grow">
        <SecondaryHeroSection 
          title="Services" 
          breadcrumbItem={breadcrumbItems}
          backgroundImage="/images/img_image.png"
        />
        
        <section className="bg-[#EAF8FF] py-12 md:py-20">
          <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-gray-600 rounded-xl">
            <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold">%</span>
            </div>
            <span className="text-base font-semibold text-blue-500 px-4">Our Services</span>
          </div>
        </div>
            
            {/* Main Heading */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-semibold text-[#071E45] mb-2">What We Offers To Our</h1>
              <h1 className="text-4xl font-bold text-[#22A8FF]">Customers</h1>
            </div>
            
            {/* Service Cards */}
            <ServicesCards />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;