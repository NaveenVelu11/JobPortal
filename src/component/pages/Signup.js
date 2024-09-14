// src/pages/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement your signup logic here (e.g., saving user data)
    console.log('Signing up:', { username, email, password });
    navigate('/login'); // Redirect to login page after successful signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5EDED]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-[#003B6F] mb-6">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B6F]"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B6F]"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B6F]"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#003B6F] text-white py-2 px-4 rounded-lg hover:bg-[#F5EDED] hover:text-[#003B6F] transition-colors duration-300"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
