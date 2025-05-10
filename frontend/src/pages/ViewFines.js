// import React from 'react'
// import { FaFileInvoiceDollar } from "react-icons/fa";

// function ViewFines() {
//     return (
//         <div className="flex-1 flex flex-col overflow-auto">
//             <header className="bg-white py-4 px-6 shadow-md sticky top-0">
//                 <h2 className="text-2xl font-bold mb-4 text-gray-800">
//                     <FaFileInvoiceDollar className="mr-2 inline-block" />View Fines
//                 </h2>
//             </header>
//         </div>
//     )
// }

// export default ViewFines

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaFileInvoiceDollar, FaSearch, FaChevronDown, FaCalendar, FaFilter, FaTimes } from "react-icons/fa";

function ViewFinesUI() {

    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        batch: "",
        due_date: "",
        student_id: ""
    })

    useEffect(() => {
        async function fetchData() {

        }
    })

    return (
        <div className="flex-1 overflow-auto bg-gray-50 py-4 px-6">
            <div className="bg-white shadow rounded-lg p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                        <FaFileInvoiceDollar className="inline-block mr-2" />
                        View Fines
                    </h2>
                    <div className="flex items-center space-x-2">
                        <form className="flex items-center space-x-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="student_id"
                                    placeholder="Search by Student ID"
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                                />
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                            >
                                Search
                            </button>
                            <button
                                type="button"
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                            >
                                Clear
                            </button>
                        </form>
                    </div>
                </div>

                {/* Filters */}
                <form className="space-y-4 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
                        {/* Example Filter */}
                        <div className="filter-group relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Batch</label>
                            <select className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                                <option value="">All Batches</option>
                                {/* Add dynamic options here */}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <FaChevronDown />
                            </div>
                        </div>

                        {/* Repeat similar structure for Branch, Category, Status, Due Date */}
                        <div className="filter-group relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                            <input
                                type="date"
                                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <FaCalendar />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
                            >
                                <FaFilter className="mr-2" />
                                Apply
                            </button>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
                            <button
                                type="button"
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center"
                            >
                                <FaTimes className="mr-2" />
                                Clear
                            </button>
                        </div>
                    </div>
                </form>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full leading-normal text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-3 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Student ID
                                </th>
                                <th className="px-3 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Student Name
                                </th>
                                <th className="px-3 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Fine Details
                                </th>
                                <th className="px-3 py-3 border-b-2 border-gray-200 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Amount
                                </th>
                                <th className="px-3 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Issued
                                </th>
                                <th className="px-3 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Due Date
                                </th>
                                <th className="px-3 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Transaction ID
                                </th>
                                <th className="px-3 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-3 py-3 border-b-2 border-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {/* Map over fines data here */}
                            <tr>
                                <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">23B81A05A1</td>
                                <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">John Doe</td>
                                <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-gray-800">Library Fine</span>
                                        <span className="text-gray-600 text-sm mt-1">Late book return</span>
                                    </div>
                                </td>
                                <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm text-right">₹50.00</td>
                                <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">2025-05-01</td>
                                <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">2025-05-10</td>
                                <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">TXN12345</td>
                                <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm text-green-600 font-semibold">
                                    Paid
                                </td>
                                <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm text-center">
                                    <button className="text-red-600 hover:text-red-800 text-xs font-bold py-1 px-2 rounded">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ViewFinesUI;