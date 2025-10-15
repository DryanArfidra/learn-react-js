import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

// Custom hook dengan validasi
export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserContext harus digunakan di dalam UserProvider');
  }

  return context;
};