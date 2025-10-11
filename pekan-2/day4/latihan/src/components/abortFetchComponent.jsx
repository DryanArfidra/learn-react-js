// src/SimpleDataFetcher.js
import React, { useState, useEffect } from 'react';

function AbortFetchComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
          signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);

      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
      console.log('Permintaan fetch dibatalkan karena komponen di-unmount.');
    };
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center text-blue-600 bg-blue-50 rounded-md">
        Memuat data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-600 bg-red-100 border border-red-300 rounded-md">
        Terjadi kesalahan: {error.message}
      </div>
    );
  }

  return (
    <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md">
      <h2 className="text-lg text-blue-600 font-bold mb-2">Data Berhasil Diambil:</h2>
      <pre className="text-sm text-gray-800">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default AbortFetchComponent;