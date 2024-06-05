import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = false; // Replace with actual login state
  const userName = 'User'; // Replace with actual logged in user name

  const handleLogout = () => {
    // Handle logout logic
    navigate('/login');
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold">resQhub Dashboard</h1>
      <nav className="flex space-x-4">
        {isLoggedIn ? (
          <>
            <span>Welcome, {userName}</span>
            <button onClick={handleLogout} className="p-2 bg-red-500 text-white rounded-md">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="p-2 bg-blue-500 text-white rounded-md">
              Login
            </Link>
            <Link to="/register" className="p-2 bg-green-500 text-white rounded-md">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
