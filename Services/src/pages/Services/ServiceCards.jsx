import React from 'react';
import Card from '../../components/common/Card';

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      title: "Tax Planning",
      description: "Finance Minister Barshaman Pun has tabled a budget of\nRs. 18.60 trillion for the fiscal",
      icon: "/images/img_group.svg",
      cornerImage: "/images/img_group_1171275971.svg"
    },
    {
      id: 2,
      title: "Personal Tax",
      description: "There are many variations of the passages available majority have suffered alteration in some.",
      icon: "/images/img_group_45x49.svg",
      cornerImage: "/images/img_group_1171275971.svg"
    },
    {
      id: 3,
      title: "Insurance Tax",
      description: "There are many variations of the passages available majority have suffered alteration in some.",
      icon: "/images/img_vector_44x48.svg",
      cornerImage: "/images/img_group_1171275971.svg"
    },
    {
      id: 4,
      title: "Corporate Tax",
      description: "There are many variations of the passages available majority have suffered alteration in some.",
      icon: "/images/img_group_44x48.svg",
      cornerImage: "/images/img_group_1171275971.svg"
    },
    {
      id: 5,
      title: "Tax Audit Support",
      description: "There are many variations of the passages available majority have suffered alteration in some.",
      icon: "/images/img_group_47x51.svg",
      cornerImage: "/images/img_group_1171275971.svg"
    },
    {
      id: 6,
      title: "Investment Advisor",
      description: "There are many variations of the passages available majority have suffered alteration in some.",
      icon: "/images/img_vector_45x49.svg",
      cornerImage: "/images/img_group_1171275971.svg"
    },
    {
      id: 7,
      title: "Tax Advisory",
      description: "There are many variations of the passages available majority have suffered alteration in some.",
      icon: "/images/img_group_51x48.svg",
      cornerImage: "/images/img_group_1171275971.svg"
    },
    {
      id: 8,
      title: "International Tax",
      description: "There are many variations of the passages available majority have suffered alteration in some.",
      icon: "/images/img_tax5_1.svg",
      cornerImage: "/images/img_group_1171275971.svg"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {services.map(service => (
        <Card
          key={service.id}
          title={service.title}
          description={service.description}
          icon={service.icon}
          cornerImage={service.cornerImage}
          buttonText="Read More"
          buttonLink={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
        />
      ))}
    </div>
  );
};

export default ServiceCards;