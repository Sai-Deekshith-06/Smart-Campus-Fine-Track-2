import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import PrivateRoute from './PrivateRoute';
import Admin from './pages/Admin';
import Student from './pages/Student';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/admin/*" element={<Admin />} />
            {/* <Route path="/admin/newFineEntry" element={<NewFineEntry />} /> */}
          </Route>
          <Route path="/student/:studentId" element={<Student />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;