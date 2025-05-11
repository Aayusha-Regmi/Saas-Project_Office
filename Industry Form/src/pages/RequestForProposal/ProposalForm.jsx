import React, { useState } from 'react';
import Card from '../../components/common/Card';
import InputField from '../../components/ui/InputField';
import Dropdown from '../../components/ui/Dropdown';
import FileUpload from '../../components/ui/FileUpload';

const ProposalForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Proposal submitted successfully!');
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
    <Card className="mx-auto max-w-[1128px] shadow-[0_5px_5px_rgba(0,0,0,0.25)]">
      <form onSubmit={handleSubmit} className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <InputField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          
          <Dropdown
            label="Title"
            options={titleOptions}
            value={formData.title}
            onChange={handleDropdownChange('title')}
            required
          />
          
          <InputField
            label="Position / Job Title"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
          />
          
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          
          <InputField
            label="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
          />
          
          <InputField
            label="Post Code"
            name="postCode"
            value={formData.postCode}
            onChange={handleInputChange}
          />
          
          <Dropdown
            label="Select Yearly Revenue"
            options={revenueOptions}
            value={formData.yearlyRevenue}
            onChange={handleDropdownChange('yearlyRevenue')}
            required
          />
          
          <Dropdown
            label="Industry"
            options={industryOptions}
            value={formData.industry}
            onChange={handleDropdownChange('industry')}
            required
          />
          
          <FileUpload
            label="RFP"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className="md:col-span-2"
          />
          
          <Dropdown
            label="Country Selector"
            options={countryOptions}
            value={formData.country}
            onChange={handleDropdownChange('country')}
            required
            className="md:col-span-2"
          />
        </div>
        
        <div className="mt-8 flex justify-center">
          <button 
            type="submit"
            className="bg-[#32b5fd] text-white py-3 px-8 rounded-[7px] text-lg font-semibold hover:bg-[#22a8ff] transition-colors"
          >
            Submit Proposal
          </button>
        </div>
      </form>
    </Card>
  );
};

export default ProposalForm;