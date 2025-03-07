import React from "react";

const LoginButton = ({ imageSrc, title, link }) => {
  return (
    <button
      type="button"
      class="w-full h-[52px] border border-[#21252C] text-gray-900 bg-white hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
    >
      <img src={imageSrc} alt="TeacherZone Logo" className='w-7 h-7' />
      <span className="w-3/4 mx-4 text-base font-medium">{title}</span>
    </button>
  );
};

export default LoginButton;
