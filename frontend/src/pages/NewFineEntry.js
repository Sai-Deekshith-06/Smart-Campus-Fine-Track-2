import React, { useEffect } from 'react';
import {
    FaPlus
} from "react-icons/fa";

function NewFineEntry() {
    useEffect(() => {
        console.log("New Fine Entry Page Loaded");
    })
    const fineCategories = [
        { type: 'Library Fine', amount: 50 },
        { type: 'Hostel Fine', amount: 100 },
        { type: 'Transport Fine', amount: 150 },
        { type: 'Miscellaneous Fine', amount: 200 },
    ];
    const dueDate = new Date().toISOString().split('T')[0]; // Set default due date to today
    const [details, setDetails] = React.useState({
        student_id: '',
        student_email: '',
        fine_category: '',
        amount: 0,
        due_date: dueDate,
        reason: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    }

    return (
        <div className="flex-1 flex flex-col overflow-auto">
            <header className="bg-white py-4 px-6 shadow-md sticky top-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    <FaPlus className="mr-2 inline-block" /> New Fine Entry
                </h2>
            </header>
            <div className="overflow-auto bg-gray-50 py-4 px-6">
                <div className="bg-white shadow rounded-lg p-6 mb-8 max-w-4xl mx-auto">
                    <form id="newFineForm" method="post">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="student_id">Student ID</label>
                                <input
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="student_id"
                                    name="student_id"
                                    value={details.student_id}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    pattern="[0-9]{2}B81A[0-9]{2}[A-Z0-9]{2}"
                                    title="Enter valid Student ID in caps (e.g., 23B81A05H1)"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="student_email">Student Email</label>
                                <input
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100 focus:outline-none sm:text-sm"
                                    id="student_email"
                                    name="student_email"
                                    value={details.student_email}
                                    onChange={(e) => handleChange(e)}
                                    type="email"
                                    readOnly
                                    tabIndex="-1"
                                />
                                <p id="student_email_status" className="mt-1 text-sm text-red-600 hidden">Student not found.</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fine_category">Fine Category</label>
                                <select
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="fine_category"
                                    name="fine_category"
                                    onChange={(e) => handleChange(e)}
                                    required
                                >
                                    <option value="">Select Category...</option>
                                    {fineCategories.map((category) => (
                                        <option key={category.type} value={category.type}>{category.type}</option>
                                    ))}
                                </select>
                                <p className="mt-1 text-sm text-red-600 hidden" id="fineCategoryError">
                                    Fine category not found or amount mismatch.
                                </p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="amount">Fine Amount</label>
                                <input
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="amount"
                                    name="amount"
                                    value={fineCategories.find(category => category.type === details.fine_category)?.amount || 0}
                                    type="number"
                                    onChange={(e) => handleChange(e)}
                                    step="0.01"
                                    min="0"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="due_date">Due Date</label>
                                <input
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="due_date"
                                    name="due_date"
                                    value={details.dueDate}
                                    onChange={(e) => handleChange(e)}
                                    type="date"
                                    defaultValue={dueDate}
                                    required
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="reason">Reason</label>
                                <textarea
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    id="reason"
                                    name="reason"
                                    value={details.reason}
                                    onChange={(e) => handleChange(e)}
                                    aria-describedby="charCount"
                                    rows="3"
                                    maxLength="200"
                                    required
                                ></textarea>
                                <p className="text-sm text-gray-500 text-right" id="charCount">
                                    0 / 200 characters
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end mt-6">
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                type="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log(details);
                                }}


                            >
                                Create Fine
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewFineEntry;