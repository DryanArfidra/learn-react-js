import React, { useState, useEffect } from 'react';

const usersData = {
  1: { name: 'Ahmad', email: 'ahmad@example.com' },
  2: { name: 'Budi', email: 'budi@example.com' },
  3: { name: 'Citra', email: 'citra@example.com' },
};

function UserProfile() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    console.log(`useEffect dijalankan untuk ID: ${userId}. Memulai pengambilan data...`);

    setLoading(true);

    setTimeout(() => {
      console.log(`Data untuk ID: ${userId} berhasil diambil.`);
      const selectedUser = usersData[userId];
      setUser(selectedUser || null);
      setLoading(false);
    }, 1000); 
  }, [userId]);

  return (
    <div>
      <h2>Profil Pengguna (Sederhana)</h2>
      
      <div>
        <button onClick={() => setUserId(1)}>Tampilkan User 1</button>
        <button onClick={() => setUserId(2)}>Tampilkan User 2</button>
        <button onClick={() => setUserId(3)}>Tampilkan User 3</button>
      </div>


      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <h3>Data User ID: {userId}</h3>
          <p><strong>Nama:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Data user tidak ditemukan.</p>
      )}
    </div>
  );
}

export default UserProfile;