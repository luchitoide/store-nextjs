import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

export default function Pagination({ totalItems, itemsPerPage, currentPage, onPageClick }) {
  const pageNumbers = Math.ceil(totalItems / itemsPerPage);
  const pages = [...Array(pageNumbers).keys()].map((pageNumber) => pageNumber + 1);

  let startPage = currentPage - 2;
  if (startPage < 1) {
    startPage = 1;
  }

  let displayedPages = [currentPage];
  for (let i = 1; i <= 2; i++) {
    if (currentPage + i <= pageNumbers) {
      displayedPages.push(currentPage + i);
    }
    if (currentPage - i >= 1) {
      displayedPages.unshift(currentPage - i);
    }
  }

  return (
    <nav className="bg-white px-4 py-3 flex items-center justify-between sm:px-6" aria-label="Pagination">
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)}</span> to <span className="font-medium">{Math.min(currentPage * itemsPerPage, totalItems)}</span> of{' '}
          <span className="font-medium">{totalItems}</span> results
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageClick(currentPage - 1)}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </button>
        {displayedPages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageClick(pageNumber)}
            className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
              pageNumber === currentPage ? 'text-indigo-500 bg-indigo-100' : 'text-gray-700 bg-white hover:bg-gray-50'
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          disabled={currentPage === pageNumbers}
          onClick={() => onPageClick(currentPage + 1)}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </nav>
  );
}