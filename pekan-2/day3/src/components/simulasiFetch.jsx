import React, { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Komponen dimount, mulai mengambil data...');

        setTimeout(() => {
            const mockData = {
                id: 101,
                title: 'useEffect dengan Santuy',
                body: 'useEffect adalah hook yang powerful untuk mengelola efek samping di komponen fungsional React.',
            };
            setData(mockData);
            setLoading(false);
            console.log('Data berhasil diambil!');
        }, 2000); 

    }, []);

    if (loading) {
        return (
            <div>
                <h2>5. Simulasi Fetch Data</h2>
                <p>Sedang mengambil data...</p>
            </div>
        );
    }

    return (
        <div>
            <h2>5. Simulasi Fetch Data</h2>
            <h3>{data?.title}</h3>
            <p>{data?.body}</p>
        </div>
    );
}

export default DataFetcher;