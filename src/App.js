import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    number: '',
    email: '',
    address: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fname) newErrors.fname = 'First Name is required';
    if (!formData.lname) newErrors.lname = 'Last Name is required';
    if (!formData.number) newErrors.number = 'Phone Number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.address) newErrors.address = 'Address is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const url = 'http://localhost:5000/regster';

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => {
          if (data.message) {
            console.log('Error:', data.message);
          } else {
            console.log('User created:', data);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });

      alert('Form submitted successfully!');
      console.log('Form Data:', formData);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[50vw] border p-4">
        <h1 className="text-center mb-4">Gokul Infocare</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">First Name</label>
            <input
              id="fname"
              className="form-control"
              type="text"
              value={formData.fname}
              onChange={handleChange}
            />
            {errors.fname && <div className="text-danger">{errors.fname}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="lname" className="form-label">Last Name</label>
            <input
              id="lname"
              className="form-control"
              type="text"
              value={formData.lname}
              onChange={handleChange}
            />
            {errors.lname && <div className="text-danger">{errors.lname}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="number" className="form-label">Phone Number</label>
            <input
              id="number"
              className="form-control"
              type="number"
              value={formData.number}
              onChange={handleChange}
            />
            {errors.number && <div className="text-danger">{errors.number}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Id</label>
            <input
              id="email"
              className="form-control"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              id="address"
              className="form-control"
              type="text"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <div className="text-danger">{errors.address}</div>}
          </div>

          <button className="btn btn-success" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
