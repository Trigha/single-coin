import React from 'react';

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <nav className="h-full flex justify-end py-10 mx-10">
        <ul className="flex list-style-none">
          {pageNumbers.map((num) => (
            <li key={num} className="mx-1 page-item relative">
              <a
                onClick={() => paginate(num)}
                className="page-link px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white cursor-pointer"
              >
                {num}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
