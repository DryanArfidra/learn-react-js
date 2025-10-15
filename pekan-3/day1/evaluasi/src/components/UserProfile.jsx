import React, { useState } from 'react';
import { useUserContext } from '../hooks/useUserContext';
const UserProfile = () => {
  const { user, login, logout, updateProfile } = useUserContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (name && email) {
      login(name, email);
      setName('');
      setEmail('');
    }
  };

  const handleUpdateProfile = () => {
    const newName = prompt('Masukkan nama baru:', user.name);
    if (newName) {
      updateProfile({ name: newName });
    }
  };

  if (!user.isLoggedIn) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
        <h3>Profil Pengguna (Belum Login)</h3>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <h3>Profil Pengguna</h3>
      <p><strong>Nama:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button onClick={handleUpdateProfile}>Update Nama</button>
      <button onClick={logout} style={{ marginLeft: '0.5rem' }}>Logout</button>
    </div>
  );
};

export default UserProfile;