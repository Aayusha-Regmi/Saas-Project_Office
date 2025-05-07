import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  id,
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label 
          htmlFor={id || name} 
          className="block text-gray-700 font-medium mb-2"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light-blue ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default InputField;