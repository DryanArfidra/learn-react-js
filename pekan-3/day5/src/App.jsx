import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Import Komponen Halaman
import Layout from './components/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductList from './pages/Products/ProductList';
import ProductDetail from './pages/Products/ProductDetail';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

// Komponen PrivateRoute untuk melindungi halaman tertentu
// Komponen ini akan menampilkan alert jika user belum login
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    // Tampilkan alert sebelum mengarahkan ke halaman login
    alert('Anda harus login untuk melihat halaman Products.');
    return <Navigate to="/login" />;
  }
  
  // Jika sudah login, tampilkan komponen anak (children)
  return children;
};

function App() {
  return (
    // BrowserRouter harus berada di paling luar untuk mengontrol seluruh aplikasi
    <BrowserRouter>
      {/* AuthProvider berada di dalam BrowserRouter agar bisa menggunakan useNavigate */}
      <AuthProvider>
        <Routes>
          {/* Route untuk halaman Login, tidak menggunakan Layout */}
          <Route path="/login" element={<Login />} />

          {/* Route utama yang menggunakan Layout (Navbar + Sidebar) */}
          <Route path="/" element={<Layout />}>
            {/* Halaman-halaman publik (bisa diakses tanpa login) */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            
            {/* Halaman Dashboard juga publik */}
            <Route path="dashboard" element={<Dashboard />}>
              {/* Nested routes untuk Dashboard */}
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            {/* --- Halaman Terproteksi (Harus Login) --- */}
            {/* Halaman Products dan ProductDetail dibungkus dengan PrivateRoute */}
            <Route 
              path="products" 
              element={
                <PrivateRoute>
                  <ProductList />
                </PrivateRoute>
              } 
            />
            <Route 
              path="products/:productId" 
              element={
                <PrivateRoute>
                  <ProductDetail />
                </PrivateRoute>
              } 
            />
          </Route>

          {/* Custom 404 Page untuk URL yang tidak ditemukan */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;