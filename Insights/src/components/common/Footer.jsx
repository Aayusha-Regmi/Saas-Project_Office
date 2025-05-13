import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import InputField from '../ui/InputField';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with email:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };
  
  return (
    <footer className="bg-[#0a1e43] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Logo and About */}
          <div className="col-span-1">
            <Link to="/">
              <img src="/images/img_saas_logo_101_1.png" alt="SAA Logo" className="h-16 w-auto mb-6" />
            </Link>
            <p className="text-lg font-semibold leading-8 mb-8">
              We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
            </p>
            
            <h3 className="text-xl font-bold mb-4">Subscribe Our Newsletter</h3>
            <form onSubmit={handleSubscribe} className="mt-4">
              <label className="block text-xl font-semibold mb-2">Email</label>
              <div className="flex">
                <InputField
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your email address"
                  required
                  className="mb-0 flex-grow"
                />
                <Button 
                  type="submit"
                  variant="primary"
                  className="ml-2 h-[47px]"
                >
                  Subscribe
                  <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-1" />
                </Button>
              </div>
              {subscribed && (
                <p className="mt-2 text-green-400">Thank you for subscribing!</p>
              )}
            </form>
          </div>
          
          {/* Column 2 - Company */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-2">Company</h3>
            <div className="w-5 h-1 bg-white mb-6"></div>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-xl font-semibold hover:text-[#22a8ff]">About Us</Link></li>
              <li><Link to="/news" className="text-xl font-semibold hover:text-[#22a8ff]">Update News</Link></li>
              <li><Link to="/contact" className="text-xl font-semibold hover:text-[#22a8ff]">Contact Us</Link></li>
              <li><Link to="/testimonials" className="text-xl font-semibold hover:text-[#22a8ff]">Testimonials</Link></li>
              <li><Link to="/terms" className="text-xl font-semibold hover:text-[#22a8ff]">Terms Of Service</Link></li>
              <li><Link to="/privacy" className="text-xl font-semibold hover:text-[#22a8ff]">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Services */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-2">Services</h3>
            <div className="w-5 h-1 bg-white mb-6"></div>
            <ul className="space-y-4">
              <li><Link to="/tax-planning" className="text-xl font-semibold hover:text-[#22a8ff]">Tax Planning</Link></li>
              <li><Link to="/personal-tax" className="text-xl font-semibold hover:text-[#22a8ff]">Personal Tax</Link></li>
              <li><Link to="/insurance-tax" className="text-xl font-semibold hover:text-[#22a8ff]">Insurance Tax</Link></li>
              <li><Link to="/tax-audit" className="text-xl font-semibold hover:text-[#22a8ff]">Tax Audit Support</Link></li>
              <li><Link to="/corporate-tax" className="text-xl font-semibold hover:text-[#22a8ff]">Corporate Tax</Link></li>
              <li><Link to="/tax-advisory" className="text-xl font-semibold hover:text-[#22a8ff]">Tax Advisory</Link></li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
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
                <img src="/images/img_vector_27x28.svg" alt="Phone" className="w-7 h-7 mr-3 mt-1" />
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
      
      <div className="bg-[#071835] py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white">© 2024. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;