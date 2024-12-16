import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
      <h1>Student Management</h1>
      <ul>
        <li><Link to="/">Home</Link></li> {/* Added Home link */}
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/register">StudentForm</Link></li>
        <li><Link to="/students">Student List</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
