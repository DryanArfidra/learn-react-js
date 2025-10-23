import React, { useState, useReducer } from 'react';
import { motion } from 'framer-motion';

interface UserProfile {
  id: number;
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    avatar?: string;
  };
  preferences: {
    theme: 'light' | 'dark' | 'auto';
    notifications: boolean;
    language: string;
  };
  stats: {
    loginCount: number;
    lastLogin: Date;
    accountCreated: Date;
  };
}

type UserAction =
  | { type: 'UPDATE_PROFILE'; payload: Partial<UserProfile['personalInfo']> }
  | { type: 'UPDATE_PREFERENCES'; payload: Partial<UserProfile['preferences']> }
  | { type: 'INCREMENT_LOGIN_COUNT' }
  | { type: 'RESET' };

const initialUser: UserProfile = {
  id: 1,
  personalInfo: {
    firstName: 'Dryanz',
    lastName: 'Arfidra',
    email: 'Dryanz@example.com',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR3uuo06AK2nZNZY3y7yRZ-9noMp-q7hRNag&s',
  },
  preferences: {
    theme: 'light',
    notifications: true,
    language: 'id',
  },
  stats: {
    loginCount: 0,
    lastLogin: new Date(),
    accountCreated: new Date(),
  },
};

function userReducer(state: UserProfile, action: UserAction): UserProfile {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return { ...state, personalInfo: { ...state.personalInfo, ...action.payload } };
    case 'UPDATE_PREFERENCES':
      return { ...state, preferences: { ...state.preferences, ...action.payload } };
    case 'INCREMENT_LOGIN_COUNT':
      return {
        ...state,
        stats: {
          ...state.stats,
          loginCount: state.stats.loginCount + 1,
          lastLogin: new Date(),
        },
      };
    case 'RESET':
      return initialUser;
    default:
      return state;
  }
}

const UserProfileComponent: React.FC = () => {
  const [user, dispatch] = useReducer(userReducer, initialUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleProfileUpdate = (field: keyof UserProfile['personalInfo'], value: string): void => {
    dispatch({ type: 'UPDATE_PROFILE', payload: { [field]: value } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-md bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Avatar Section */}
        <motion.div
          className="flex flex-col items-center mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.img
            src={user.personalInfo.avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full shadow-md mb-3 border-4 border-white object-cover"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <h2 className="text-2xl font-bold text-gray-800">{user.personalInfo.firstName} {user.personalInfo.lastName}</h2>
          <p className="text-gray-500 text-sm">{user.personalInfo.email}</p>
        </motion.div>

        {/* Personal Information */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Personal Information</h3>

          {isEditing ? (
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <input
                type="text"
                value={user.personalInfo.firstName}
                onChange={(e) => handleProfileUpdate('firstName', e.target.value)}
                placeholder="First Name..."
                className="w-full border border-gray-200 rounded-xl p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              />
              <input
                type="email"
                value={user.personalInfo.email}
                onChange={(e) => handleProfileUpdate('email', e.target.value)}
                placeholder="Email"
                className="w-full border border-gray-200 rounded-xl p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEditing(false)}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl py-2 mt-2 shadow-md transition-all"
              >
                Save
              </motion.button>
            </motion.div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsEditing(true)}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl py-2 mt-2 transition-all shadow-sm"
            >
              Edit Profile
            </motion.button>
          )}
        </motion.div>

        {/* Preferences */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Preferences</h3>
          <div className="space-y-1 text-gray-600">
            <p>Theme: <span className="font-medium text-gray-800">{user.preferences.theme}</span></p>
            <p>Notifications: <span className="font-medium text-gray-800">{user.preferences.notifications ? 'Enabled' : 'Disabled'}</span></p>
            <p>Language: <span className="font-medium text-gray-800">{user.preferences.language}</span></p>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Statistics</h3>
          <div className="space-y-1 text-gray-600 mb-4">
            <p>Login Count: <span className="font-medium text-gray-800">{user.stats.loginCount}</span></p>
            <p>Last Login: <span className="font-medium text-gray-800">{user.stats.lastLogin.toLocaleDateString()}</span></p>
            <p>Member Since: <span className="font-medium text-gray-800">{user.stats.accountCreated.toLocaleDateString()}</span></p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => dispatch({ type: 'INCREMENT_LOGIN_COUNT' })}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl py-2 shadow-md transition-all"
            >
              Simulate Login
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => dispatch({ type: 'RESET' })}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl py-2 shadow-md transition-all"
            >
              Reset
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UserProfileComponent;
