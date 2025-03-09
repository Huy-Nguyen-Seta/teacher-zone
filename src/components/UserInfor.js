import React from "react";

const UserInfor = ({user}) => {
	return (
		<div className="flex items-center space-x-4 w-[152px] h-full px-1">
			<div className="flex flex-col justify-end items-end">
				<span className="text-[#4B5563] text-xs">
					{
					user ?. name
				}</span>
				<span className="text-[#1C64F2] text-sm font-medium">
					{
					user ?. org
				}</span>
			</div>
			<div>
				<img src={
						user ?. imageSrc
					}
					alt="TeacherZone Logo"
					className='w-12 h-12 rounded-full p-2 border hover:border-gray-400 cursor-pointer'/>
			</div>
		</div>
	);
};

export default UserInfor;
