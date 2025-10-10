import { useEffect, useState } from "react";

function MultiEffect() {
    const [ count, setCount ] = useState(0);
    const [ name, setName ] = useState('murid');

    useEffect(() => {
        document.title = 'count: ' + count;
        console.log('dokumen diubah menjadi ' + count);
    }, [count]);

    useEffect(() => {
        console.log('nama diubah menjadi ' + name);
    }, [name]);

    return (
        <>
        <div>
            <button onClick={() => setCount(count - 1)}>-</button>
            <span>count: {count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <div>
            <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="masukkan nama"
            />
            <p>lihat judul tab broeser dan console</p>
        </div>
        </>
    )
}

export default MultiEffect;