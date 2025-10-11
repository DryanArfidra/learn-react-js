// src/PostFetcherWithAbort.jsx
import React, { useState, useEffect } from 'react';

function PostFetcherWithAbort() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://jsonplaceholder.typicode.com/posts/1', { signal })
      .then(response => {
        if (!response.ok) {
          throw new Error('Gagal mengambil data');
        }
        return response.json();
      })
      .then(data => {
        setPost(data);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      });

    return () => {
      controller.abort();
      console.log("Permintaan fetch dibatalkan karena komponen di-unmount.");
    };
  }, []);

  if (error) {
    // Mengganti style inline dengan kelas Tailwind
    return <div className="p-4 text-red-500 font-semibold bg-red-100 border border-red-300 rounded-md">Error: {error}</div>;
  }

  if (!post) {
    return <div className="p-4 text-gray-500">Loading post...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-2">Post dengan AbortController</h2>
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}

export default PostFetcherWithAbort;