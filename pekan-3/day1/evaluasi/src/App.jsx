import React from 'react';
import { UserProvider } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { CartProvider } from './contexts/CartContext';

import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { ThemedButton, ThemedCard, ThemedText } from './components/ThemedComponents';
import ProductList from './components/ProductList';
import CartDisplay from './components/CartDisplay';
import './App.css';

function App() {
  return (
    // Bungkus semua aplikasi dengan provider yang dibutuhkan
    <LanguageProvider>
      <NotificationProvider>
        <ThemeProvider>
          <UserProvider>
            <CartProvider>
              <div className="App">
                <Header />
                <main style={{ padding: '1rem' }}>
                  <UserProfile />
                  <hr style={{ margin: '2rem 0' }} />
                  <ThemedButton />
                  <ThemedCard title="Kartu Tema" content="Ini adalah contoh kartu yang berganti tema." />
                  <ThemedText />
                  <hr style={{ margin: '2rem 0' }} />
                  <ProductList />
                  <hr style={{ margin: '2rem 0' }} />
                  <CartDisplay />
                </main>
              </div>
            </CartProvider>
          </UserProvider>
        </ThemeProvider>
      </NotificationProvider>
    </LanguageProvider>
  );
}

export default App;