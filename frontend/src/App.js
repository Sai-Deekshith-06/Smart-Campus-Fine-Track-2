import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Admin from './pages/Admin';
import Student from './pages/Student';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;