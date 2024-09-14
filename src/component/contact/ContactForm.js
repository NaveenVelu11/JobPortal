import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setSuccess('Your message has been sent successfully!');
      // Reset form data
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
      {success && <p className="text-green-600 mb-4 text-center">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            rows="5"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-colors duration-300">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
