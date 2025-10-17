import React, { useState, lazy, Suspense } from 'react';

// Lazy loading komponen
const LazyHome = lazy(() => import('./pages/Home'));
const LazyAbout = lazy(() => import('./pages/About'));
const LazyContact = lazy(() => import('./pages/Contact'));

const LazyLoadParent = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LazyHome />;
      case 'about':
        return <LazyAbout />;
      case 'contact':
        return <LazyContact />;
      default:
        return <LazyHome />;
    }
  };

  return (
    <section>
      <h2>4. Code Splitting dan Lazy Loading</h2>
      <div className="controls">
        <button onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'active' : ''}>
          Beranda
        </button>
        <button onClick={() => setCurrentPage('about')} className={currentPage === 'about' ? 'active' : ''}>
          Tentang
        </button>
        <button onClick={() => setCurrentPage('contact')} className={currentPage === 'contact' ? 'active' : ''}>
          Kontak
        </button>
      </div>
      <div className="page-container">
        <Suspense fallback={<div className="loading">Memuat...</div>}>
          {renderPage()}
        </Suspense>
      </div>
      <p className="note">
        <strong>Catatan:</strong> Buka tab "Network" di DevTools. Perhatikan bahwa file JS untuk halaman baru hanya diunduh saat tombolnya diklik.
      </p>
    </section>
  );
};

export default LazyLoadParent;