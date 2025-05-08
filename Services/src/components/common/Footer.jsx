import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesButton from '../ui/ServicesButton';
import ServicesInputField from '../ui/ServicesInputField';

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
    <footer className="bg-[#0A1E43] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <img src="/images/img_saas_logo_101_1.png" alt="SAAS Logo" className="h-16 w-auto mb-4" />
            <p className="text-lg font-semibold leading-8 mb-6">
              We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
            </p>
            
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Subscribe Our Newsletter</h3>
            </div>
            
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <div className="flex">
                <ServicesInputField
                  type="email" placeholder="Your email"
                  value={email}
                  onChange={handleEmailChange}
                  className="rounded-l-md rounded-r-none border-r-0"
                />
                <ServicesButton 
                  onClick={handleSubscribe}
                  className="rounded-l-none rounded-r-md h-[47px]"
                >
                  Subscribe
                  <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-2" />
                </ServicesButton>
              </div>
            </div>
          </div>
          
          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-2">Company</h3>
            <div className="w-5 h-1 bg-[#32B5FD] mb-4"></div>
            <ul className="space-y-4 text-xl font-semibold">
              <li><Link to="/about" className="hover:text-[#32B5FD]">About Us</Link></li>
              <li><Link to="/news" className="hover:text-[#32B5FD]">Update News</Link></li>
              <li><Link to="/contact" className="hover:text-[#32B5FD]">Contact Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-[#32B5FD]">Testimonials</Link></li>
              <li><Link to="/terms" className="hover:text-[#32B5FD]">Terms Of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-[#32B5FD]">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Services Links */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-2">Services</h3>
            <div className="w-5 h-1 bg-[#32B5FD] mb-4"></div>
            <ul className="space-y-4 text-xl font-semibold">
              <li><Link to="/services/tax-planning" className="hover:text-[#32B5FD]">Tax Planning</Link></li>
              <li><Link to="/services/personal-tax" className="hover:text-[#32B5FD]">Personal Tax</Link></li>
              <li><Link to="/services/insurance-tax" className="hover:text-[#32B5FD]">Insurance Tax</Link></li>
              <li><Link to="/services/tax-audit-support" className="hover:text-[#32B5FD]">Tax Audit Support</Link></li>
              <li><Link to="/services/corporate-tax" className="hover:text-[#32B5FD]">Corporate Tax</Link></li>
              <li><Link to="/services/tax-advisory" className="hover:text-[#32B5FD]">Tax Advisory</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
            <div className="w-5 h-1 bg-[#32B5FD] mb-4"></div>
            
            <div className="mb-6">
              <div className="flex items-start mb-2">
                <img src="/images/img_carbonlocationfilled.svg" alt="Location" className="w-8 h-8 mr-2" />
                <div>
                  <h4 className="text-xl font-semibold">Our Address</h4>
                  <p className="text-xl font-light">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-start mb-2">
                <img src="/images/img_vector_25x28.svg" alt="Phone" className="w-7 h-7 mr-2" />
                <div>
                  <h4 className="text-xl font-semibold">Call Us</h4>
                  <p className="text-xl font-light">+977 9818962673</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start">
                <img src="/images/img_linemdemailaltfilled.svg" alt="Email" className="w-8 h-8 mr-2" />
                <div>
                  <h4 className="text-xl font-semibold">Mail Us</h4>
                  <p className="text-xl font-light">saasnepal@gmail.com</p>
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