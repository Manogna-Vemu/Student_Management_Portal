import React, { useState, useContext } from 'react';
import { StudentContext } from '../StudentContext';
import '../App.css';

function StudentForm() {
  const { addStudent } = useContext(StudentContext);
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!newStudent.name) newErrors.name = 'Name is required';
    if (!newStudent.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(newStudent.email)) newErrors.email = 'Invalid email';

    if (!newStudent.age) newErrors.age = 'Age is required';
    else if (isNaN(newStudent.age) || newStudent.age < 10 || newStudent.age > 18)
      newErrors.age = 'Age must be between 10 and 18';

    if (!newStudent.class) newErrors.class = 'Class is required';
    if (!newStudent.address) newErrors.address = 'Address is required';
    if (!newStudent.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(newStudent.phone))
      newErrors.phone = 'Phone number must be 10 digits';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addStudent(newStudent); 
      setNewStudent({ name: '', email: '', age: '', class: '', address: '', phone: '' }); // Reset form
    }
  };

  return (
    <form className="StudentForm" onSubmit={handleSubmit}>
      <h2>Register New Student</h2>

      {/* Name */}
      <input name="name" placeholder="Name" value={newStudent.name} onChange={handleChange} />
      {errors.name && <p className="error">{errors.name}</p>}

      {/* Email */}
      <input name="email" placeholder="Email" value={newStudent.email} onChange={handleChange} />
      {errors.email && <p className="error">{errors.email}</p>}

      {/* Age */}
      <input name="age" placeholder="Age" value={newStudent.age} onChange={handleChange} />
      {errors.age && <p className="error">{errors.age}</p>}

      {/* Grade Dropdown */}
      <select
        name="class"
        value={newStudent.class}
        onChange={handleChange}
        placeholder="Select Grade"
      >
        <option value="">Select Grade</option>
        <option value="10th Grade">10th Grade</option>
        <option value="11th Grade">11th Grade</option>
        <option value="12th Grade">12th Grade</option>
      </select>
      {errors.class && <p className="error">{errors.class}</p>}

      {/* Address */}
      <input name="address" placeholder="Address" value={newStudent.address} onChange={handleChange} />
      {errors.address && <p className="error">{errors.address}</p>}

      {/* Phone */}
      <input name="phone" placeholder="Phone" value={newStudent.phone} onChange={handleChange} />
      {errors.phone && <p className="error">{errors.phone}</p>}

      {/* Submit Button */}
      <button type="submit">Register</button>
    </form>
  );
}

export default StudentForm;
