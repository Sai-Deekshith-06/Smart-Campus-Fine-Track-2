import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import PrivateRoute from './PrivateRoute';
import Admin from './pages/Admin';
import Student from './pages/Student';

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
          <Route path="/student" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;