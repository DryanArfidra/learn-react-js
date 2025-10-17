import React, { useState, useEffect } from 'react';

const HeavyComponent = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const heavyData = Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      value: Math.random() * 1000,
    }));
    setData(heavyData);
  }, []);
  
  return (
    <div className="demo-box heavy">
      <h3>Komponen Berat</h3>
      <p>Menampilkan {data.length} item data</p>
      <ul>
        {data.slice(0, 10).map(item => (
          <li key={item.id}>Item {item.id}: {item.value.toFixed(2)}</li>
        ))}
        {data.length > 10 && <li>... dan {data.length - 10} item lainnya</li>}
      </ul>
    </div>
  );
};

export default HeavyComponent;