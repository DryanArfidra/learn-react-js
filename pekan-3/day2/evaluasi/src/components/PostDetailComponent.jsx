import React from 'react';
import useFetch from '../hooks/useFetch';

function PostDetailComponent() {
  const { data: post, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Tidak ada data.</p>
      )}
    </div>
  );
}

export default PostDetailComponent;