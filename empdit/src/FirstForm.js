import React, { useState } from 'react';
import './FirstForm.css'; // Import the CSS file

const FirstForm = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    employeeId: '',
    salary: '',
    gender: '',
    department: '',
    designation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNext = () => {
    onNext(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Employee ID:</label>
          <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Salary:</label>
          <input type="number" name="salary" value={formData.salary} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <label><input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} /> Male</label>
          <label><input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} /> Female</label>
        </div>
        <div className="form-group">
          <label>Department:</label>
          <select name="department" value={formData.department} onChange={handleChange}>
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Designation:</label>
          <input type="text" name="designation" value={formData.designation} onChange={handleChange} />
        </div>
        <div className="form-group">
          <button type="button" onClick={handleNext}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default FirstForm;