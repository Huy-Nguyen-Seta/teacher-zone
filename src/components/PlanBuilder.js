import {
	Badge,
	Button,
	Dropdown,
	Pagination,
	TextInput
} from 'flowbite-react';
import React, {useState} from 'react';
import {
	AiOutlineCopy,
	AiOutlineDelete,
	AiOutlineEdit,
	AiOutlineEyeInvisible,
	AiOutlineRocket
} from 'react-icons/ai'; // More icons
import {HiDotsVertical, HiPlus} from 'react-icons/hi'; // For icons
import CustomPagination from './Pagination';


const data = [
	{
		id: 1,
		name: '20 mins $200',
		status: 'Active'
	},
	{
		id: 2,
		name: '20 days recurring 1: $92',
		status: 'Active'
	},
	{
		id: 3,
		name: '30 days: FREE',
		status: 'Active'
	},
	{
		id: 4,
		name: 'Guitar 101: $100',
		status: 'Active'
	}, {
		id: 5,
		name: 'MonthlyNext: $150',
		status: 'Active'
	}, {
		id: 6,
		name: 'no cc 1: FREE',
		status: 'Active'
	}, {
		id: 7,
		name: 'One 1: $1',
		status: 'Active'
	}, {
		id: 8,
		name: 'One 2: $2',
		status: 'Active'
	},
];

const itemsPerPage = 10;
const totalItems = 1000; // Example
const PlanBuilder = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [visibleFilter, setVisibleFilter] = useState('Visible'); // State for the "Visible" dropdown
	const [dropdownStates, setDropdownStates] = useState({}); // Store dropdown open/close state for each row.
	const [currentPage, setCurrentPage] = useState(1);

	// Calculate the start and end index of the current page
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = Math.min(startIndex + itemsPerPage, data.length);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const toggleDropdown = (id) => {
		setDropdownStates(prevState => ({
			...prevState,
			[id]: !prevState[id]
		}));
	};

	const renderActionDropdown = (id) => {
		return (
			<Dropdown inline={true}
				renderTrigger={() =>
					<HiDotsVertical
				className="w-5 h-5"/>
				}
				onClick={
					() => toggleDropdown(id)
				}
				// Toggle on click
				dismissOnClick={false}
				open={
					dropdownStates[id] || false
			}>
				<Dropdown.Header> {/* Use Dropdown.Menu */}
					<Dropdown.Item icon={AiOutlineCopy}>Copy Link</Dropdown.Item>
					{/* Use Dropdown.Item */}
					<Dropdown.Item icon={AiOutlineRocket}>Launch</Dropdown.Item>
					<Dropdown.Item icon={AiOutlineEdit}>Edit</Dropdown.Item>
					<Dropdown.Item icon={AiOutlineDelete}>Delete</Dropdown.Item>
					<Dropdown.Item icon={AiOutlineEyeInvisible}>Hide</Dropdown.Item>
				</Dropdown.Header>
			</Dropdown>
		);
	};

	return (
		<div className="container mx-auto p-4">
			<div className="flex items-center justify-between mb-4">
				<h1 className="text-2xl font-bold">Private Lesson Plans</h1>
				<Button color="blue"
					pill={true}
					className="flex items-center space-x-2">
					<HiPlus className="w-5 h-5"/>
					<span>Add New Plan</span>
				</Button>
			</div>

			<div className="flex items-center justify-between mb-4">
				<TextInput type="text" placeholder="Enter Plan Name"
					value={searchTerm}
					onChange={
						(e) => setSearchTerm(e.target.value)
					}
					className="w-1/3"/>
				<div className="flex items-center space-x-2">
					<Button color="blue">Filter</Button>
					<Dropdown label={visibleFilter}
						onSelect={
							(value) => setVisibleFilter(value)
					}>
						<Dropdown.Item>Visible</Dropdown.Item>
						<Dropdown.Item>Hidden</Dropdown.Item>
						<Dropdown.Item>All</Dropdown.Item>
					</Dropdown>
				</div>
			</div>


			<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" class="p-4">
								<div class="flex items-center">
									<input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
									<label for="checkbox-all" class="sr-only">checkbox</label>
								</div>
							</th>
							<th scope="col" class="px-6 py-3">
								Plan Name
							</th>
							<th scope="col" class="px-6 py-3">
								Status
							</th>
							<th scope="col" class="px-6 py-3 flex justify-center">
								Acction
							</th>
						</tr>
					</thead>
					<tbody> {
						data.slice(startIndex, endIndex).map((item) => (
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

								<td class="w-4 p-4">
									<div class="flex items-center">
										<input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
										<label for="checkbox-table-1" class="sr-only">checkbox</label>
									</div>
								</td>
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									{
									item.name
								} </th>
								<td class="px-6 py-4">
									<Badge color="success">
										{
										item.status
									}</Badge>
								</td>

								<td class="px-6 py-4 flex justify-center">
									{
									renderActionDropdown(item.id)
								} </td>
							</tr>
						))
					} </tbody>
				</table>
			</div>

			{/* <Table>
				<TableHead>
					<TableRow>
						<TableHeadCell>
							<Checkbox/>
						</TableHeadCell>
						<TableHeadCell>Actions</TableHeadCell>
						<TableHeadCell>Status</TableHeadCell>
						<TableHeadCell>Action</TableHeadCell>
					</TableRow>
				</TableHead>
				<TableBody className="divide-y">
					{
					data.slice(startIndex, endIndex).map((item) => ( // Display only items for current page <TableRow key={
							item.id
						}
						className="bg-white dark:border-gray-700 dark:bg-gray-800">
						<TableCell>
							<Checkbox/>
						</TableCell>
						<TableCell>{
							item.name
						}</TableCell>
						<TableCell>
							<Badge color="success">
								{
								item.status
							}</Badge>
						</TableCell>
						<TableCell> {
							renderActionDropdown(item.id)
						} </TableCell>
					</TableRow>))
				}
					{
					data.slice(startIndex, endIndex).map((item) => (
						<></>
					))
				} </TableBody>
			</Table> */}

			{/* Pagination */}
			<div className="flex flex-col items-center mt-4">
				<span className="text-sm text-gray-700 dark:text-gray-400">
					Showing
					<span className="font-semibold text-gray-900 dark:text-white">
						{
						startIndex + 1
					}-{endIndex}</span>
					of
					<span className="font-semibold text-gray-900 dark:text-white">
						{totalItems}</span>
				</span>
                <CustomPagination
  currentPage={15}
  totalPages={100}
  onPageChange={handlePageChange}
  siblingCount={1}
  itemsPerPage={10}
  totalItems={1000}
/>

			</div>
		</div>
	);
};

export default PlanBuilder;
