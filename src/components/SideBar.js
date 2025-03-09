import React, {useState} from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineCalendar, AiOutlineShoppingCart, AiOutlinePieChart, AiOutlineCloudUpload, AiOutlineRight, AiOutlineDown } from 'react-icons/ai';
import {Link} from 'react-router-dom';
const Sidebar = ({isOpen}) => {
	const sidebarData = [
		{
			label: 'Dashboard',
			icon: 'AiOutlineHome', // Example icon name from react-icons (adjust)
			path: '/dashboard', // Optional:  Path for navigation
		},
		{
			label: 'Members',
			icon: 'AiOutlineUser',
			hasSubMenu: false,
			path: '/members', // Example path to members page
		},
		{
			label: 'Learning',
			icon: 'AiOutlineBook',
			hasSubMenu: false,
			path: '/learning', // Example path to learning page
		},
		{
			label: 'Scheduling',
			icon: 'AiOutlineCalendar',
			hasSubMenu: false,
			path: '/scheduling', // Example path to scheduling page
		}, {
			label: 'Student Billing',
			icon: 'AiOutlineShoppingCart',
			hasSubMenu: true,
			subMenuItems: [
				{
					label: 'Plan Builders',
					path: '/plan-builders'
				},
				{
					label: 'Store Builder',
					path: '/store-builder'
				},
				{
					label: 'Approve Plan',
					path: '/approve-plan'
				},
				{
					label: 'Plan Widget',
					path: '/plan-widget'
				}, {
					label: 'Store Widget',
					path: '/store-widget'
				}, {
					label: 'Login Widget',
					path: '/login-widget'
				},
			]
		}, {
			label: 'Reporting',
			icon: 'AiOutlinePieChart',
			hasSubMenu: false,
			path: '/reporting', // Example path to reporting page
		}, {
			label: 'Import/Export Data',
			icon: 'AiOutlineCloudUpload',
			hasSubMenu: false,
			path: '/import-export', // Example path to import/export data page
		},
	];
	const [expandedSubMenu, setExpandedSubMenu] = useState(null); // Track which sub-menu is expanded

	const toggleSubMenu = (label) => {
		setExpandedSubMenu(expandedSubMenu === label ? null : label); // Toggle expansion
	};

	// const getIcon = (iconName) => {
	// switch (iconName) {
	// case 'AiOutlineHome':
	// return 'icons/bell.png';
	// case 'AiOutlineUser':
	// return 'icons/bell.png';
	// case 'AiOutlineBook':
	// return 'icons/bell.png';
	// case 'AiOutlineCalendar':
	// return 'icons/bell.png';
	// case 'AiOutlineShoppingCart':
	// return 'icons/bell.png';
	// case 'AiOutlinePieChart':
	// return 'icons/bell.png';
	// case 'AiOutlineCloudUpload':
	// return 'icons/bell.png';
	// default:
	// return null;
	// }
	// };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'AiOutlineHome': return <AiOutlineHome className="mr-2" />;
      case 'AiOutlineUser': return <AiOutlineUser className="mr-2" />;
      case 'AiOutlineBook': return <AiOutlineBook className="mr-2" />;
      case 'AiOutlineCalendar': return <AiOutlineCalendar className="mr-2" />;
      case 'AiOutlineShoppingCart': return <AiOutlineShoppingCart className="mr-2" />;
      case 'AiOutlinePieChart': return <AiOutlinePieChart className="mr-2" />;
      case 'AiOutlineCloudUpload': return <AiOutlineCloudUpload className="mr-2" />;
      default: return null;
    }
};


	return (
		<aside className={
			`border border-[#E5E7EB] mt-20 top-0 left-0 h-full bg-white shadow-md w-64 transition-transform transform ${
				isOpen ? 'translate-x-0' : '-translate-x-full fixed'
			} duration-300 ease-in-out z-5`
		}>
			<div className="p-4">
				<ul className="space-y-2">
					{
					sidebarData.map((item) => (
						<li key={
							item.label
						}>
							{
							item.hasSubMenu ? (
								<>
									<button onClick={
											() => toggleSubMenu(item.label)
										}
										className="flex items-center justify-between w-full hover:bg-gray-100 p-2 rounded">
										<div className="flex items-center">
                    {item.icon && getIcon(item.icon)}

											<span>{
												item.label
											}</span>
										</div>
										{
										expandedSubMenu === item.label ? <AiOutlineDown/>: <AiOutlineRight/>
									}
										{/* Sub-menu Toggle Arrow */} </button>
									{/* Sub-menu Items */}
									{
									expandedSubMenu === item.label && (
										<ul className="pl-4 space-y-1 mt-1">
											{
											item.subMenuItems.map((subItem) => (
												<li key={
													subItem.label
												}>
													<Link to={
															subItem.path
														}
														className="block hover:bg-gray-100 p-2 rounded">
														{
														subItem.label
													} </Link>
												</li>
											))
										} </ul>
									)
								} </>
							) : (
								<Link to={
										item.path
									}
									className="flex items-center hover:bg-gray-100 p-2 rounded">
							                    {item.icon && getIcon(item.icon)}

									<span>{
										item.label
									}</span>
								</Link>
							)
						} </li>
					))
				} </ul>
			</div>
		</aside>
	);
};

export default Sidebar;
