import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './pagination';
import { FiSearch } from 'react-icons/fi';
import ReactLoading from 'react-loading';

function Content() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get('https://api.coinpaprika.com/v1/coins');
      setData(result.data.slice(0, 50));

      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center content-center h-screen">
        <br />

        <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
      </div>
    );
  }

  return (
    <div>
      <h4 className="text-slate-300 font-light container mx-auto mt-10">
        Coint List
      </h4>
      <div className="container mx-auto pt-5">
        <div className="flex flex-col border-gray-300 rounded-lg shadow-lg w-full pt-5">
          <div className="px-8 py-5">
            <h1 className="text-blue-500 font-medium mx-2">Coin List</h1>
          </div>
          <div className="flex flex-row mb-10">
            <button
              id="dropdownDividerButton"
              data-dropdown-toggle="dropdownDivider"
              className="mr-5 ml-10 text-slate-500 bg-white w-52 border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              placeholder="Select"
            >
              <span className="text-slate-400 pl-2 mr-24">Select</span>
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div className="relative">
              <button class="absolute top-0 bottom-0 left-3 text-primary font-bold">
                <FiSearch size={15} />
              </button>
              <input
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 dark:border-gray-600 rounded-lg pl-9 py-2 px-4 block w-72 mr-5 appearance-none leading-normal"
                type="text"
                placeholder="Search"
              />
            </div>
            <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
              Search
            </button>
          </div>

          {/* main content */}
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-10  ">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Symbol
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Rank
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Active
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentPost.map((el, i) => (
                  <tr
                    class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-blue-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                    key={i}
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {el.id}
                    </th>
                    <td class="px-6 py-4">{el.name}</td>
                    <td class="px-6 py-4">{el.symbol}</td>
                    <td class="px-6 py-4">{el.rank}</td>
                    <td class="px-6 py-4">{el.type}</td>
                    <td class="px-6 py-4">{el.is_active}</td>
                    <td class="px-6 py-4">
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <Pagination
              postPerPage={postPerPage}
              totalPosts={data.length}
              paginate={paginate}
            />
          </div>
          {/* end main content */}
        </div>
      </div>
    </div>
  );
}

export default Content;
