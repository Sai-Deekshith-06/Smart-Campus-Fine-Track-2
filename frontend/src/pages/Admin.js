import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import {
    FaHome,
    FaPlus,
    FaFileInvoiceDollar,
    FaSignOutAlt
} from "react-icons/fa";
import AdminDashboard from './AdminDashboard';
import NewFineEntry from './NewFineEntry';
import ViewFines from './ViewFines';

function Admin() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/", { replace: true });
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/", { replace: true });
        window.location.reload();
    };

    return (
        // <div className="bg-gray-50 h-screen">
        <div style={{ display: "flex", minHeight: "100vh", width: "100%" }} className="bg-gray-50">
            <main className="flex w-full">
                <aside className="bg-blue-600 text-white shadow-md w-64 py-4 px-4">
                    <div className="text-2xl font-semibold mb-8">Admin Menu</div>
                    <nav>
                        <Link to="/admin/dashboard" className="block py-2 px-2 hover:bg-blue-800 rounded bg-blue-700 font-semibold">
                            <FaHome className="mr-2 w-6 inline-block text-center" /> Home
                        </Link>
                        <Link to="/admin/newFineEntry" className="block py-2 px-2 hover:bg-blue-800 rounded">
                            <FaPlus className="mr-2 w-6 inline-block text-center" /> New Fine Entry
                        </Link>
                        <Link to="/admin/viewFines" className="block py-2 px-2 hover:bg-blue-800 rounded">
                            <FaFileInvoiceDollar className="mr-2 w-6 inline-block text-center" /> View Fines
                        </Link>
                        <button onClick={handleLogout} className="block w-full text-left mt-4 py-2 px-2 hover:bg-blue-800 rounded">
                            <FaSignOutAlt className="mr-2 w-6 inline-block text-center" /> Logout
                        </button>
                    </nav>
                </aside>

                {/* <div className="flex-1 flex flex-col overflow-auto"> */}
                <div style={{ flex: 1, background: "#f5f5f5", padding: "0px" }}>
                    <Routes>
                        <Route path="dashboard" element={<AdminDashboard />} />
                        <Route path="newFineEntry" element={<NewFineEntry />} />
                        <Route path="viewFines" element={<ViewFines />} />
                    </Routes>
                </div>
            </main >
        </div >
    );
}

export default Admin;