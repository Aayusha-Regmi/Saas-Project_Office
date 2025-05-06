import React from 'react';
import Button from '../../components/ui/Button';

const PricingSection = () => {
  const pricingPlans = [
    {
      id: 1,
      title: 'Basic',
      price: '$359/Monthly',
      features: [
        'IRS Tax Problems',
        'Business Tax Consulting',
        'Tax Preparation and Planning',
        'Tax Payroll Services',
        'Bookkeeping and Virtual CFO',
        'Accounting Virtual Controller'
      ],
      isPopular: false
    },
    {
      id: 2,
      title: 'Standard',
      price: '$559/Monthly',
      features: [
        'IRS Tax Problems',
        'Business Tax Consulting',
        'Tax Preparation and Planning',
        'Tax Payroll Services',
        'Bookkeeping and Virtual CFO',
        'Accounting Virtual Controller'
      ],
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium',
      price: '$959/Monthly',
      features: [
        'IRS Tax Problems',
        'Business Tax Consulting',
        'Tax Preparation and Planning',
        'Tax Payroll Services',
        'Bookkeeping and Virtual CFO',
        'Accounting Virtual Controller'
      ],
      isPopular: false
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
            <span className="text-base font-semibold text-blue-500 px-4">Pricing</span>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-blue-800 text-center mb-16">
          Let's Check Our Pricing<br />Plan For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-white rounded-sm shadow-md ${plan.isPopular ? 'border-2 border-blue-500' : ''}`}
            >
              <div className="p-6">
                <h3 className="text-4xl font-bold text-blue-800 text-center mb-6">{plan.price}</h3>
                
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-6 rounded-tr-sm rounded-bl-sm">
                    <p className="text-lg font-semibold">{plan.title}</p>
                  </div>
                )}
                
                <Button 
                  variant="primary" className="w-full flex items-center justify-center mb-6"
                >
                  Purchase Now
                  <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <img src="/images/img_vector_16x16.svg" alt="Check" className="w-4 h-4 mt-1 mr-3" />
                      <span className="text-base font-semibold text-blue-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;