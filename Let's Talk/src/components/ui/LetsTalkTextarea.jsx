import React from 'react';
import PropTypes from 'prop-types';

const LetsTalkTextarea = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  error,
  icon,
  className = '',
  rows = 4,
  required = false,
  disabled = false,
  maxLength,
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
          <div className="absolute left-3 top-3">
            {icon}
          </div>
        )}
        
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          maxLength={maxLength}
          className={`w-full px-4 ${icon ? 'pl-10' : 'pl-4'} py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-lightBlue focus:border-primary-lightBlue ${
            error ? 'border-red-500': '' } ${disabled ?'bg-gray-100 cursor-not-allowed' : ''}`}
          required={required}
          {...props}
        />
      </div>
      
      {maxLength && value && (
        <div className="mt-1 text-xs text-gray-500 text-right">
          {value.length}/{maxLength}
        </div>
      )}
      
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

LetsTalkTextarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  rows: PropTypes.number,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
};

export default LetsTalkTextarea;