import React from 'react';
import { useUser } from '../context/UserContext';

function Avatar() {
  const user = useUser();

  if (!user) {
    return <div>Loading user...</div>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h3>Komponen Avatar</h3>
      <img 
        src={`https://i.pravatar.cc/150?u=${user.name}`} 
        alt={user.name} 
        style={{ borderRadius: '50%' }}
      />
      <p>{user.name}</p>
    </div>
  );
}

export default Avatar;