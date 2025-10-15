import React, { createContext, useState, useContext } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [count, setCount] = useState(3); // Contoh awal ada 3 notifikasi

  const addNotification = () => setCount(prev => prev + 1);
  const clearNotifications = () => setCount(0);

  return (
    <NotificationContext.Provider value={{ count, addNotification, clearNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);