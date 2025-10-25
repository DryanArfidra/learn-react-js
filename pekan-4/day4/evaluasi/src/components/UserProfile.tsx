// src/components/UserProfile.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface UserProfileProps {
  name: string;
  email: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email }) => {
  return (
    <motion.div
      className="p-4 bg-slate-700 rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h4 className="text-lg font-semibold text-slate-100">{name}</h4>
      <p className="text-slate-400">{email}</p>
    </motion.div>
  );
};

export default UserProfile;