import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import ServiceCards from './ServiceCards';

const ServicesPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          title="Services" 
          breadcrumbItems={breadcrumbItems}
          backgroundImage="/images/img_image.png"
        />
        
        <section className="bg-[#EAF8FF] py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Services Title Section */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-[30px] flex items-center px-8 py-4 relative">
                <div className="bg-[#22A8FF] w-[57px] h-[57px] rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-semibold">%</span>
                </div>
                <h2 className="text-[#32B5FD] text-3xl font-semibold ml-6">Our Services</h2>
              </div>
            </div>
            
            {/* Main Heading */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-semibold text-[#071E45] mb-2">What We Offers To Our</h1>
              <h1 className="text-4xl font-bold text-[#22A8FF]">Customers</h1>
            </div>
            
            {/* Service Cards */}
            <ServiceCards />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;