import React from "react";

const Notification = ({ imageSrc, number }) => {
  return (
    <div className="flex items-center space-x-4 hover:opacity-80 cursor-pointer">
      <div className="relative">
        <img src={imageSrc} alt="TeacherZone Logo" className="h-6 w-6" />
        <span className="absolute flex items-center justify-center w-[15px] h-[15px] top-[-5px] right-[-15px] bg-[#1C64F2] text-white rounded-full text-xs font-medium">
          {number}
        </span>
      </div>
    </div>
  );
};

export default Notification;
