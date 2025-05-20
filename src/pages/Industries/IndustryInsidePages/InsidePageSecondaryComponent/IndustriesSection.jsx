import React from 'react';
import Button from '@/components/ui/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const IndustriesSection = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const handleProposalClick = () => {
    navigate('/industries/industry-form');
    setTimeout(() => {
      window.scrollTo({ top: 0 }); 
    }, 0);
  };

  const industries = [
    { name: "Banking & Financial Service", path: "/industries/banking" },
    { name: "Manufacturing", path: "/industries/manufacturing" },
    { name: "NGO/INGO", path: "/industries/ngo-ingo" },
    { name: "Electronics & Communication Industry", path: "/industries/electronics" },
    { name: "Trading & Retail", path: "/industries/trading" },
    { name: "Travel, Tourism & Hotel", path: "/industries/travel" },
    { name: "Hospital and Education Industry", path: "/industries/hospital" },
    { name: "Hydropower & Construction", path: "/industries/hydropower" },
  ].map(industry => ({
    ...industry,
    active: currentPath === industry.path
  }));

  return (
    <div>
      <div className="md:col-span-1 flex flex-col space-y-6">
        <Button 
          variant="primary" 
          className="w-full py-4 text-xl"
          onClick={handleProposalClick}
        >
          REQUEST FOR PROPOSAL
        </Button>
      </div>
      <div className="rounded-lg border border-[#bfbfbf] overflow-hidden mt-6">
        {industries.map((industry, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center py-3 px-8">
              {industry.active && (
                <div className="w-1 h-5 bg-[#22a8ff] mr-4"></div>
              )}
              <Link 
                to={industry.path}
                className={`text-lg ${industry.active ? 'text-[#22a8ff] font-semibold' : 'text-[#04108a] font-normal'}`}
              >
                {industry.name}
              </Link>
            </div>
            {index < industries.length - 1 && (
              <div className="h-px bg-[#e0e0e0]"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default IndustriesSection;