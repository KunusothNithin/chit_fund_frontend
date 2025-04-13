import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
