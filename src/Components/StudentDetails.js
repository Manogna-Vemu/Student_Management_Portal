import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch('/data.json') 
      .then((response) => response.json())
      .then((data) => {
        const foundStudent = data.find((student) => student.id === parseInt(id, 10));
        setStudent(foundStudent);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  return (
    <div className="StudentDetails">
      {student ? (
        <div className="student-card">
          <div className="profile-image">
            {/* Profile image path from public/images */}
            <img src={`/images/profile.jpg`} alt={`${student.name} profile`} />
          </div>
          <div className="student-info">
            <h2>{student.name}'s Details</h2>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Class:</strong> {student.class}</p>
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Address:</strong> {student.address}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default StudentDetails;
