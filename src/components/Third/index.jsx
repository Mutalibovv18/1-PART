import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

function Third() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setItems(response.data); 
            })
            .catch(error => {
                console.log(error); 
            })
            .finally(() => {
                setLoading(false); 
            });
    }, []);
    return (
        <div>
            <h2>Foydalanuvchilar Ro'yxati</h2>
            {loading && <p>Yuklanyabdi...</p>}
            {!loading && (
                <ul>
                    {items.map((user) => (
                        <li key={user.id}>
                            <p><>ID:</> {user.id}</p>
                            <p><>Name:</> {user.name}</p>
                            <p><>Email:</> {user.email}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Third;
