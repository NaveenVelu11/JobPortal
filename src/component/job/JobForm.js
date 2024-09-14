// src/components/job/JobForm.js
import React, { useState } from 'react';

function JobForm() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    requirements: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Post a New Job</h2>
      <div className="mb-4">
        <label className="block mb-2">Job Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Company</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Requirements (comma-separated)</label>
        <input
          type="text"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Salary</label>
        <input
          type="text"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <button type="submit" className="bg-primaryBlue text-white px-4 py-2 rounded-lg hover:bg-primaryBlueDark">Post Job</button>
    </form>
  );
}

export default JobForm;
