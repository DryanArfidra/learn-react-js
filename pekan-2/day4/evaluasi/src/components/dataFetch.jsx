import React, { useState, useEffect } from 'react';

function DataFetch() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then(data => {
        setPost(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  if (!post) {
    return <div>Loading post...</div>;
  }

  return (
    <div>
      <h2>Post (dari Fetch API)</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default DataFetch;