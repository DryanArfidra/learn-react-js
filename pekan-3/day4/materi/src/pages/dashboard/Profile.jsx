import React from 'react';

const Profile = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Profil Pengguna</h2>
      <p className="mb-2"><span className="font-semibold">Nama:</span> Santri Pengguna</p>
      <p className="mb-2"><span className="font-semibold">Email:</span> santri@pesantren.com</p>
      <p><span className="font-semibold">Status:</span> <span className="text-green-600">Aktif</span></p>
    </div>
  );
};

export default Profile;