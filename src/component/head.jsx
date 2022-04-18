import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Heading() {
  return (
    <div className="pt-24 border-b-2 shadow-md">
      <Router>
        <ul class="flex flex-wrap mx-auto container">
          <Link
            to="#"
            aria-current="page"
            className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            <li class="mr-2 ">Home</li>
          </Link>
          <Link
            to="#"
            aria-current="page"
            className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            <li class="mr-2 ">Coin List</li>
          </Link>
        </ul>
      </Router>
    </div>
  );
}

export default Heading;
