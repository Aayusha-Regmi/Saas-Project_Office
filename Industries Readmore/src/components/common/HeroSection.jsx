import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ title, subtitle, breadcrumbs }) => {
  return (
    <div className="relative w-full h-[311px] bg-cover bg-center" style={{ backgroundImage: 'url("/images/img_image.png")' }}>
      <div className="absolute inset-0 bg-[#071e45] bg-opacity-70 flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl font-extrabold mb-2">{title}</h1>
        {subtitle && <h2 className="text-lg font-extrabold">{subtitle}</h2>}
        {breadcrumbs && (
          <div className="text-lg font-extrabold mt-1">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="mx-1">&gt;&gt;</span>}
                {item.link ? (
                  <Link to={item.link} className="hover:text-[#32b5fd]">
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;