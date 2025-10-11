import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataAxios() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  if (!user) {
    return <div className="p-4 text-gray-500">Loading user...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-2">User (dari Axios)</h2>
      <p className="mb-1"><strong>Nama:</strong> {user.name}</p>
      <p className="mb-1"><strong>Email:</strong> {user.email}</p>
      <p><strong>Nomor Telepon:</strong> {user.phone}</p>
    </div>
  );
}

export default DataAxios;