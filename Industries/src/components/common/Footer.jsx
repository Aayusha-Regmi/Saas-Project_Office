import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import InputField from '../ui/InputField';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    } else {
      alert('Please enter your email address');
    }
  };

  return (
    <footer className="w-full">
      <div className="h-[54px] bg-primary-deep-blue"></div>
      <div className="h-[8px] bg-primary-ocean-blue"></div>
      
      <div className="bg-primary-dark-blue text-white py-16">
        <div className="container mx-auto px-[110px]">
          <div className="grid grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="col-span-1">
              <img 
                src="/images/img_saas_logo_101_1.png" 
                alt="SAAS Logo" 
                className="w-[181px] h-[181px] mb-4"
              />
              <p className="text-[22px] font-semibold leading-[31px] mb-8">
                We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
              </p>
              
              <h3 className="text-[22px] font-bold mb-4">Subscribe Our Newsletter</h3>
              
              <div className="mb-4">
                <label className="text-[22px] font-semibold mb-2 block">Email</label>
                <div className="flex">
                  <InputField
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="bg-white text-black px-4 py-2 rounded-md w-full"
                  />
                  <Button 
                    onClick={handleSubscribe}
                    className="bg-primary-bright-blue text-white font-semibold px-8 py-2.5 rounded-md ml-2 flex items-center"
                  >
                    Subscribe
                    <img 
                      src="/images/img_materialsymbolsarrowinsert.svg" 
                      alt="Arrow" 
                      className="w-6 h-6 ml-2"
                    />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Company links */}
            <div className="col-span-1">
              <h3 className="text-2xl font-bold mb-4">Company</h3>
              <div className="w-5 h-1 bg-white mb-8"></div>
              <ul className="space-y-4 text-[22px] font-semibold">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/news">Update News</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/terms">Terms Of Service</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
            
            {/* Services links */}
            <div className="col-span-1">
              <h3 className="text-2xl font-bold mb-4">Services</h3>
              <div className="w-5 h-1 bg-white mb-8"></div>
              <ul className="space-y-4 text-[22px] font-semibold">
                <li><Link to="/tax-planning">Tax Planning</Link></li>
                <li><Link to="/personal-tax">Personal Tax</Link></li>
                <li><Link to="/insurance-tax">Insurance Tax</Link></li>
                <li><Link to="/tax-audit">Tax Audit Support</Link></li>
                <li><Link to="/corporate-tax">Corporate Tax</Link></li>
                <li><Link to="/tax-advisory">Tax Advisory</Link></li>
              </ul>
            </div>
            
            {/* Contact information */}
            <div className="col-span-1">
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <div className="w-5 h-1 bg-white mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <img 
                    src="/images/img_carbonlocationfilled.svg" 
                    alt="Location" 
                    className="w-8 h-8 mr-3 mt-1"
                  />
                  <div>
                    <h4 className="text-[22px] font-semibold mb-2">Our Address</h4>
                    <p className="text-[22px] font-light">Kathmandu, Nepal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <img 
                    src="/images/img_vector_26x28.svg" 
                    alt="Phone" 
                    className="w-7 h-7 mr-3 mt-1"
                  />
                  <div>
                    <h4 className="text-[22px] font-semibold mb-2">Call Us</h4>
                    <p className="text-[22px] font-light">+977 9818962673</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <img 
                    src="/images/img_linemdemailaltfilled.svg" 
                    alt="Email" 
                    className="w-8 h-8 mr-3 mt-1"
                  />
                  <div>
                    <h4 className="text-[22px] font-semibold mb-2">Mail Us</h4>
                    <p className="text-[22px] font-light">saasnepal@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;