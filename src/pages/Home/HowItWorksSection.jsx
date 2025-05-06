import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: 'Choose Your Services',
      description: 'It is a long established fact that a reader will be distracted.',
      image: '/images/img_image_78x78.png'
    },
    {
      id: 2,
      title: 'Consult Expert Staff',
      description: 'It is a long established fact that a reader will be distracted.',
      image: '/images/img_image_78x78.png'
    },
    {
      id: 3,
      title: 'Strategic Work Planning',
      description: 'It is a long established fact that a reader will be distracted.',
      image: '/images/img_image_78x78.png'
    },
    {
      id: 4,
      title: 'Completed Work',
      description: 'It is a long established fact that a reader will be distracted.',
      image: '/images/img_image_78x78.png'
    }
  ];

  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-white rounded-xl">
            <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold">%</span>
            </div>
            <span className="text-base font-semibold text-blue-500 px-4">Working Process</span>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center mb-16">
          How Our SAAS Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className="w-[100px] h-[100px] border-2 border-white rounded-full flex items-center justify-center mb-4">
                <img src={step.image} alt={step.title} className="w-[78px] h-[78px] rounded-full" />
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute">
                  <img src="/images/img_line_408.svg" alt="Arrow" className="w-[74px] h-[74px]" style={{ marginLeft: '100px' }} />
                </div>
              )}
              
              <h3 className="text-lg font-extrabold text-white mb-4 text-center">{step.title}</h3>
              <p className="text-base font-semibold text-white text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;