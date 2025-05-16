import React from 'react';

const contents = [
    {
      title: "Coorporate Tax Planning",
      description: "Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament. Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament. Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament. Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament. Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament.",
      icon: "/images/img_image_45.png",
      cornerImage: "/images/img_image_46.png",
      buttonText: "Read More",
      buttonLink: "/caseStudy/:page",
      iconBgColor: "#33B5FF"  
    }
]
//add null testing

    
const ProjectContent = () => {
  if (!contents || contents.length === 0) {
    return <div className="text-center text-red-500">No content available</div>;
  }

  const content = contents[0];
  
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">
        {content?.title || 'Corporate Tax Planning'}
      </h2>
      
      <div className="content-paragraph font-normal text-[16px]">
        {content?.description || 'No description available'}
      </div>
      
      <div className="content-paragraph font-normal text-[16px]">
        {content?.description || 'No description available'}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <img 
          src={content?.icon} alt="Corporate tax planning meeting" className="w-full h-auto rounded-lg"
        />
        <img 
          src={content?.cornerImage} alt="Financial document review" className="w-full h-auto rounded-lg"
        />
      </div>
      
      <div className="content-paragraph font-normal text-[16px]">
        {content?.description || 'No description available'}
      </div>
    </div>
  );
};

export default ProjectContent;