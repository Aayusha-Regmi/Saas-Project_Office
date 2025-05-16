import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <footer className="bg-blue-700 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="col-span-1">
            <img src="/images/img_saas_logo_101_1.png" alt="SAA Logo" className="h-16 w-auto mb-6" />
            <p className="text-xl font-semibold leading-relaxed mb-8">
              We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
            </p>
            <h3 className="text-xl font-bold mb-4">Subscribe Our Newsletter</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <label htmlFor="email" className="block text-xl font-semibold mb-2">Email</label>
                <input
                  type="email" id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full px-4 py-2 rounded text-gray-800" placeholder="Your email address"
                />
              </div>
              <div className="self-end">
                <button 
                  onClick={handleSubscribe}
                  className="bg-blue-600 text-white px-6 py-3 rounded flex items-center"
                >
                  <span className="text-lg font-semibold">Subscribe</span>
                  <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Company</h3>
            <div className="w-5 h-1 bg-white mb-6"></div>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-xl font-semibold hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/news" className="text-xl font-semibold hover:text-blue-600 transition-colors">Update News</Link></li>
              <li><Link to="/contact" className="text-xl font-semibold hover:text-blue-600 transition-colors">Contact Us</Link></li>
              <li><Link to="/testimonials" className="text-xl font-semibold hover:text-blue-600 transition-colors">Testimonials</Link></li>
              <li><Link to="/terms" className="text-xl font-semibold hover:text-blue-600 transition-colors">Terms Of Service</Link></li>
              <li><Link to="/privacy" className="text-xl font-semibold hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Services</h3>
            <div className="w-5 h-1 bg-white mb-6"></div>
            <ul className="space-y-4">
              <li><Link to="/services/tax-planning" className="text-xl font-semibold hover:text-blue-600 transition-colors">Tax Planning</Link></li>
              <li><Link to="/services/personal-tax" className="text-xl font-semibold hover:text-blue-600 transition-colors">Personal Tax</Link></li>
              <li><Link to="/services/insurance-tax" className="text-xl font-semibold hover:text-blue-600 transition-colors">Insurance Tax</Link></li>
              <li><Link to="/services/tax-audit" className="text-xl font-semibold hover:text-blue-600 transition-colors">Tax Audit Support</Link></li>
              <li><Link to="/services/corporate-tax" className="text-xl font-semibold hover:text-blue-600 transition-colors">Corporate Tax</Link></li>
              <li><Link to="/services/tax-advisory" className="text-xl font-semibold hover:text-blue-600 transition-colors">Tax Advisory</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <div className="w-5 h-1 bg-white mb-6"></div>
            
            <div className="flex items-start mb-6">
              <img src="/images/img_carbonlocationfilled.svg" alt="Location" className="w-8 h-8 mr-3 mt-1" />
              <div>
                <h4 className="text-xl font-semibold mb-2">Our Address</h4>
                <p className="text-xl font-light">Kathmandu, Nepal</p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <img src="/images/img_vector_27x28.svg" alt="Phone" className="w-7 h-7 mr-3 mt-1" />
              <div>
                <h4 className="text-xl font-semibold mb-2">Call Us</h4>
                <p className="text-xl font-light">+977 9818962673</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <img src="/images/img_linemdemailaltfilled.svg" alt="Email" className="w-8 h-8 mr-3 mt-1" />
              <div>
                <h4 className="text-xl font-semibold mb-2">Mail Us</h4>
                <p className="text-xl font-light">saasnepal@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;