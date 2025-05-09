import React from 'react'
import { FaFileInvoiceDollar } from "react-icons/fa";

function ViewFines() {
    return (
        <div className="flex-1 flex flex-col overflow-auto">
            <header className="bg-white py-4 px-6 shadow-md sticky top-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    <FaFileInvoiceDollar className="mr-2 inline-block" />View Fines
                </h2>
            </header>
        </div>
    )
}

export default ViewFines