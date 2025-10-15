import React from 'react';
import { UserProvider } from './context/UserProvider';
import { ThemeProvider } from './context/ThemeProvider';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="App">
          <Home />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;