import React, { useState } from 'react';
import UserContext from './UserContext';

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('username');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUsername('username');
    setIsLoggedIn(false);
  };

  const value = {
    username,
    isLoggedIn,
    login,
    logout,
    setUsername,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};