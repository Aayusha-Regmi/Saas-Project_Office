import React, { useState } from 'react';

const CaseStudySection = () => {
  const [activeTab, setActiveTab] = useState('taxAdvice');
  
  const caseStudies = {
    taxAdvice: {
      id: 1,
      title: 'Corporate Tax Planning',
      image: '/images/img_mask_group.png',
      category: 'Tax Advice'
    },
    taxPlanning: {
      id: 2,
      title: 'Corporate Tax Planning',
      image: '/images/img_mask_group.png',
      category: 'Tax Planning'
    },
    personalTax: {
      id: 3,
      title: 'Corporate Tax Planning',
      image: '/images/img_mask_group.png',
      category: 'Personal Tax'
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-gray-600 rounded-xl">
            <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold">%</span>
            </div>
            <span className="text-base font-semibold text-blue-500 px-4">Case Study</span>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-blue-800 text-center mb-16">
          Recent Completed Award<br />Winning Case Study
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative">
            <img src={caseStudies.taxAdvice.image} alt="Case Study" className="w-full h-auto rounded-md" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="absolute -top-16 left-0">
                <div className="bg-blue-500 w-[67px] h-[67px] rounded-full flex items-center justify-center">
                  <img src="/images/img_vector_30x22.svg" alt="Icon" className="w-[30px] h-[22px]" />
                </div>
              </div>
              <p className="text-base font-semibold text-blue-500 mb-2">{caseStudies.taxAdvice.category}</p>
              <h3 className="text-lg font-extrabold text-blue-800">{caseStudies.taxAdvice.title}</h3>
            </div>
          </div>

          <div className="relative">
            <img src={caseStudies.taxPlanning.image} alt="Case Study" className="w-full h-auto rounded-md" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-base font-semibold text-blue-500 mb-2">{caseStudies.taxPlanning.category}</p>
              <h3 className="text-lg font-extrabold text-blue-800">{caseStudies.taxPlanning.title}</h3>
            </div>
          </div>

          <div className="relative">
            <img src={caseStudies.personalTax.image} alt="Case Study" className="w-full h-auto rounded-md" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-base font-semibold text-blue-500 mb-2">{caseStudies.personalTax.category}</p>
              <h3 className="text-lg font-extrabold text-blue-800">{caseStudies.personalTax.title}</h3>
            </div>
            <div className="absolute -bottom-8 right-6">
              <div className="bg-blue-500 w-[67px] h-[67px] rounded-full flex items-center justify-center">
                <img src="/images/img_vector_2.svg" alt="Icon" className="w-[30px] h-[22px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;