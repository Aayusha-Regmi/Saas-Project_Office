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
    <footer className="bg-primary-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1">
            <img src="/images/img_saas_logo_101_1.png" alt="SAAS Logo" className="h-24 w-auto mb-6" />
            <p className="text-lg leading-relaxed mb-8">
              We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">Subscribe Our Newsletter</h3>
              <div className="flex flex-col space-y-4">
                <label htmlFor="footer-email" className="text-xl font-semibold">Email</label>
                <div className="flex">
                  <input
                    type="email" id="footer-email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Your email address" className="bg-transparent border-b border-white py-2 pr-4 w-full focus:outline-none"
                  />
                  <button 
                    onClick={handleSubscribe}
                    className="bg-primary-lightBlue text-white font-semibold py-2 px-6 rounded-md flex items-center ml-4"
                  >
                    Subscribe
                    <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Company links */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Company</h3>
            <div className="w-5 h-1 bg-primary-lightBlue mb-6"></div>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-xl font-semibold hover:text-primary-lightBlue transition">About Us</Link></li>
              <li><Link to="/news" className="text-xl font-semibold hover:text-primary-lightBlue transition">Update News</Link></li>
              <li><Link to="/contact" className="text-xl font-semibold hover:text-primary-lightBlue transition">Contact Us</Link></li>
              <li><Link to="/testimonials" className="text-xl font-semibold hover:text-primary-lightBlue transition">Testimonials</Link></li>
              <li><Link to="/terms" className="text-xl font-semibold hover:text-primary-lightBlue transition">Terms Of Service</Link></li>
              <li><Link to="/privacy" className="text-xl font-semibold hover:text-primary-lightBlue transition">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Services links */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Services</h3>
            <div className="w-5 h-1 bg-primary-lightBlue mb-6"></div>
            <ul className="space-y-4">
              <li><Link to="/services/tax-planning" className="text-xl font-semibold hover:text-primary-lightBlue transition">Tax Planning</Link></li>
              <li><Link to="/services/personal-tax" className="text-xl font-semibold hover:text-primary-lightBlue transition">Personal Tax</Link></li>
              <li><Link to="/services/insurance-tax" className="text-xl font-semibold hover:text-primary-lightBlue transition">Insurance Tax</Link></li>
              <li><Link to="/services/tax-audit" className="text-xl font-semibold hover:text-primary-lightBlue transition">Tax Audit Support</Link></li>
              <li><Link to="/services/corporate-tax" className="text-xl font-semibold hover:text-primary-lightBlue transition">Corporate Tax</Link></li>
              <li><Link to="/services/tax-advisory" className="text-xl font-semibold hover:text-primary-lightBlue transition">Tax Advisory</Link></li>
            </ul>
          </div>
          
          {/* Contact information */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <div className="w-5 h-1 bg-primary-lightBlue mb-6"></div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <img src="/images/img_carbonlocationfilled.svg" alt="Location" className="w-8 h-8 mr-3 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Our Address</h4>
                  <p className="text-lg font-light">Panipokhari, Opposite of NPH Kathmandu, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <img src="/images/img_vector_25x28.svg" alt="Phone" className="w-6 h-7 mr-3 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Call Us</h4>
                  <p className="text-xl font-light">+977 9818962673</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <img src="/images/img_linemdemailaltfilled_35x35.svg" alt="Email" className="w-8 h-8 mr-3 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Mail Us</h4>
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