import React, { useState, useEffect } from 'react';
function WindowTracker() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      console.log('Membersihkan event listener...');
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
        <p>lebar jendela: {windowSize.width}</p>
        <p>tinggi jendela: {windowSize.height}</p>
    </div>
  )
}
export default WindowTracker;