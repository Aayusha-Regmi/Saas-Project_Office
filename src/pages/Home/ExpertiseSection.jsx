import React from 'react';
import Button from '../../components/ui/Button';

const ExpertiseSection = () => {
  const benefits = [
    {
      id: 1,
      title: 'Affordable Cost',
      description: 'There are many variations of passages available the majority have suffered alteration in some by injected humour.',
      icon: '/images/img_money_1.svg'
    },
    {
      id: 2,
      title: 'Client Investment',
      description: 'There are many variations of passages available the majority have suffered alteration in some by injected humour.',
      icon: '/images/img_investment_1.svg'
    },
    {
      id: 3,
      title: 'Save Your Money',
      description: 'There are many variations of passages available the majority have suffered alteration in some by injected humour.',
      icon: '/images/img_money2_1.svg'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-gray-600 rounded-xl">
            <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold">%</span>
            </div>
            <span className="text-base font-semibold text-blue-500 px-4">Why Choose Us</span>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-blue-800 text-center mb-4">
          We Deliver Expertise You
        </h2>
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-8">
          Can Trust Our Service
        </h2>

        <p className="text-xl font-semibold text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Finance Minister Barshaman Pun has tabled a budget of<br />
          Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <img src="/images/img_image.png" alt="Tax Services" className="w-full h-auto rounded-full" />
            <div className="relative -mt-16 ml-64">
              <div className="bg-white w-[222px] h-[221px] rounded-full p-3">
                <img src="/images/img_image_199x199.png" alt="Tax Services" className="w-full h-full rounded-full" />
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold text-blue-800 mb-8">
              Maximize Your Tax And<br />Savings With Us
            </h2>
            
            <p className="text-xl font-semibold text-gray-400 mb-8">
              Finance Minister Barshaman Pun has tabled a budget of<br />
              Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament.
            </p>
            
            <div className="space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex">
                  <div className="mr-6">
                    <img src={benefit.icon} alt={benefit.title} className="w-[62px] h-[62px]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">{benefit.title}</h3>
                    <p className="text-lg text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              variant="primary" className="mt-8 flex items-center"
            >
              Discover More
              <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;