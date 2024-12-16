import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StudentContext } from '../StudentContext'; 
import '../App.css';

function StudentList() {
  const { students, deleteStudent } = useContext(StudentContext);
  const [selectedGrade, setSelectedGrade] = useState('All'); 
  const grades = ['All', ...new Set(students.map((student) => student.class))];

  const filteredStudents =
    selectedGrade === 'All'
      ? students
      : students.filter((student) => student.class === selectedGrade);

  if (!students.length) {
    return <p>No students registered yet.</p>;
  }

  return (
    <div className="StudentList">
      <h2>Student List</h2>

      {/* Grade Filter */}
      <div className="grade-filter">
        <label htmlFor="grade-select">Filter by Grade: </label>
        <select
          id="grade-select"
          value={selectedGrade}
          onChange={(e) => setSelectedGrade(e.target.value)}
        >
          {grades.map((grade, index) => (
            <option key={index} value={grade}>
              {grade}
            </option>
          ))}
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
              <td>
                <Link to={`/students/${student.id}`}>View Details</Link>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
