import { useState } from "react";

function App() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setphoneError] = useState('');

  const validateEmail = (email) => {
    if (!email.includes('@')) {
      setEmailError('Email harus mengandung karakter "@"')
    } else {
      setEmailError('')
    }
  };

  
  const validatephone = (phone) => {
    if (!phone.startsWith('+62')) { 
      setphoneError('Nomor Anda bukan nomor Indonesia (harus diawali +62)')
    } else {
      setphoneError('')
    }
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      setPasswordError('Password minimal 8 karakter');
    } else {
      setPasswordError('');
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    validatephone(newPhone);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    validateEmail(email);
    validatephone(phone);
    validatePassword(password);

    
    if (email && phone && password && !emailError && !phoneError && !passwordError) {
      alert('Formulir berhasil disubmit!');
      console.log({ email, phone, password });
      
      setEmail('');
      setPhone('');
      setPassword('');
    } else {
      alert('Mohon perbaiki kesalahan dalam formulir.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Kartu Form */}
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Formulir Login
            </h2>
          </div>

          {/* Input Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${emailError ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="mt-2 text-sm text-red-600">{emailError}</p>}
          </div>

          {/* Input Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Nomor Telepon
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${phoneError ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              value={phone}
              onChange={handlePhoneChange}
            />
            {/* PERBAIKAN: Menampilkan error phone yang benar */}
            {phoneError && <p className="mt-2 text-sm text-red-600">{phoneError}</p>}
          </div>

          {/* Input Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${passwordError ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && <p className="mt-2 text-sm text-red-600">{passwordError}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;