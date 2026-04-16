import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">

      <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-red-500">
        404
      </h1>

      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-4">
        Oops! Page not found
      </h2>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mt-3 mb-6 max-w-md md:max-w-xl">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 
               bg-red-500 text-white rounded-lg shadow-md 
               hover:bg-green-500 transition duration-300 text-sm sm:text-base"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default ErrorPage;