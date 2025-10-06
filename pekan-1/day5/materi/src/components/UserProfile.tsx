import React, { useState } from 'react';

const UserProfile: React.FC = () => {
  const [name, setName] = useState('Dryan Arfidra');
  const [age, setAge] = useState(20);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className='block w-full justfy-center border border-gray-300 p-30 mb-6'>
      <h2 className='text-4xl mb-1 bg-blue-400 p-6 rounded-xl font-bold'>My Profile</h2>
      
      {isEditing ? (
        <div >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className='ml-8'
          />
          <button onClick={() => setIsEditing(false)} style={{ marginLeft: '8px' }}>
            Simpan
          </button>
        </div>
      ) : (
        <div className='block w-full text-2xl bg-blue-200 rounded-xl p-10'>
          <p >Nama: {name}</p>
          <p>Usia: {age}</p>
          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;