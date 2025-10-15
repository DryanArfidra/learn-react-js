import React, { createContext, useState, useContext } from 'react';

export const LanguageContext = createContext();

export const translations = {
  id: { welcome: 'Selamat Datang', notifications: 'Notifikasi' },
  en: { welcome: 'Welcome', notifications: 'Notifications' },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('id');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);