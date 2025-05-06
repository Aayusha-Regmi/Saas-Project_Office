import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({
  placeholder,
  value,
  onChange,
  name,
  id,
  label,
  error,
  icon,
  className = '',
  textareaClassName = '',
  required = false,
  disabled = false,
  rows = 4,
  ...props
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      {label && (
        <label 
          htmlFor={id || name} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
            {icon}
          </div>
        )}
        <textarea
          name={name}
          id={id || name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          rows={rows}
          className={`w-full px-4 py-2 bg-white border border-gray-300 rounded-2xl text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
            icon ? 'pl-10' : '' } ${error ?'border-red-500' : ''} ${
            disabled ? 'bg-gray-100 cursor-not-allowed' : ''
          } ${textareaClassName}`}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

Textarea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  textareaClassName: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
};

export default Textarea;