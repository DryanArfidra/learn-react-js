import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosDataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center text-sky-500 font-semibold p-4">Memuat data pengguna...</p>;

  if (error) return <p className="text-center text-red-500 font-semibold p-4">Terjadi kesalahan: {error.message}</p>;

  return (
    <div className="px-30 py-5 max-w-md mx-auto bg-white rounded-xl text-center shadow-md">
      <h2 className="text-xl font-bold text-slate-800 mb-4">Data dari Axios</h2>
      <h3 className="text-2xl font-bold text-blue-600 mb-3">{data.name}</h3>
      
      <div className="space-y-2">
        <p className="text-slate-600">
          <span className="font-semibold text-slate-700">Email:</span> {data.email}
        </p>
        <p className="text-slate-600">
          <span className="font-semibold text-slate-700">Telepon:</span> {data.phone}
        </p>
      </div>
    </div>
  );
}

export default AxiosDataComponent;