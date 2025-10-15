import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import Navbar from '../components/Navbar';

const Home = () => {
  const { username, login, isLoggedIn, setUsername } = useUser();
  const [inputUsername, setInputUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputUsername.trim()) {
      login(inputUsername);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="login-container">
        {isLoggedIn ? (
          <div className="welcome-container">
            <h2>Selamat Datang, {username}</h2>
            <div className="username-change">
              <label htmlFor="username-change">Ubah Username:</label>
              <input
                id="username-change"
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
          </div>
        ) : (
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Selamat Datang, {username}</h2>
            <div className="input-group">
              <label htmlFor="username">username</label>
              <input
                id="username"
                type="text"
                value={inputUsername}
                onChange={(e) => setInputUsername(e.target.value)}
                placeholder="Masukkan username"
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Home;