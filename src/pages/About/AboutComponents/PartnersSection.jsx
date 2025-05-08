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
      name1: "Sona",
      name2: "Travels",
      color1: "#2666af",
      color2: "#ff6600"
    }
  ];

  // Repeat partners to create a seamless loop
  const loopedPartners = [...partners, ...partners];

  return (
    <section className="py-10 bg-[#eaf8ff] overflow-hidden">
      <div className="relative w-full">
        <div className="marquee whitespace-nowrap">
          {loopedPartners.map((partner, index) => (
            <div key={index} className="inline-flex items-center mx-10">
              <img
                src={partner.logo}
                alt={`${partner.name1} ${partner.name2}`}
                className="w-14 h-14 mr-4"
              />
              <div className="flex flex-col leading-tight">
                <span
                  className="text-3xl font-extrabold tracking-widest"
                  style={{ color: partner.color1 }}
                >
                  {partner.name1}
                </span>
                <span
                  className="text-3xl font-extrabold tracking-widest"
                  style={{ color: partner.color2 }}
                >
                  {partner.name2}
                </span>
              </div>
              {/* Optional separator */}
              <img
                src="/images/img_image_40.png"
                alt="Separator"
                className="w-16 h-16 ml-6"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind-style CSS in your global styles or inside a <style> tag */}
      <style>{`
        .marquee {
          display: inline-block;
          min-width: 100%;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
