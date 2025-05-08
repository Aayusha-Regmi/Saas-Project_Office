import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  error,
  icon,
  className = '',
  required = false,
  disabled = false,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const selectedOption = options.find(option => option.value === value);
  
  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };
  
  const handleOptionClick = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div
        className={`relative w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer flex items-center justify-between ${
          error ? 'border-red-500' : '' } ${disabled ?'bg-gray-100 cursor-not-allowed' : ''}`}
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          <span className={`${!selectedOption ? 'text-gray-400' : ''}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                option.value === value ? 'bg-gray-100' : ''
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Dropdown;