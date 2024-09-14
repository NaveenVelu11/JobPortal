// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here (e.g., authentication)
    console.log('Logging in:', { username, password });
    navigate('/'); // Redirect to home page after successful login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5EDED]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-[#003B6F] mb-6">Login</h2>
        <form onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
