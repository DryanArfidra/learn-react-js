import React, { useState } from 'react';
import { ThemeProvider } from './components/context/ThemeContext';
import UserContext from './components/context/UserContext';

import Header from './components/toolBar/header';
import Page from './components/toolBar/page';
import Layout from './components/toolBar/layout';
import UserMenu from './components/toolBar/UserMenu';
import Avatar from './components/toolBar/Avatar';
import CounterWithReducer from './components/counterWithReducer';
import TemperatureConverter from './components/temperatured';

function App() {
  const [user, setUser] = useState({ name: 'Budi Santoso' });

  return (
  <div>
    <CounterWithReducer />
    <TemperatureConverter />
    <ThemeProvider>
      <UserContext.Provider value={user}>
        <div className="App">
          <Header />
          
          <Page>
            <Layout>
              <UserMenu>
                
                <Avatar />
              </UserMenu>
            </Layout>
          </Page>
        </div>
      </UserContext.Provider>
    </ThemeProvider>
  </div>
  );
}

export default App;