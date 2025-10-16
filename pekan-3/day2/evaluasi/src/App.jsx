import React from 'react';
import ModalComponent from './components/ModalComponent';
import SwitchComponent from './components/SwitchComponent';
import PostDetailComponent from './components/PostDetailComponent';
import CounterApp from './components/CounterApp';
import SimpleForm from './components/SimpleForm';
import ThemeToggler from './components/ThemeToggler';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Evaluasi Harian: Custom Hooks</h1>
      </header>

      <main>
        <section>
          <h2>1. Custom Hook: useToggle</h2>
          <div className="demo-group">
            <div>
              <h3>Contoh Modal</h3>
              <ModalComponent />
            </div>
            <div>
              <h3>Contoh Switch</h3>
              <SwitchComponent />
            </div>
          </div>
        </section>

        <hr />

        <section>
          <h2>2. Custom Hook: useFetch</h2>
          <PostDetailComponent />
        </section>

        <hr />

        <section>
          <h2>3. Custom Hook: useCounterWithToggle (Komposisi)</h2>
          <CounterApp />
        </section>

        <hr />

        <section>
          <h2>4. Custom Hook: useForm</h2>
          <SimpleForm />
        </section>

        <hr />

        <section>
          <h2>5. Custom Hook: useLocalStorage</h2>
          <ThemeToggler />
        </section>
      </main>
    </div>
  );
}

export default App;