import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/AboutButton';
import InputField from '../ui/AboutInputField';

const Footer = () => {
  const [email, setEmail] = React.useState('');
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0a1e43] text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/">
              <img src="/images/img_saas_logo_101_1.png" alt="Logo" className="h-16 w-auto mb-6" />
            </Link>
            <p className="text-lg leading-relaxed mb-8">
              We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">Subscribe Our Newsletter</h3>
              <form onSubmit={handleSubscribe} className="flex">
                <InputField
                  type="email" placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 rounded-l-md"
                  required
                />
                <Button 
                  type="submit" className="bg-[#32b5fd] text-white rounded-r-md flex items-center"
                >
                  Subscribe
                  <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-1" />
                </Button>
              </form>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">Company</h3>
              <div className="w-5 h-1 bg-white mx-auto mb-6"></div>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-lg font-semibold hover:text-[#32b5fd]">About Us</Link></li>
                <li><Link to="/news" className="text-lg font-semibold hover:text-[#32b5fd]">Update News</Link></li>
                <li><Link to="/contact" className="text-lg font-semibold hover:text-[#32b5fd]">Contact Us</Link></li>
                <li><Link to="/testimonials" className="text-lg font-semibold hover:text-[#32b5fd]">Testimonials</Link></li>
                <li><Link to="/terms" className="text-lg font-semibold hover:text-[#32b5fd]">Terms Of Service</Link></li>
                <li><Link to="/privacy" className="text-lg font-semibold hover:text-[#32b5fd]">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">Services</h3>
              <div className="w-5 h-1 bg-white mx-auto mb-6"></div>
              <ul className="space-y-4">
                <li><Link to="/services/tax-planning" className="text-lg font-semibold hover:text-[#32b5fd]">Tax Planning</Link></li>
                <li><Link to="/services/personal-tax" className="text-lg font-semibold hover:text-[#32b5fd]">Personal Tax</Link></li>
                <li><Link to="/services/insurance-tax" className="text-lg font-semibold hover:text-[#32b5fd]">Insurance Tax</Link></li>
                <li><Link to="/services/tax-audit" className="text-lg font-semibold hover:text-[#32b5fd]">Tax Audit Support</Link></li>
                <li><Link to="/services/corporate-tax" className="text-lg font-semibold hover:text-[#32b5fd]">Corporate Tax</Link></li>
                <li><Link to="/services/tax-advisory" className="text-lg font-semibold hover:text-[#32b5fd]">Tax Advisory</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center">Get In Touch</h3>
            <div className="w-5 h-1 bg-white mx-auto mb-6"></div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <img src="/images/img_carbonlocationfilled.svg" alt="Location" className="w-8 h-8 mr-3 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold">Our Address</h4>
                  <p className="text-lg font-light">Kathmandu, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <img src="/images/img_vector_26x28.svg" alt="Phone" className="w-7 h-7 mr-3 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold">Call Us</h4>
                  <p className="text-lg font-light">+977 9818962673</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <img src="/images/img_linemdemailaltfilled.svg" alt="Email" className="w-8 h-8 mr-3 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold">Mail Us</h4>
                  <p className="text-lg font-light">saasnepal@gmail.com</p>
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