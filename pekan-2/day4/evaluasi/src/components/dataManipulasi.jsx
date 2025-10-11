// src/UserListManipulated.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserListManipulated() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-4 text-gray-500">Loading user list...</div>;
  }

  const filteredUsers = users.filter(user => user.username.startsWith('C'));
  const limitedUsers = filteredUsers.slice(0, 3);

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-2">Daftar User (Dimanipulasi)</h2>
      <p className="text-gray-600 mb-4">Menampilkan 3 user pertama yang username-nya dimulai dengan 'C'.</p>
      <ul className="space-y-2">
        {limitedUsers.map(user => (
          <li key={user.id} className="p-3 bg-gray-50 border border-gray-200 rounded-md">
            <strong>{user.name}</strong> - <span className="text-gray-600">{user.email}</span>
          </li>
        ))}
      </ul>
      {limitedUsers.length === 0 && <p className="mt-4 text-gray-500 italic">Tidak ada user yang cocok dengan kriteria.</p>}
    </div>
  );
}

export default UserListManipulated;