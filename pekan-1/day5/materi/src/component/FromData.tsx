import { useState } from "react";

function contactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData, 
      [name]: value    
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Data yang disubmit:', formData);
    alert(`Terima kasih, ${formData.firstName}! Data Anda telah disubmit.`);
  };

  return (
    <div className="flex p-30 justify-center min-h-screen bg-gray-100">
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
        >
            <h2 className="text-2xl font-bold mb-6 text-center">Formulir Kontak</h2>
            <div className="mb-4">
                <label className="flex text-gray-700 mb-2">Nama Depan:</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Masukan nama depan anda..."
                    className="w-full px-3 py-2 border rounded-md focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label className="flex text-gray-700 mb-2">Umur:</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Masukan nama belakang anda..."
                    className="w-full px-3 py-2 border rounded-md focus:outline-none"
                />
            </div>
            <div className="mb-6">
                <label className="flex text-gray-700 mb-2">status:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukan email anda..."
                    className="w-full px-3 py-2 border rounded-md focus:outline-none"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
                Submit
            </button>
            <p className="mt-4 text-sm text-gray-600">
                Current Data: {JSON.stringify(formData)}
            </p>
        </form>
    </div>
  );
}

export default contactForm;