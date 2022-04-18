import React from 'react';

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <nav className="h-full flex justify-end py-10">
        <ul className="flex list-style-none">
          {pageNumbers.map((num) => (
            <li key={num} className="mx-1 page-item relative">
              <a
                onClick={() => paginate(num)}
                className="page-link px-3 py-2 rounded-md bg-dark-green text-lg text-primary cursor-pointer"
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
