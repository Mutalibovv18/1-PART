import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./index.css"

function Delete() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data); 
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    const handleDelete = (userId) => {
        setLoading(true); 
        axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => {
                if (response.status === 200) {
                    setUsers(users.filter(user => user.id !== userId));
                }
            })
            .catch(error => {
                console.log(error); 
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            <h2>Ikkinchi topshiriq</h2>
            {loading ? (
                <p>Ochirilyabdi</p>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <p>{user.name} - {user.email}</p>
                            <button onClick={() => handleDelete(user.id)}>
                                O'chirish
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Delete;
