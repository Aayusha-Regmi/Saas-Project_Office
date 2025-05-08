import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ title, breadcrumbs }) => {
  return (
    <div className="relative h-[300px] w-full overflow-hidden">
      <img 
        src="/images/img_image.png" alt="Hero Background" className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-extrabold mb-4">{title}</h1>
        <div className="text-xl font-extrabold">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="mx-1">&gt;&gt;</span>}
              {item.link ? (
                <Link to={item.link} className="hover:text-primary-lightBlue transition">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;