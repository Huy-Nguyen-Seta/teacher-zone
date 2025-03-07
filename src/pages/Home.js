import React from 'react';

const Home = ({  }) => {
  return (
    <div className="bg-gray-50 flex items-center justify-start w-full h-screen ">
    <div className="rounded-lg w-1/2  h-1/2 px-40">
      {/* Header Section */}
      <div className="mb-6">
        <div className="bg-[#717D96] h-16 w-full rounded mb-2"></div>
        <div className="bg-[#717D96] h-16 w-3/4 rounded"></div>
      </div>

      {/* Title */}
      <h1 className="text-[56px] font-bold text-[#2D3648] my-4">
        TZ's Landing Page...
      </h1>

      {/* Content Section */}
      <div className="mb-6">
        <div className="bg-[#A0ABC0] h-4 w-full rounded mb-2"></div>
        <div className="bg-[#A0ABC0] h-4 w-full rounded mb-2"></div>
        <div className="bg-[#A0ABC0] h-4 w-full rounded mb-2"></div>
        <div className="bg-[#A0ABC0] h-4 w-2/3 rounded"></div>
      </div>

      {/* Buttons Section */}
      <div className="flex gap-2">
        <button
          className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
        >
          Sign up
        </button>
        <button className="text-gray-700 py-2 px-4 rounded border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
          Log In
        </button>
      </div>
    </div>
  </div>
  );
};

export default Home;