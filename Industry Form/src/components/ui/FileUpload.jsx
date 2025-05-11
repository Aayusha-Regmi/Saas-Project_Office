import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const FileUpload = ({
  label,
  onChange,
  accept = '*',
  multiple = false,
  className = '',
  ...props
}) => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    onChange(selectedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
    onChange(droppedFiles);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={`mb-6 ${className}`}>
      <label className="form-label font-open-sans">
        {label}
      </label>
      <div
        className={`border border-[#bcd9ff] rounded-[10px] h-[149px] flex flex-col items-center justify-center cursor-pointer ${
          isDragging ? 'bg-blue-50' : 'bg-white'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        {...props}
      >
        <img src="/images/img_move.png" alt="upload" className="w-[68px] h-[68px] mb-2" />
        <p className="text-[23px] text-[#a6a6a6] font-normal">
          Drag and drop files here or click
        </p>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
          className="hidden"
        />
      </div>
      {files.length > 0 && (
        <div className="mt-2">
          <p className="text-sm text-gray-600">Selected files:</p>
          <ul className="list-disc pl-5">
            {files.map((file, index) => (
              <li key={index} className="text-sm text-gray-600">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

FileUpload.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  className: PropTypes.string,
};

export default FileUpload;