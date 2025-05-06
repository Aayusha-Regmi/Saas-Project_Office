import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
}) => {
  if (totalPages <= 1) return null;

  const getVisiblePageNumbers = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const halfVisible = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(currentPage - halfVisible, 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const visiblePages = getVisiblePageNumbers();

  return (
    <nav className={`flex items-center justify-center ${className}`}>
      <ul className="flex space-x-1">
        {showFirstLast && (
          <li>
            <button
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-sm ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' :'bg-white text-blue-500 hover:bg-blue-50'
              }`}
              aria-label="Go to first page"
            >
              &laquo;
            </button>
          </li>
        )}

        {showPrevNext && (
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-sm ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' :'bg-white text-blue-500 hover:bg-blue-50'
              }`}
              aria-label="Go to previous page"
            >
              &lsaquo;
            </button>
          </li>
        )}

        {visiblePages.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 rounded-sm ${
                currentPage === page
                  ? 'bg-blue-500 text-white' :'bg-white text-blue-500 hover:bg-blue-50'
              }`}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          </li>
        ))}

        {showPrevNext && (
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-sm ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' :'bg-white text-blue-500 hover:bg-blue-50'
              }`}
              aria-label="Go to next page"
            >
              &rsaquo;
            </button>
          </li>
        )}

        {showFirstLast && (
          <li>
            <button
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-sm ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' :'bg-white text-blue-500 hover:bg-blue-50'
              }`}
              aria-label="Go to last page"
            >
              &raquo;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  showFirstLast: PropTypes.bool,
  showPrevNext: PropTypes.bool,
  maxVisiblePages: PropTypes.number,
};

export default Pagination;