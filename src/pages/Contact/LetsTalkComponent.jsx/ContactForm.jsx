import React, { useState } from 'react';
import LetsTalkButton from '@/components/ui/LetsTalkButton';
import LetsTalkInputField from '@/components/ui/LetsTalkInputField';
import LetsTalkTextarea from '@/components/ui/LetsTalkTextarea';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit form
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };
  
  const services = [
    { value: 'tax-planning', label: 'Tax Planning' },
    { value: 'personal-tax', label: 'Personal Tax' },
    { value: 'insurance-tax', label: 'Insurance Tax' },
    { value: 'tax-audit', label: 'Tax Audit Support' },
    { value: 'corporate-tax', label: 'Corporate Tax' },
    { value: 'tax-advisory', label: 'Tax Advisory' }
  ];
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img 
            src="/images/img_image_41.png" alt="Contact" className="w-full h-auto rounded-2xl"
          />
        </div>
        
        <div className="bg-secondary-lightBlue rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-primary-darkBlue text-center mb-6">Get In Touch</h2>
          <p className="text-lg text-secondary-gray mb-8">
            There are many variations of passages available the majority have suffered alteration in some by injected humour.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <input
                  type="text" name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" className="contact-form-input"
                />
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                  <img src="/images/img_solaruserbold.svg" alt="User" className="w-6 h-6" />
                </div>
                {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
              </div>
              
              <div className="relative">
                <input
                  type="email" name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" className="contact-form-input"
                />
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                  <img src="/images/img_linemdemailaltfilled.svg" alt="Email" className="w-6 h-6" />
                </div>
                {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
              </div>
              
              <div className="relative">
                <input
                  type="tel" name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone" className="contact-form-input"
                />
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                  <img src="/images/img_riphonefill.svg" alt="Phone" className="w-6 h-6" />
                </div>
                {errors.phone && <p className="text-red-500 mt-1">{errors.phone}</p>}
              </div>
              
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="contact-form-input appearance-none"
                >
                  <option value="" disabled>Choose Service</option>
                  {services.map(service => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                  <img src="/images/img_materialsymbolslightservicetoolbox.svg" alt="Service" className="w-6 h-6" />
                </div>
              </div>
            </div>
            
            <div className="relative mb-8">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" rows="4" className="contact-form-textarea"
              ></textarea>
              <div className="absolute left-6 top-6">
                <img src="/images/img_mynauimessagedotssolid.svg" alt="Message" className="w-6 h-6" />
              </div>
              {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
            </div>
            
            <LetsTalkButton 
              type="submit" className="bg-primary-lightBlue text-white font-semibold py-3 px-8 rounded-md" icon={<img src="/images/img_materialsymbolsarrowinsert.svg" alt="Submit" className="w-6 h-6" />}
            >
              Submit Now
            </LetsTalkButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;