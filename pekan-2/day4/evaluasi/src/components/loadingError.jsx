// src/UserFetcherWithStates.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserFetcherWithStates() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        setUser(response.data);
      })
      .catch(err => {
        setError(err.message || 'Terjadi kesalahan yang tidak diketahui');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-4 text-blue-500 font-semibold">Sedang mengambil data...</div>;
  }

  if (error) {
    // Mengganti style inline dengan kelas Tailwind
    return <div className="p-4 text-red-500 font-semibold bg-red-100 border border-red-300 rounded-md">Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-2">User dengan Loading & Error State</h2>
      <p className="mb-1"><strong>Nama:</strong> {user.name}</p>
      <p className="mb-1"><strong>Email:</strong> {user.email}</p>
      <p><strong>Nomor Telepon:</strong> {user.phone}</p>
    </div>
  );
}

export default UserFetcherWithStates;