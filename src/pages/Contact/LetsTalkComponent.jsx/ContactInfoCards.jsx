import React from 'react';

const ContactInfoCards = () => {
  const contactCards = [
    {
      id: 1,
      icon: <img src="/images/img_vector_62x49.svg" alt="Office Address" className="w-16 h-12" />,
      title: "Office Address",
      content: "Panipokhari, Ktm"
    },
    {
      id: 2,
      icon: <img src="/images/img_vector_25x28.svg" alt="Calls Us" className="w-14 h-14" />,
      title: "Calls Us",
      content: "+977 9818962672"
    },
    {
      id: 3,
      icon: <img src="/images/img_linemdemailaltfilled_35x35.svg" alt="Email Us" className="w-20 h-20" />,
      title: "Email Us",
      content: "saas.brj@gmail.com"
    },
    {
      id: 4,
      icon: <img src="/images/img_magealarmclockfill.svg" alt="Open Time" className="w-16 h-16" />,
      title: "Open Time",
      content: "Sun - Fri (9:00 AM - 5:00 PM)"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactCards.map(card => (
          <div 
            key={card.id} 
            className="contact-card h-full"
          >
            <div className="mb-6 mt-5">
              {card.icon}
            </div>
            <h3 className="text-2xl font-bold text-primary-darkBlue mb-3">{card.title}</h3>
            <p className="text-xl font-semibold text-primary-darkBlue text-center">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoCards;