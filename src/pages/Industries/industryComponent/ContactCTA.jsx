import React from 'react';
import Button from '../../../components/ui/IndustryButton';
import { useNavigate } from 'react-router-dom';

const ContactCTA = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleProposalClick = () => {
    navigate('/industries/industry-form');
    setTimeout(() => {
      window.scrollTo({ top: 0 }); 
    }, 0);
  };

  return (
    <div className="container mx-auto  text-center mb-20">
      <div className='bg-primary-dark-blue h-[3rem] w-full mb-10 mt-[-5rem] px-[-200px] py-[-200px] lg:px-[-100px] lg:py-[-100px]'></div>
      <h2 className="text-4xl font-semibold leading-[55px] text-primary-blue mb-12">
        How can we help you?
      </h2>
      
      <div className="flex justify-center space-x-6">
        <Button 
          onClick={handleContactClick}
          className="bg-primary-bright-blue text-white font-bold py-2.5 px-8 rounded-md w-[326px]"
        >
          CONTACT US
        </Button>
        
        <Button 
          onClick={handleProposalClick}
          className="bg-primary-dark-blue bg-opacity-60 text-white font-bold py-2.5 px-8 rounded-md w-[326px]"
        >
          REQUEST FOR PROPOSAL
        </Button>
      </div>
      
    </div>
  );
};

export default ContactCTA;