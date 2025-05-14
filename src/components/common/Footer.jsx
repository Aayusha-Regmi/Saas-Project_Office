import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import InputField from '../ui/InputField';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (!email) {
      setSubscribeStatus({ success: false, message: 'Please enter your email address' });
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setSubscribeStatus({ success: true, message: 'Thank you for subscribing!' });
      setEmail('');
      
      // Clear status after 3 seconds
      setTimeout(() => {
        setSubscribeStatus(null);
      }, 3000);
    }, 1000);
  };

  return (
    <footer className="bg-[#0a1e43] text-white relative">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Wave background */}
        <div className="absolute bottom-0 bottom-0 left-0 w-full">
          <img src="/images/img_rectangle_42130.png" alt="" className="w-full h-[500px] mt-[-350px] mr-[-50px]" />
          <img src="/images/img_rectangle_42131.png" alt="" className="w-full h-[500px] mt-[-500px] mr-[-50px]" />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Company Info */}
          <div>
            <img src="/images/img_saas_logo_101_1.png" alt="SAAS Logo" className="h-16 w-auto mb-6 p-[-10px]" />
            <p className="text-lg font-semibold leading-relaxed mb-8">
              We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
            </p>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Subscribe Our Newsletter</h3>
              <form onSubmit={handleSubscribe} className="flex flex-col">
                <label htmlFor="email" className="text-lg font-semibold mb-2">Email</label>
                <div className="flex gap-2">
                  <InputField
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Your email address"
                    className="mb-2 text-sm flex-grow"
                  />
                  <Button 
                    type="submit"
                    variant="primary"
                    className="m-2 mb-[6] text-sm mt-[-6] "
                  
                  >
                    Subscribe
                   
                    <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-2" />
                  </Button>
                </div>
                {subscribeStatus && (
                  <p className={`mt-2 text-sm ${subscribeStatus.success ? 'text-green-400' : 'text-red-400'}`}>
                    {subscribeStatus.message}
                  </p>
                )}
              </form>
            </div>
          </div>
          
          {/* Column 2 - Company Links */}
          <div className="lg:ml-12">
            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Company</h3>
            <div className="h-1 w-5 bg-white mx-auto md:mx-0 mb-6"></div>
            <ul className="space-y-4 text-lg font-semibold">
              <li><Link to="/about" className="hover:text-[#22a8ff] transition-colors">About Us</Link></li>
              <li><Link to="/news" className="hover:text-[#22a8ff] transition-colors">Update News</Link></li>
              <li><Link to="/contact" className="hover:text-[#22a8ff] transition-colors">Contact Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-[#22a8ff] transition-colors">Testimonials</Link></li>
              <li><Link to="/terms" className="hover:text-[#22a8ff] transition-colors">Terms Of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-[#22a8ff] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Services */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Services</h3>
            <div className="h-1 w-5 bg-white mx-auto md:mx-0 mb-6"></div>
            <ul className="space-y-4 text-lg font-semibold">
              <li><Link to="/services/tax-planning" className="hover:text-[#22a8ff] transition-colors">Tax Planning</Link></li>
              <li><Link to="/services/personal-tax" className="hover:text-[#22a8ff] transition-colors">Personal Tax</Link></li>
              <li><Link to="/services/insurance-tax" className="hover:text-[#22a8ff] transition-colors">Insurance Tax</Link></li>
              <li><Link to="/services/tax-audit" className="hover:text-[#22a8ff] transition-colors">Tax Audit Support</Link></li>
              <li><Link to="/services/corporate-tax" className="hover:text-[#22a8ff] transition-colors">Corporate Tax</Link></li>
              <li><Link to="/services/tax-advisory" className="hover:text-[#22a8ff] transition-colors">Tax Advisory</Link></li>
            </ul>
          </div>
          
          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Get In Touch</h3>
            <div className="h-1 w-5 bg-white mx-auto md:mx-0 mb-6"></div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <img src="/images/img_carbonlocationfilled.svg" alt="Location" className="w-7 h-7 mr-3 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold">Our Address</h4>
                  <p className="text-lg font-light">Kathmandu, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <img src="/images/img_vector_24x28.svg" alt="Phone" className="w-6 h-7 mr-3 mt-1" />
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