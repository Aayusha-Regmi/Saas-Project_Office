import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ activeCategory }) => {
  const categories = [
    { id: 1, name: 'Banking & Financial Service', path: '/banking-financial-services' },
    { id: 2, name: 'Manufacturing', path: '/manufacturing' },
    { id: 3, name: 'NGO/INGO', path: '/ngo-ingo' },
    { id: 4, name: 'Electronics & Communication Industry', path: '/electronics-communication' },
    { id: 5, name: 'Trading & Retail', path: '/trading-retail' },
    { id: 6, name: 'Travel, Tourism & Hotel', path: '/travel-tourism-hotel' },
    { id: 7, name: 'Hospital and Education Industry', path: '/hospital-education' },
    { id: 8, name: 'Hydropower & Construction', path: '/hydropower-construction' },
  ];

  return (
    <div className="bg-white rounded-lg border border-[#bfbfbf] p-6 w-full">
      {categories.map((category, index) => (
        <div key={category.id} className="relative">
          {index > 0 && <div className="h-px bg-[#e0e0e0] w-full absolute left-0"></div>}
          <div className="py-3 flex">
            {category.name === activeCategory && (
              <div className="w-1 h-5 bg-[#22a8ff] mr-6"></div>
            )}
            <Link 
              to={category.path}
              className={`text-lg ${
                category.name === activeCategory 
                  ? 'font-semibold text-[#22a8ff]' 
                  : 'font-normal text-[#04108a]'
              } hover:text-[#22a8ff]`}
            >
              {category.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;