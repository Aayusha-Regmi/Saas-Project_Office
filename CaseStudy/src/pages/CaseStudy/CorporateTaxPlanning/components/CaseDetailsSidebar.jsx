import React from 'react';
import { Link } from 'react-router-dom';
import RatingBar from '../../../../components/ui/RatingBar';

const CaseDetailsSidebar = () => {
  return (
    <div className="bg-gray-600 rounded-2xl p-6 h-full">
      <h2 className="text-2xl font-bold text-blue-800 text-center mb-8">Case Details</h2>
      
      {/* Category */}
      <div className="mb-6">
        <h3 className="case-detail-label">Category</h3>
        <p className="case-detail-value">Corporate Tax Planning</p>
        <div className="h-px bg-gray-500 w-full"></div>
      </div>
      
      {/* Date */}
      <div className="mb-6">
        <h3 className="case-detail-label">Date</h3>
        <p className="case-detail-value">23 May, 2024</p>
        <div className="h-px bg-gray-500 w-full"></div>
      </div>
      
      {/* Client Name */}
      <div className="mb-6">
        <h3 className="case-detail-label">Client Name</h3>
        <p className="case-detail-value">Raju Prajapati</p>
        <div className="h-px bg-gray-500 w-full"></div>
      </div>
      
      {/* Budget */}
      <div className="mb-6">
        <h3 className="case-detail-label">Budget</h3>
        <p className="case-detail-value">Rs. 40,000</p>
        <div className="h-px bg-gray-500 w-full"></div>
      </div>
      
      {/* Project Manager */}
      <div className="mb-6">
        <h3 className="case-detail-label">Project Manager</h3>
        <p className="case-detail-value">Sabal Kafle</p>
        <div className="h-px bg-gray-500 w-full"></div>
      </div>
      
      {/* Location */}
      <div className="mb-6">
        <h3 className="case-detail-label">Location</h3>
        <p className="case-detail-value">Kathmandu, Nepal</p>
        <div className="h-px bg-gray-500 w-full"></div>
      </div>
      
      {/* Rating */}
      <div className="mb-6">
        <h3 className="case-detail-label">Rating</h3>
        <RatingBar rating={5} maxRating={5} />
      </div>
      
      {/* CTA */}
      <div className="bg-blue-600 rounded-lg p-6 text-white mt-10">
        <h3 className="text-2xl font-bold mb-4">We Are Providing<br />Best Tax Advisory Services.</h3>
        <Link to="/services/tax-advisory">
          <button className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-lg flex items-center mt-4">
            About More
            <img src="/images/img_materialsymbolsarrowinsert_24x24.svg" alt="Arrow" className="w-6 h-6 ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CaseDetailsSidebar;