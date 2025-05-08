import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import InputField from '../ui/InputField';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Subscription logic would go here
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-blue-700 text-white">
      <div className="relative">
        <img src="/images/img_rectangle_42130.png" alt="" className="w-full h-[575px] object-cover" />
        <img src="/images/img_rectangle_42131.png" alt="" className="w-full h-[508px] object-cover" />
      </div>

      <div className="container mx-auto px-4 py-10 relative z-10 -mt-[500px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <img src="/images/img_saas_logo_101_3.png" alt="SAAS Logo" className="h-[180px] w-[180px]" />
            <p className="text-2xl font-semibold leading-8 mt-4 max-w-md">
              We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
            </p>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Subscribe Our Newsletter</h3>
              <p className="text-2xl font-semibold mb-4">Email</p>
              <form onSubmit={handleSubscribe} className="flex">
                <InputField 
                  type="email" placeholder="Your email" className="flex-grow"
                  required
                />
                <Button 
                  type="submit" variant="primary" className="ml-4 rounded-sm"
                >
                  Subscribe
                  <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 inline-block w-6 h-6" />
                </Button>
              </form>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Company</h3>
            <div className="w-5 h-0.5 bg-white mb-4"></div>
            <ul className="space-y-4 text-2xl font-semibold">
              <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>
              <li><Link to="/update-news" className="hover:text-blue-500">Update News</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500">Contact Us</Link></li>
              <li><Link to="/about/testimonials" className="hover:text-blue-500">Testimonials</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-blue-500">Terms Of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-500">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Services</h3>
            <div className="w-5 h-0.5 bg-white mb-4"></div>
            <ul className="space-y-4 text-2xl font-semibold">
              <li><Link to="/tax-planning" className="hover:text-blue-500">Tax Planning</Link></li>
              <li><Link to="/personal-tax" className="hover:text-blue-500">Personal Tax</Link></li>
              <li><Link to="/insurance-tax" className="hover:text-blue-500">Insurance Tax</Link></li>
              <li><Link to="/tax-audit-support" className="hover:text-blue-500">Tax Audit Support</Link></li>
              <li><Link to="/corporate-tax" className="hover:text-blue-500">Corporate Tax</Link></li>
              <li><Link to="/tax-advisory" className="hover:text-blue-500">Tax Advisory</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <div className="w-5 h-0.5 bg-white mb-4"></div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <img src="/images/img_carbonlocationfilled.svg" alt="Location" className="w-8 h-8 mr-3" />
                <div>
                  <h4 className="text-2xl font-semibold">Our Address</h4>
                  <p className="text-2xl font-light">Kathmandu, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <img src="/images/img_vector_28x28.svg" alt="Phone" className="w-7 h-7 mr-3" />
                <div>
                  <h4 className="text-2xl font-semibold">Call Us</h4>
                  <p className="text-2xl font-light">+977 01 4547144</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <img src="/images/img_linemdemailaltfilled_35x35.svg" alt="Email" className="w-8 h-8 mr-3" />
                <div>
                  <h4 className="text-2xl font-semibold">Mail Us</h4>
                  <p className="text-2xl font-light">saasnepal@gmail.com</p>
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