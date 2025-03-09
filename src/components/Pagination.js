import React, { useState } from 'react';
import { Pagination } from 'flowbite-react';
import {
  HiChevronLeft,
  HiChevronRight,
  HiEllipsisHorizontal,
} from 'react-icons/hi2'; // React Icons


const CustomPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1, // How many page numbers to show on each side of the current page
  itemsPerPage,
  totalItems
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  const paginationRange = (currentPage, totalPages, siblingCount) => {
    const totalPageNumbers = siblingCount * 2 + 3; // Calculate the total number of page numbers

    if (totalPageNumbers >= totalPages) {
      return [...Array(totalPages).keys()].map((num) => num + 1); // Return a complete range if totalPageNumbers exceed totalPages
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftRange = [...Array(3 + 2 * siblingCount).keys()].map(
        (num) => num + 1
      );
      return [...leftRange, 'DOTS', totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightRange = [...Array(3 + 2 * siblingCount).keys()].map(
        (num) => totalPages - 3 - 2 * siblingCount + num + 1
      );
      return [firstPageIndex, 'DOTS', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = [...Array(siblingCount * 2 + 1).keys()].map(
        (num) => currentPage - siblingCount + num
      );
      return [firstPageIndex, 'DOTS', ...middleRange, 'DOTS', lastPageIndex];
    }
  };

  const pages = paginationRange(currentPage, totalPages, siblingCount);
  console.log('pages', pages)
  const handlePageClick = (page) => {
    if (page !== 'DOTS' && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    return pages.map((page, index) => {
      if (page === 'DOTS') {
        return (
          <Pagination.Item key={index} onClick={() => {}} >
            <HiEllipsisHorizontal className="h-5 w-5 text-gray-500" aria-hidden="true" />
          </Pagination.Item>

        );
      }

      return (
        <Pagination.Item
          key={index}
          active={page === currentPage}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </Pagination.Item>
      );
    });
  };

  return (
   <div className="flex items-center justify-between border border-gray-200 rounded-md bg-white py-2 px-4 w-full">
    <span className="text-sm text-gray-700">
       Showing <span className="font-semibold">{startIndex}-{endIndex}</span> of <span className="font-semibold">{totalItems}</span>
    </span>

    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageClick}
      showIcons
      className="flex justify-center"
      layout="navigationOnly"
    >
      <Pagination.Prev onClick={() => handlePageClick(currentPage - 1)}>
         <HiChevronLeft className="mr-2 h-5 w-5" aria-hidden="true" />
      </Pagination.Prev>

      {renderPageNumbers()}

      <Pagination.Next onClick={() => handlePageClick(currentPage + 1)}>
         <HiChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
      </Pagination.Next>
    </Pagination>
    </div>
  );
};

export default CustomPagination;