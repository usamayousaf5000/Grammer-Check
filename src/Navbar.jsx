import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem('token'); // Get the token from local storage

    try {
      await axios.post('http://localhost:3001/api/logout', { token }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  return (
    <div className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="title">
          <h3 className="text-xl font-bold">My-App</h3>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-4">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
            </li>
          </ul>
          <button
            type="button"
            onClick={handleLogout} // Trigger logout on click
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;