import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import InputField from '../ui/InputField';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubscribe = () => {
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    } else {
      alert('Please enter your email address');
    }
  };

  return (
    <footer className="w-full">
      <div className="bg-[#0e5d97] h-[54px]"></div>
      <div className="bg-[#0a1e43] text-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <img src="/images/img_saas_logo_101_1.png" alt="SAAS Logo" className="w-[181px] h-[181px]" />
            <p className="text-[22px] font-semibold leading-[31px] mt-4 max-w-[427px]">
              We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
            </p>
            <div className="mt-8">
              <h3 className="text-[22px] font-bold mb-4">Subscribe Our Newsletter</h3>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <label className="text-[22px] font-semibold mb-2 block">Email</label>
                  <InputField
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email" className="w-full p-3 rounded bg-white text-black"
                  />
                </div>
                <div className="self-end">
                  <Button 
                    onClick={handleSubscribe} 
                    className="bg-[#32b5fd] text-white rounded-md px-8 py-3 flex items-center"
                  >
                    Subscribe
                    <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="ml-2 w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-[24px] font-bold mb-2">Company</h3>
            <div className="w-5 h-1 bg-[#22a8ff] mb-6"></div>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-[22px] font-semibold hover:text-[#32b5fd]">About Us</Link></li>
              <li><Link to="/news" className="text-[22px] font-semibold hover:text-[#32b5fd]">Update News</Link></li>
              <li><Link to="/contact" className="text-[22px] font-semibold hover:text-[#32b5fd]">Contact Us</Link></li>
              <li><Link to="/testimonials" className="text-[22px] font-semibold hover:text-[#32b5fd]">Testimonials</Link></li>
              <li><Link to="/terms" className="text-[22px] font-semibold hover:text-[#32b5fd]">Terms Of Service</Link></li>
              <li><Link to="/privacy" className="text-[22px] font-semibold hover:text-[#32b5fd]">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-[24px] font-bold mb-2">Services</h3>
            <div className="w-5 h-1 bg-[#22a8ff] mb-6"></div>
            <ul className="space-y-4">
              <li><Link to="/tax-planning" className="text-[22px] font-semibold hover:text-[#32b5fd]">Tax Planning</Link></li>
              <li><Link to="/personal-tax" className="text-[22px] font-semibold hover:text-[#32b5fd]">Personal Tax</Link></li>
              <li><Link to="/insurance-tax" className="text-[22px] font-semibold hover:text-[#32b5fd]">Insurance Tax</Link></li>
              <li><Link to="/tax-audit" className="text-[22px] font-semibold hover:text-[#32b5fd]">Tax Audit Support</Link></li>
              <li><Link to="/corporate-tax" className="text-[22px] font-semibold hover:text-[#32b5fd]">Corporate Tax</Link></li>
              <li><Link to="/tax-advisory" className="text-[22px] font-semibold hover:text-[#32b5fd]">Tax Advisory</Link></li>
            </ul>
          </div>
          
          {/* Get In Touch */}
          <div className="col-span-1">
            <h3 className="text-[24px] font-bold mb-2">Get In Touch</h3>
            <div className="w-5 h-1 bg-[#22a8ff] mb-6"></div>
            <div className="space-y-6">
              <div className="flex items-start">
                <img src="/images/img_carbonlocationfilled.svg" alt="Location" className="w-8 h-8 mr-3 mt-1" />
                <div>
                  <h4 className="text-[22px] font-semibold">Our Address</h4>
                  <p className="text-[22px] font-light">Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="flex items-start">
                <img src="/images/img_vector_26x28.svg" alt="Phone" className="w-7 h-7 mr-3 mt-1" />
                <div>
                  <h4 className="text-[22px] font-semibold">Call Us</h4>
                  <p className="text-[22px] font-light">+977 9818962673</p>
                </div>
              </div>
              <div className="flex items-start">
                <img src="/images/img_linemdemailaltfilled.svg" alt="Email" className="w-9 h-9 mr-3 mt-1" />
                <div>
                  <h4 className="text-[22px] font-semibold">Mail Us</h4>
                  <p className="text-[22px] font-light">saasnepal@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1ca9e1] h-2"></div>
    </footer>
  );
};

export default Footer;