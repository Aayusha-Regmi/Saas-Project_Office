import React, { useState, useEffect } from 'react';
import IndustryFormCard from '@/components/common/IndustryFormCard';
import IndustryFormInputField from '@/components/ui/IndustryFormInputField';
import Dropdown from '@/components/ui/Dropdown';
import FileUpload from '@/components/ui/FileUpload';

const ProposalForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  const [formData, setFormData] = useState({
    fullName: '',
    title: '',
    position: '',
    email: '',
    contactNumber: '',
    postCode: '',
    yearlyRevenue1: '',
    yearlyRevenue2: '',
    country: '',
    industry: '',
    rfpFiles: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDropdownChange = (name) => (value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (files) => {
    setFormData({
      ...formData,
      rfpFiles: files
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['fullName', 'title', 'position', 'email', 'contactNumber', 'yearlyRevenue1', 'country', 'industry'];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.contactNumber && !/^[0-9+\-\s()]{10,20}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      validateForm();
    }
  }, [formData, touched]);

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateForm();
  }; 
  
  const handleDropdownBlur = (field) => () => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched to show all errors
    const allTouched = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);
    
    // Validate form
    const isValid = validateForm();
    if (!isValid) {
      setSubmitStatus({ 
        success: false, 
        message: 'Please fix the errors in the form before submitting.' 
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      const formDataToSend = new FormData();
      
      // Add all form fields to FormData
      Object.keys(formData).forEach(key => {
        if (key === 'rfpFiles' && formData[key].length > 0) {
          // Handle file uploads
          Array.from(formData[key]).forEach((file, index) => {
            formDataToSend.append('files', file);
          });
        } else if (formData[key] !== null && formData[key] !== undefined) {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await fetch('http://localhost:5002/api/industry/submit', {
        method: 'POST',
        body: formDataToSend,
        // Don't set Content-Type header - let the browser set it with the correct boundary
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSubmitStatus({ 
        success: true, 
        message: 'Thank you for your submission! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        fullName: '',
        title: '',
        position: '',
        email: '',
        contactNumber: '',
        postCode: '',
        yearlyRevenue1: '',
        yearlyRevenue2: '',
        country: '',
        industry: '',
        rfpFiles: []
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        success: false, 
        message: error.message || 'Failed to submit form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const titleOptions = [
    { value: 'dr', label: 'Dr.' },
    { value: 'mr', label: 'Mr.' },
    { value: 'miss', label: 'Miss.' },
    { value: 'prof', label: 'Prof.' },
    { value: 'ms', label: 'Ms.' },
    { value: 'mrs', label: 'Mrs.' }
  ];

  const revenueOptions = [
    { value: 'less-1m', label: '<$1m' },
    { value: '1m-20m', label: '$1m-$20m' },
    { value: '20m-50m', label: '$20m-$50m' },
    { value: '50m-200m', label: '$50m-$200m' },
    { value: 'more-200m', label: '>$200m' }
  ];

  const industryOptions = [
    { value: 'banking', label: 'Banking & Financial Services' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'ngo', label: 'NGO/Ingo' },
    { value: 'electronics', label: 'Electronics & Communication Industry' },
    { value: 'trading', label: 'Trading & Retail' },
    { value: 'hospital', label: 'Hospital & Education Industry' },
    { value: 'hydropower', label: 'Hydropower & Construction' }
  ];

  const countryOptions = [
    { value: 'nepal', label: 'Nepal' },
    { value: 'india', label: 'India' },
    { value: 'usa', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'australia', label: 'Australia' },
    { value: 'canada', label: 'Canada' }
  ];

  return (
    <IndustryFormCard className="mx-auto max-w-[1128px] shadow-[0_5px_5px_rgba(0,0,0,0.25)]">
      <form onSubmit={handleSubmit} className="p-8">
        {submitStatus.message && (
          <div className={`mb-6 p-4 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {submitStatus.message}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="relative">
            <IndustryFormInputField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              onBlur={handleBlur}
             
              className={touched.fullName && errors.fullName ? 'border-red-500' : ''}
            />
            {touched.fullName && errors.fullName && (
              <p className="absolute -bottom-5 text-xs text-red-500">{errors.fullName}</p>
            )}
          </div>
          
          <div className="relative">
            <Dropdown
              label="Title"
              options={titleOptions}
              value={formData.title}
              onChange={handleDropdownChange('title')}
              onBlur={handleDropdownBlur('title')}
             
              className={touched.title && errors.title ? 'border-red-500' : ''}
            />
            {touched.title && errors.title && (
              <p className="absolute -bottom-5 text-xs text-red-500">{errors.title}</p>
            )}
          </div>
          
          <div className="relative">
            <IndustryFormInputField
              label="Position / Job Title"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              onBlur={handleBlur}
             
              className={touched.position && errors.position ? 'border-red-500' : ''}
            />
            {touched.position && errors.position && (
              <p className="absolute -bottom-5 text-xs text-red-500">{errors.position}</p>
            )}
          </div>
          
          <div className="relative">
            <IndustryFormInputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
             
              className={touched.email && errors.email ? 'border-red-500' : ''}
            />
            {touched.email && errors.email && (
              <p className="absolute -bottom-5 text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          
          <div className="relative">
            <IndustryFormInputField
              label="Contact Number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              onBlur={handleBlur}
             
              className={touched.contactNumber && errors.contactNumber ? 'border-red-500' : ''}
              placeholder="e.g. +1234567890 or (123) 456-7890"
            />
            {touched.contactNumber && errors.contactNumber && (
              <p className="absolute -bottom-5 text-xs text-red-500">{errors.contactNumber}</p>
            )}
          </div>
          
          <IndustryFormInputField
            label="Post Code"
            name="postCode"
            value={formData.postCode}
            onChange={handleInputChange}
          />
          
          <div className="relative">
            <Dropdown
              label="Select Yearly Revenue"
              options={revenueOptions}
              value={formData.yearlyRevenue1}
              onChange={handleDropdownChange('yearlyRevenue1')}
              onBlur={handleDropdownBlur('yearlyRevenue1')}
             
              className={touched.yearlyRevenue1 && errors.yearlyRevenue1 ? 'border-red-500' : ''}
            />
            {touched.yearlyRevenue1 && errors.yearlyRevenue1 && (
              <p className="absolute -bottom-5 text-xs text-red-500">{errors.yearlyRevenue1}</p>
            )}
          </div>
          
          <div className="relative">
            <Dropdown
              label="Country"
              options={countryOptions}
              value={formData.country}
              onChange={handleDropdownChange('country')}
              onBlur={handleDropdownBlur('country')}
             
              className={touched.country && errors.country ? 'border-red-500' : ''}
            />
            {touched.country && errors.country && (
              <p className="absolute -bottom-5 text-xs text-red-500">{errors.country}</p>
            )}
          </div>
          
          <div className="md:col-span-2 relative">
            <Dropdown
              label="Industry"
              options={industryOptions}
              value={formData.industry}
              onChange={handleDropdownChange('industry')}
              onBlur={handleDropdownBlur('industry')}
             
              className={touched.industry && errors.industry ? 'border-red-500' : ''}
            />
            {touched.industry && errors.industry && (
              <p className="absolute -bottom-5 text-xs text-red-500">{errors.industry}</p>
            )}
          </div>
          
          <div className="md:col-span-2">
            <FileUpload 
              onChange={handleFileChange} 
              label="Upload RFP (Optional)"
              accept=".pdf,.doc,.docx"
            />
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#22A8FF] hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Proposal'}
          </button>
        </div>
      </form>
    </IndustryFormCard>
  );
};

export default ProposalForm;