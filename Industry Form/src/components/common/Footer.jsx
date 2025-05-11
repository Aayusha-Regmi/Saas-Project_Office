import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

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
    <footer className="bg-[#0a1e43] text-white">
      <div className="container mx-auto px-4 pt-[76px] pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <img src="/images/img_saas_logo_101_1.png" alt="SAA Logo" className="w-[181px] h-[181px]" />
            <p className="text-[22px] font-semibold leading-[31px] mt-4 max-w-[427px]">
              We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
            </p>
            
            <div className="mt-8">
              <h3 className="text-[22px] font-bold mb-4">Subscribe Our Newsletter</h3>
              <div className="flex items-center">
                <label className="text-[22px] font-semibold mr-4">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={handleEmailChange}
                  className="bg-transparent border-b border-white px-2 py-1 mr-4 focus:outline-none"
                  placeholder="Your email"
                />
                <button 
                  onClick={handleSubscribe}
                  className="bg-[#32b5fd] text-white py-[10px] px-4 rounded-[7px] flex items-center"
                >
                  <span className="text-[18px] font-semibold mr-2">Subscribe</span>
                  <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-[24px] font-bold mb-2">Company</h3>
            <div className="w-[20px] h-[5px] bg-white mb-4"></div>
            <ul className="space-y-[9px]">
              <li><Link to="/about" className="text-[22px] font-semibold hover:text-blue-300">About Us</Link></li>
              <li><Link to="/news" className="text-[22px] font-semibold hover:text-blue-300">Update News</Link></li>
              <li><Link to="/contact" className="text-[22px] font-semibold hover:text-blue-300">Contact Us</Link></li>
              <li><Link to="/testimonials" className="text-[22px] font-semibold hover:text-blue-300">Testimonials</Link></li>
              <li><Link to="/terms" className="text-[22px] font-semibold hover:text-blue-300">Terms Of Service</Link></li>
              <li><Link to="/privacy" className="text-[22px] font-semibold hover:text-blue-300">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-[24px] font-bold mb-2">Services</h3>
            <div className="w-[20px] h-[5px] bg-white mb-4"></div>
            <ul className="space-y-[9px]">
              <li><Link to="/services/tax-planning" className="text-[22px] font-semibold hover:text-blue-300">Tax Planning</Link></li>
              <li><Link to="/services/personal-tax" className="text-[22px] font-semibold hover:text-blue-300">Personal Tax</Link></li>
              <li><Link to="/services/insurance-tax" className="text-[22px] font-semibold hover:text-blue-300">Insurance Tax</Link></li>
              <li><Link to="/services/tax-audit" className="text-[22px] font-semibold hover:text-blue-300">Tax Audit Support</Link></li>
              <li><Link to="/services/corporate-tax" className="text-[22px] font-semibold hover:text-blue-300">Corporate Tax</Link></li>
              <li><Link to="/services/tax-advisory" className="text-[22px] font-semibold hover:text-blue-300">Tax Advisory</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-[24px] font-bold mb-2">Get In Touch</h3>
            <div className="w-[20px] h-[5px] bg-white mb-4"></div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <img src="/images/img_carbonlocationfilled.svg" alt="Location" className="w-[32px] h-[32px] mr-4 mt-1" />
                <div>
                  <h4 className="text-[22px] font-semibold">Our Address</h4>
                  <p className="text-[22px] font-light">Kathmandu, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <img src="/images/img_vector_26x28.svg" alt="Phone" className="w-[26px] h-[28px] mr-4 mt-1" />
                <div>
                  <h4 className="text-[22px] font-semibold">Call Us</h4>
                  <p className="text-[22px] font-light">+977 9818962673</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <img src="/images/img_linemdemailaltfilled.svg" alt="Email" className="w-[35px] h-[35px] mr-4 mt-1" />
                <div>
                  <h4 className="text-[22px] font-semibold">Mail Us</h4>
                  <p className="text-[22px] font-light">saasnepal@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-[#0e5d97] py-4 text-center">
        <p className="text-white">2024. All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;