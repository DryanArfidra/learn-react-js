import { useState, useEffect } from 'react';

function FetchDataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center text-sky-500 font-semibold p-4">Memuat data...</p>;

  if (error) return <p className="text-center text-red-500 font-semibold p-4">Terjadi kesalahan: {error.message}</p>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Data dari Fetch API</h2>
      <h3 className="text-xl font-semibold text-blue-600 mb-3">{data.title}</h3>
      <p className="text-slate-600">{data.body}</p>
    </div>
  );
}

export default FetchDataComponent;