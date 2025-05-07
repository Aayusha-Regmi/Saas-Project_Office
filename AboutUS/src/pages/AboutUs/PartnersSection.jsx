import React from 'react';

const PartnersSection = () => {
  const partners = [
    {
      id: 1,
      logo: "/images/img_sona_travel_logo_final_1_2.png",
      name1: "SONA",
      name2: "TRAVELS",
      color1: "#2666af",
      color2: "#ff6600"
    },
    {
      id: 2,
      logo: "/images/img_sona_travel_logo_final_1_2.png",
      name1: "SONA",
      name2: "TRAVELS",
      color1: "#2666af",
      color2: "#ff6600"
    },
    {
      id: 3,
      logo: "/images/img_sona_travel_logo_final_1_2.png",
      name1: "Your",
      name2: "Name",
      color1: "#2666af",
      color2: "#ff6600"
    }
  ];

  return (
    <section className="py-10 bg-[#eaf8ff]">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center">
          {partners.map((partner, index) => (
            <React.Fragment key={partner.id}>
              <div className="flex items-center">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name1} ${partner.name2}`} 
                  className="w-10 h-10 mr-2"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold tracking-widest" style={{ color: partner.color1 }}>
                    {partner.name1}
                  </span>
                  <span className="text-2xl font-extrabold tracking-widest" style={{ color: partner.color2 }}>
                    {partner.name2}
                  </span>
                </div>
              </div>
              
              {index < partners.length - 1 && (
                <img src="/images/img_image_40.png" alt="Separator" className="w-20 h-20" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;