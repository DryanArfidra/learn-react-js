import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ toggleSidebar }) => {
  const { isAuthenticated, user, logout } = useAuth(); // Ambil 'user' dari context
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout();
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="mr-4 p-2 rounded hover:bg-blue-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-2xl font-extrabold  text-center text-yellow-400 drop-shadow">R_Xanz Store</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Tampilkan username jika sudah login */}
          {isAuthenticated && user && (
            <span className="text-sm">Welcome, <strong>{user.username}</strong></span>
          )}
          
          <button
            onClick={handleAuthAction}
            className={`font-bold py-2 px-4 rounded transition-colors duration-200 ${
              isAuthenticated
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;