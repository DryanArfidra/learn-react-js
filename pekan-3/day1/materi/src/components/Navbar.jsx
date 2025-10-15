import React from 'react';
import { useUser } from '../context/UserContext';
import ThemeButton from './ThemeButton';

const Navbar = () => {
  const { username, isLoggedIn, logout } = useUser();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="avatar">
          <img src="https://static.vecteezy.com/system/resources/previews/048/216/761/non_2x/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png" alt="Avatar" />
          <span>{username}</span>
        </div>
      </div>
      <div className="navbar-right">
        <ThemeButton />
        {isLoggedIn && <button onClick={logout} className="logout-btn">Logout</button>}
      </div>
    </nav>
  );
};

export default Navbar;