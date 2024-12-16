import React, { createContext, useState, useEffect } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/data.json') 
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error loading students:', error));
  }, []);

  const addStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, setStudents, addStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
