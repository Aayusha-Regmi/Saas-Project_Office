import React from 'react';
import PropTypes from 'prop-types';

const LetsTalkInputField = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  label,
  error,
  icon,
  className = '',
  required = false,
  disabled = false,
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      {label && (
        <label 
          htmlFor={name} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}
        
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full px-4 ${icon ? 'pl-10' : 'pl-4'} py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-lightBlue focus:border-primary-lightBlue ${
            error ? 'border-red-500': '' } ${disabled ?'bg-gray-100 cursor-not-allowed' : ''}`}
          required={required}
          {...props}
        />
      </div>
      
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

LetsTalkInputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
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

export default LetsTalkInputField;