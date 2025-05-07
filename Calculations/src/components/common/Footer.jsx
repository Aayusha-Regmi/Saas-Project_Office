import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../ui/Button';

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
    <footer className="bg-primary-dark-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <img src="/images/img_saas_logo_101_1.png" alt="SAAS Logo" className="h-24 w-auto mb-6" />
            <p className="text-lg font-semibold leading-relaxed mb-8">
              We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
            </p>
            
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-4">Subscribe Our Newsletter</h3>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <label htmlFor="footer-email" className="block text-xl font-semibold mb-2">Email</label>
                  <input
                    type="email" id="footer-email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full px-4 py-2 bg-transparent border border-white rounded text-white" placeholder="Your email address"
                  />
                </div>
                <div className="self-end">
                  <Button 
                    variant="primary" 
                    onClick={handleSubscribe}
                    className="flex items-center justify-center py-2.5 px-6 rounded-md"
                  >
                    Subscribe
                    <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Company</h3>
            <div className="w-5 h-1 bg-white mb-6"></div>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-xl font-semibold hover:text-primary-light-blue">About Us</Link></li>
              <li><Link to="/news" className="text-xl font-semibold hover:text-primary-light-blue">Update News</Link></li>
              <li><Link to="/contact" className="text-xl font-semibold hover:text-primary-light-blue">Contact Us</Link></li>
              <li><Link to="/testimonials" className="text-xl font-semibold hover:text-primary-light-blue">Testimonials</Link></li>
              <li><Link to="/terms" className="text-xl font-semibold hover:text-primary-light-blue">Terms Of Service</Link></li>
              <li><Link to="/privacy" className="text-xl font-semibold hover:text-primary-light-blue">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Services</h3>
            <div className="w-5 h-1 bg-white mb-6"></div>
            <ul className="space-y-4">
              <li><Link to="/tax-planning" className="text-xl font-semibold hover:text-primary-light-blue">Tax Planning</Link></li>
              <li><Link to="/personal-tax" className="text-xl font-semibold hover:text-primary-light-blue">Personal Tax</Link></li>
              <li><Link to="/insurance-tax" className="text-xl font-semibold hover:text-primary-light-blue">Insurance Tax</Link></li>
              <li><Link to="/tax-audit" className="text-xl font-semibold hover:text-primary-light-blue">Tax Audit Support</Link></li>
              <li><Link to="/corporate-tax" className="text-xl font-semibold hover:text-primary-light-blue">Corporate Tax</Link></li>
              <li><Link to="/tax-advisory" className="text-xl font-semibold hover:text-primary-light-blue">Tax Advisory</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <div className="w-5 h-1 bg-white mb-6"></div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <img src="/images/img_carbonlocationfilled.svg" alt="Location" className="w-8 h-8 mr-3 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold">Our Address</h4>
                  <p className="text-xl font-light">Kathmandu, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <img src="/images/img_vector_25x28.svg" alt="Phone" className="w-7 h-7 mr-3 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold">Call Us</h4>
                  <p className="text-xl font-light">+977 9818962673</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <img src="/images/img_linemdemailaltfilled.svg" alt="Email" className="w-8 h-8 mr-3 mt-1" />
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