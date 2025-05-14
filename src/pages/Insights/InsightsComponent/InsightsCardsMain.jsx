import React from 'react';
import InsightsCard from '@/components/common/InsightsCard';

const InsightsCardsMain = () => {
  const insightCards = [
    {
      id: 1,
      title: 'Industry Updates',
      description: 'Finance Minister Barshaman Pun has tabled a budget of\nRs. 18.60 trillion for the fiscal',
      ribbonImage: '/images/img_group_1171275970.svg',
      buttonLink: '/insights/industry-updates'
    },
    {
      id: 2,
      title: 'SaaS Features & Benefits',
      description: 'Finance Minister Barshaman Pun has tabled a budget of\nRs. 18.60 trillion for the fiscal',
      ribbonImage: '/images/img_group_1171275970.svg',
      buttonLink: '/insights/saas-features'
    },
    {
      id: 3,
      title: 'Upcoming Webinars\n& Events',
      description: 'Finance Minister Barshaman Pun has tabled a budget of\nRs. 18.60 trillion for the fiscal',
      ribbonImage: '/images/img_group_1171275970.svg',
      buttonLink: '/insights/webinars-events'
    },
    {
      id: 4,
      title: 'Compliance & Legal\nResources',
      description: 'Finance Minister Barshaman Pun has tabled a budget of\nRs. 18.60 trillion for the fiscal',
      ribbonImage: '/images/img_group_1171275970.svg',
      buttonLink: '/insights/compliance-legal'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {insightCards.map(card => (
        <InsightsCard
          key={card.id}
          title={card.title}
          description={card.description}
          ribbonImage={card.ribbonImage}
          buttonLink={card.buttonLink}
          className="h-full"
        />
      ))}
    </div>
  );
};

export default InsightsCardsMain;