import React, { useState } from 'react';


import Button from '../../../components/ui/Button';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="md:col-span-1">
            <img src="/images/img_image_586x1440.png" alt="Contact" className="w-full h-full object-cover" />
          </div>

          <div className="md:col-span-1 bg-gray-500 p-8">
            <h2 className="text-4xl font-bold text-blue-800 text-center mb-6">
              Get In Touch
            </h2>
            
            <p className="text-lg text-gray-400 mb-8">
              There are many variations of passages available the majority have suffered alteration in some by injected humour.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="md:col-span-1">
                  <div className="bg-white rounded-3xl flex items-center p-4">
                    <img src="/images/img_solaruserbold.svg" alt="User" className="w-6 h-6 mr-4" />
                    <input
                      type="text" name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name" className="w-full bg-transparent text-blue-900 outline-none text-lg"
                      required
                    />
                  </div>
                </div>
                
                <div className="md:col-span-1">
                  <div className="bg-white rounded-3xl flex items-center p-4">
                    <img src="/images/img_linemdemailaltfilled.svg" alt="Email" className="w-6 h-6 mr-4" />
                    <input
                      type="email" name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email" className="w-full bg-transparent text-blue-900 outline-none text-lg"
                      required
                    />
                  </div>
                </div>
                
                <div className="md:col-span-1">
                  <div className="bg-white rounded-3xl flex items-center p-4">
                    <img src="/images/img_riphonefill.svg" alt="Phone" className="w-6 h-6 mr-4" />
                    <input
                      type="tel" name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone" className="w-full bg-transparent text-blue-900 outline-none text-lg"
                      required
                    />
                  </div>
                </div>
                
                <div className="md:col-span-1">
                  <div className="bg-white rounded-3xl flex items-center p-4">
                    <img src="/images/img_materialsymbolslightservicetoolbox.svg" alt="Service" className="w-6 h-6 mr-4" />
                    <input
                      type="text" name="service"
                      value={formData.service}
                      onChange={handleChange}
                      placeholder="Choose Service" className="w-full bg-transparent text-blue-900 outline-none text-lg"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="bg-white rounded-2xl flex p-4">
                  <img src="/images/img_mynauimessagedotssolid.svg" alt="Message" className="w-6 h-6 mr-4 mt-1" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message" className="w-full bg-transparent text-blue-900 outline-none text-lg min-h-[100px]"
                    required
                  ></textarea>
                </div>
              </div>
              
              <Button 
                type="submit" variant="primary" className="flex items-center"
              >
                Submit Now
                <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;