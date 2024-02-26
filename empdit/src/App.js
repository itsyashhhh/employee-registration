import React, { useState } from 'react';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import axios from 'axios';

const App = () => {
  const [firstFormData, setFirstFormData] = useState(null);
  const [showSecondForm, setShowSecondForm] = useState(false);

  const handleFirstFormSubmit = (data) => {
    setFirstFormData(data);
    setShowSecondForm(true);
  };

  const handleSecondFormSubmit = (data) => {
    // Combine data from both forms
    const formData = { ...firstFormData, ...data };
  
    // Send form data to the backend
    axios.post('http://localhost:5000/submit-form', formData)
      .then(response => {
        console.log(response.data);
        // Handle successful submission
        // For example, show a success message to the user
      })
      .catch(error => {
        console.error('Error submitting form data:', error);
        // Handle error
        // For example, show an error message to the user
      });
  };
  

  return (
    <div>
      <h1>My Forms Project</h1>
      {!showSecondForm ? (
        <FirstForm onNext={handleFirstFormSubmit} />
      ) : (
        <SecondForm onSubmit={handleSecondFormSubmit} />
      )}
    </div>
  );
};

export default App;
