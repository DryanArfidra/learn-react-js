import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Handler untuk perubahan di setiap input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fungsi validasi
  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = "Username wajib diisi.";
    if (!formData.email) {
      tempErrors.email = "Email wajib diisi.";
    } else if (!formData.email.includes('@')) {
      tempErrors.email = "Email tidak valid (harus mengandung '@').";
    }
    if (!formData.password) {
      tempErrors.password = "Password wajib diisi.";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password minimal 6 karakter.";
    }
    
    setErrors(tempErrors);

    // Mengembalikan true jika tidak ada error
    return Object.keys(tempErrors).length === 0;
  };

  // Handler saat form disubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // Jika validasi berhasil
      setSubmittedData(formData);
      setIsSubmitted(true);
      alert('Pendaftaran berhasil!');
      // Reset form
      setFormData({ username: '', email: '', password: '' });
      setErrors({});
    } else {
      // Jika validasi gagal
      setIsSubmitted(false);
      alert('Perbaiki error pada form.');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px' }}>
      <h2>5. Formulir dengan Validasi</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button type="submit">Daftar</button>
      </form>

      {isSubmitted && submittedData && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e0f7fa' }}>
          <h3>Data Berhasil Disubmit:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;