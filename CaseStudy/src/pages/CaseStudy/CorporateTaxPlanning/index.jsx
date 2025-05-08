import React from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import CaseDetailsSidebar from './components/CaseDetailsSidebar';
import ProjectContent from './components/ProjectContent';
import ProjectTips from './components/ProjectTips';
import OverviewSection from './components/OverviewSection';

const CorporateTaxPlanningCaseStudy = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <CaseDetailsSidebar />
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Featured Image */}
            <img 
              src="/images/img_image_39.png" alt="Corporate Tax Planning Case Study" className="w-full h-auto rounded-lg mb-10"
            />
            
            {/* Project Content */}
            <ProjectContent />
            
            {/* Project Tips */}
            <ProjectTips />
            
            {/* Overview & Challenges */}
            <OverviewSection />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CorporateTaxPlanningCaseStudy;