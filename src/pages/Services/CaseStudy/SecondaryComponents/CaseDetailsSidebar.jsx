import React from 'react';
import { Link, useParams } from 'react-router-dom';
import RatingBar from '@/components/ui/RatingBar';
import { FiArrowUpRight } from 'react-icons/fi';  // Feather Icons

// Case study details for each page
const caseStudyData = {
  'personal-tax': {
    title: 'Personal Tax',
    date: '15 March, 2024',
    client: 'Raju Prajapati',
    budget: 'Rs. 28,500',
    manager: 'Sabal Kafle',
    location: 'Kathmandu, Nepal',
    rating: 4.8
  },
  'tax-audit-support': {
    title: 'Tax Audit Support',
    date: '22 April, 2024',
    client: 'Himalayan Trade Corp',
    budget: 'Rs. 185,000',
    manager: 'Anita Shrestha',
    location: 'Pokhara, Nepal',
    rating: 4.9
  },
  'international-tax': {
    title: 'International Tax',
    date: '05 May, 2024',
    client: 'Global Impex Ltd',
    budget: 'Rs. 320,000',
    manager: 'Rajesh Thapa',
    location: 'Lalitpur, Nepal',
    rating: 5.0
  },
  'tax-advisory': {
    title: 'Tax Advisory',
    date: '18 April, 2024',
    client: 'Everest Holdings',
    budget: 'Rs. 250,000',
    manager: 'Priya Gurung',
    location: 'Biratnagar, Nepal',
    rating: 4.7
  },
  'investment-advisor': {
    title: 'Investment Advisor',
    date: '30 March, 2024',
    client: 'Nepal Growth Fund',
    budget: 'Rs. 420,000',
    manager: 'Amit Joshi',
    location: 'Bhaktapur, Nepal',
    rating: 4.9
  },
  'insurance-tax': {
    title: 'Insurance Tax',
    date: '12 May, 2024',
    client: 'Sagarmatha Insurance',
    budget: 'Rs. 310,000',
    manager: 'Sanjiv Khanal',
    location: 'Patan, Nepal',
    rating: 4.8
  },
  'corporate-tax': {
    title: 'Corporate Tax',
    date: '08 April, 2024',
    client: 'Nepal Ventures',
    budget: 'Rs. 275,000',
    manager: 'Bina Sharma',
    location: 'Kirtipur, Nepal',
    rating: 4.9
  },
  'corporate-tax-planning': {
    title: 'Tax Planning',
    date: '23 May, 2024',
    client: 'Himalayan Enterprises',
    budget: 'Rs. 350,000',
    manager: 'Ramesh Basnet',
    location: 'Dhulikhel, Nepal',
    rating: 5.0
  }
};

const CaseDetailsSidebar = () => {
  const { page } = useParams();
  
  // Get case details for current page or use default values
  const caseDetails = caseStudyData[page] || {
    title: 'Tax Planning',
    date: '23 May, 2024',
    client: 'Himalayan Enterprises',
    budget: 'Rs. 350,000',
    manager: 'Ramesh Basnet',
    location: 'Kathmandu, Nepal',
    rating: 5.0
  };

  return (
    <div className="bg-gray-100 rounded-2xl p-6 h-full shadow-md">
      <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">Case Details</h2>
      
      {/* Category */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-blue-900 mb-1">Category</h3>
        <p className="text-black font-bold text-base">{caseDetails.title}</p>
        <div className="h-px bg-gray-200 w-full mt-3"></div>
      </div>
      
      {/* Date */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-blue-900 mb-1">Date</h3>
        <p className="text-black font-bold text-base">{caseDetails.date}</p>
        <div className="h-px bg-gray-200 w-full mt-3"></div>
      </div>
      
      {/* Client Name */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-blue-900 mb-1">Client Name</h3>
        <p className="text-black font-bold text-base">{caseDetails.client}</p>
        <div className="h-px bg-gray-200 w-full mt-3"></div>
      </div>
      
      {/* Budget */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-blue-900 mb-1">Budget</h3>
        <p className="text-black font-bold text-base">{caseDetails.budget}</p>
        <div className="h-px bg-gray-200 w-full mt-3"></div>
      </div>
      
      {/* Project Manager */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-blue-900 mb-1">Project Manager</h3>
        <p className="text-black font-bold text-base">{caseDetails.manager}</p>
        <div className="h-px bg-gray-200 w-full mt-3"></div>
      </div>
      
      {/* Location */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-blue-900 mb-1">Location</h3>
        <p className="text-black font-bold text-base">{caseDetails.location}</p>
        <div className="h-px bg-gray-200 w-full mt-3"></div>
      </div>
      
      {/* Rating */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Client Rating</h3>
        <div className="flex items-center">
          <RatingBar rating={caseDetails.rating} maxRating={5} />
          <span className="ml-2 text-sm text-gray-600">{caseDetails.rating}/5.0</span>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white mt-10 shadow-lg">
        <h3 className="text-xl font-bold mb-3">Need Similar Services?</h3>
        <p className="text-blue-100 text-sm mb-4">Contact us for expert tax advisory and financial solutions tailored to your needs.</p>
        <Link to="/contact">
          <button className="bg-white text-blue-700 font-semibold py-2.5 px-6 rounded-lg flex items-center mt-2 hover:bg-blue-50 hover:text-blue-800 transition-colors w-full justify-center">
            Get Started
            <FiArrowUpRight className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CaseDetailsSidebar;