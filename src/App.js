import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import StudentForm from './Components/StudentForm';
import StudentList from './Components/StudentList';
import StudentDetails from './Components/StudentDetails';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<StudentForm />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/:id" element={<StudentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
