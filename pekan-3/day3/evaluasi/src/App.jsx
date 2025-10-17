import React from 'react';
import './App.css';

// Impor semua komponen demo
import MemoParent from './components/MemoDemo/MemoParent';
import UseMemoParent from './components/UseMemoDemo/UseMemoParent';
import UseCallbackParent from './components/UseCallbackDemo/UseCallbackParent';
import LazyLoadParent from './components/LazyLoadDemo/LazyLoadParent';
import ProfilingParent from './components/ProfilingDemo/ProfilingParent';

function App() {
  return (
    <div>
      <h1>Evaluasi Harian - Optimasi Performa React</h1>
      
      <MemoParent />
      <UseMemoParent />
      <UseCallbackParent />
      <LazyLoadParent />
      <ProfilingParent />
    </div>
  );
}

export default App;