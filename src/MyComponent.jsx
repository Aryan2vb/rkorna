import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    const [metalData, setMetalData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = 'RMVF2CRKMKAPGGNY6QE3624NY6QE3';
                const authority = 'ibja';
                const currency = 'INR';
                const unit = 'g';
                const url = `https://api.metals.dev/v1/metal/authority?api_key=${apiKey}&authority=${authority}&currency=${currency}&unit=${unit}`;

                const response = await fetch(url);
                const data = await response.json();
                setMetalData(data);
            } catch (error) {
                console.error('Error fetching metal data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Metal Authority Data</h1>
            {metalData ? (
                <div>
                    <p>Metal: {metalData.metal}</p>
                    <p>Price: {metalData.price}</p>
                    <p>Currency: {metalData.currency}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MyComponent;
