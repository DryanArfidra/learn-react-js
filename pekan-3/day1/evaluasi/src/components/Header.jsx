import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNotification } from '../contexts/NotificationContext';

const Header = () => {
  const { language, changeLanguage, t } = useLanguage();
  const { count, addNotification, clearNotifications } = useNotification();

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #ddd' }}>
      <h1>{t.welcome}</h1>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button onClick={() => changeLanguage(language === 'id' ? 'en' : 'id')}>
          {language === 'id' ? 'English' : 'Bahasa'}
        </button>
        <span>
          {t.notifications}: ({count})
        </span>
        <button onClick={addNotification}>+ Notif</button>
        <button onClick={clearNotifications}>Hapus Semua</button>
      </nav>
    </header>
  );
};

export default Header;