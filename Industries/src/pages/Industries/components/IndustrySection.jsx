import React from 'react';
import Card from '../../../components/common/Card';

const IndustrySection = () => {
  const industries = [
    {
      id: 1,
      title: "Banking & Financial Service",
      description: "Our Team has the in depth knowledge of Banking Processes, Regulatory Requirements, Core Banking Practices and Risk Management Practices of Banking Industry. We have been involved with the Audit and consulting of Banking & Financial Service Sector since our inception.",
      imageSrc: "/images/img_image_14.png",
      imageAlt: "Banking & Financial Service",
      buttonVariant: "active",
      link: "/industries/banking"
    },
    {
      id: 2,
      title: "Manufacturing",
      description: "SAAS have a team of young and dynamic professionals' with core competency in Manufacturing Sector. We have been associated with Manufacturing Industry by providing Risk Advisory Services, Audit Services, Consultancy Services and Tax Advisory Services.",
      imageSrc: "/images/img_image_331x586.png",
      imageAlt: "Manufacturing Industry",
      buttonVariant: "default",
      link: "/industries/manufacturing"
    },
    {
      id: 3,
      title: "NGO/INGO",
      description: "We have a strong team of professionals dedicated for the Development Sector. We provide wide range of services to the Development Sector including Statutory Audit, Internal Audit, Fund Audit and Consultancy Services across the regions of Nepal.",
      imageSrc: "/images/img_image_43.png",
      imageAlt: "NGO/INGO",
      buttonVariant: "default",
      link: "/industries/ngo-ingo"
    },
    {
      id: 4,
      title: "Electronics & Communication Industry",
      description: "SAAS have been involved in providing Consulting and Audit of Electronics and Communication Industry since its establishment.",
      imageSrc: "/images/img_image_2.png",
      imageAlt: "Electronics & Communication Industry",
      buttonVariant: "default",
      link: "/industries/electronics"
    },
    {
      id: 5,
      title: "Trading & Retail",
      description: "SAAS have a team of young and dynamic professionals' with core competency in Trading Sector. We have been associated with Trading Industry by providing Risk Advisory Services, Statutory Audit Services, Consultancy Services and Tax Advisory Services.",
      imageSrc: "/images/img_image_25.png",
      imageAlt: "Trading & Retail",
      buttonVariant: "default",
      link: "/industries/trading"
    },
    {
      id: 6,
      title: "Travel, Tourism & Hotel",
      description: "SAAS have a team of young and dynamic professionals' with expertise in Audit, Taxation and Consultancy in the Hospitality Sector. SAAS have a team of young and dynamic professionals' with expertise in Audit, Taxation and Consultancy in the Hospitality Sector.",
      imageSrc: "/images/img_image_339x601.png",
      imageAlt: "Travel, Tourism & Hotel",
      buttonVariant: "default",
      link: "/industries/tourism"
    },
    {
      id: 7,
      title: "Hospital and Education Industry",
      description: "We have a team of professionals having in depth knowledge and experience of working with Largest Hospital Chains in Nepal, India and South Asia. SAAS has also been associated with some of the biggest educational institutions of Nepal, Leading Medical Colleges, Leading Business Schools in Nepal in the capacity of Auditor and Consultants.",
      imageSrc: "/images/img_image_3.png",
      imageAlt: "Hospital and Education Industry",
      buttonVariant: "default",
      link: "/industries/healthcare-education"
    },
    {
      id: 8,
      title: "Hydropower & Construction",
      description: "Nepal is second richest country in the world for the Water Resources. Nepal has the capacity of above 80,000 MegaWatts Hydropower Production. SAAS has the expertise of providing Audit and Consultancy Services to Hydropower Companies, Construction and Real Estate Companies in Nepal.",
      imageSrc: null,
      imageAlt: "Hydropower & Construction",
      buttonVariant: "default",
      link: "/industries/hydropower-construction"
    }
  ];

  return (
    <div className="container mx-auto px-[110px] py-16">
      <div className="grid grid-cols-2 gap-x-16">
        <div className="col-span-1">
          <Card 
            title={industries[0].title}
            description={industries[0].description}
            imageSrc={industries[0].imageSrc}
            imageAlt={industries[0].imageAlt}
            buttonVariant={industries[0].buttonVariant}
            link={industries[0].link}
          />
          
          <Card 
            title={industries[2].title}
            description={industries[2].description}
            imageSrc={industries[2].imageSrc}
            imageAlt={industries[2].imageAlt}
            buttonVariant={industries[2].buttonVariant}
            link={industries[2].link}
          />
          
          <Card 
            title={industries[4].title}
            description={industries[4].description}
            imageSrc={industries[4].imageSrc}
            imageAlt={industries[4].imageAlt}
            buttonVariant={industries[4].buttonVariant}
            link={industries[4].link}
          />
          
          <Card 
            title={industries[6].title}
            description={industries[6].description}
            imageSrc={industries[6].imageSrc}
            imageAlt={industries[6].imageAlt}
            buttonVariant={industries[6].buttonVariant}
            link={industries[6].link}
          />
        </div>
        
        <div className="col-span-1">
          <Card 
            title={industries[1].title}
            description={industries[1].description}
            imageSrc={industries[1].imageSrc}
            imageAlt={industries[1].imageAlt}
            buttonVariant={industries[1].buttonVariant}
            link={industries[1].link}
          />
          
          <Card 
            title={industries[3].title}
            description={industries[3].description}
            imageSrc={industries[3].imageSrc}
            imageAlt={industries[3].imageAlt}
            buttonVariant={industries[3].buttonVariant}
            link={industries[3].link}
          />
          
          <Card 
            title={industries[5].title}
            description={industries[5].description}
            imageSrc={industries[5].imageSrc}
            imageAlt={industries[5].imageAlt}
            buttonVariant={industries[5].buttonVariant}
            link={industries[5].link}
          />
          
          <Card 
            title={industries[7].title}
            description={industries[7].description}
            imageSrc={industries[7].imageSrc}
            imageAlt={industries[7].imageAlt}
            buttonVariant={industries[7].buttonVariant}
            link={industries[7].link}
          />
        </div>
      </div>
    </div>
  );
};

export default IndustrySection;