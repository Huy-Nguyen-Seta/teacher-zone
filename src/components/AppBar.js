import React from "react";
import Notification from "./Notification";
import UserInfor from "./UserInfor";

const AppBar = ({ toggleSidebar, user }) => {
  return (
    <nav className="bg-white border border-[#E5E7EB] shadow-md p-4 flex justify-between items-center z-20 w-full fixed">
      <div className="flex flex-row justify-center items-center gap-6">
        <button
          onClick={toggleSidebar}
          className="text-gray-600 focus:outline-none focus:ring"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <img
          src="/images/tz-logo.png"
          alt="TeacherZone Logo"
          className="h-12"
        />{" "}
      </div>
      <div className="flex flex-row gap-5">
        <Notification imageSrc={"/icons/bell.png"} number={3}/>
        <Notification imageSrc={"/icons/messages.png"} number={1}/>
        <UserInfor user={user}/>
      </div>
    </nav>
  );
};

export default AppBar;
