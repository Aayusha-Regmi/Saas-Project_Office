import React from 'react';
import Button from '../../../components/ui/Button';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Tax Advisory',
      description: 'Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal',
      icon: '/images/img_group.svg',
      cornerImage: '/images/img_group_1171276006.svg'
    },
    {
      id: 2,
      title: 'Merger & Acquisitions',
      description: 'Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal',
      icon: '/images/img_group_43x46.svg',
      cornerImage: '/images/img_group_1171276006.svg'
    },
    {
      id: 3,
      title: 'Audit & Assurance',
      description: 'Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal',
      icon: '/images/img_vector_44x48.svg',
      cornerImage: '/images/img_group_1171276006.svg'
    },
    {
      id: 4,
      title: 'Risk Advisory & Consult',
      description: 'Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal',
      icon: '/images/img_group_43x46.svg',
      cornerImage: '/images/img_group_1171276006.svg'
    }
  ];

  return (
    <section className="bg-gray-600 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-white rounded-xl">
            <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold">%</span>
            </div>
            <span className="text-base font-semibold text-blue-500 px-4">Our Offers</span>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-blue-800 text-center mb-16">
          What We Offer To Our<br />Customers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-6 relative">
              <div className="absolute top-0 right-0">
                <img src={service.cornerImage} alt="" className="w-[84px] h-[97px]" />
              </div>
              
              <div className="bg-blue-500 w-[75px] h-[75px] rounded-full flex items-center justify-center mb-6">
                <img src={service.icon} alt={service.title} className="w-11 h-11" />
              </div>
              
              <h3 className="text-lg font-extrabold text-blue-800 mb-4">{service.title}</h3>
              
              <p className="text-sm font-semibold text-gray-400 mb-6">
                {service.description}
              </p>
              
              <Button 
                variant="primary" className="w-full flex items-center justify-center"
              >
                Read More
                <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button 
            variant="primary" className="flex items-center"
          >
            All Services
            <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;