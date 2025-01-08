import React, { useState } from 'react';
import axios from 'axios';
import Delete from './components/Delete';
import Third from './components/Third';

function App() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); 
  const [loading, setLoading] = useState(false); 

  function handleSave(e) {
    e.preventDefault(); 

    const data = {
      name: userName,
      email: email,
      password: password
    };
    
    setLoading(true); 

    axios.post("https://reqres.in/api/users", data, {
      headers: {
        'Content-Type': "application/json" 
      },
    })
    .then(response => {
      if (response.status === 201) {
        setMessage("Foydalanuvchi muvaffaqiyatli qoshildi!"); 
      }
    })
    .catch(error => {
      console.log(error);
      setMessage("Xatolik yuz berdi!"); 
    })
    .finally(() => {
      setLoading(false); 
    });
  }

  return (
    <div>
      <h2>1-topshiriq</h2>
      <form onSubmit={handleSave}>
        <input 
          type="text" 
          value={userName} 
          placeholder='Username kiriting'
          onChange={(e) => setUsername(e.target.value)} 
        />

        <input 
          type="email"  
          value={email}
          placeholder='Email kiriting'
          onChange={(e) => setEmail(e.target.value)} 
        />

        <input 
          type="password" 
          value={password}
          placeholder='Parol kiriting'
          onChange={(e) => setPassword(e.target.value)} 
        />

       
        <button type='submit' disabled={loading}>
          {loading ? "Yuborilmoqda..." : "Ro'yxatdan o'tish"}
        </button>
      </form>

  
      {message && <p>{message}</p>}

      <div><Delete></Delete></div>
      <div><Third></Third></div>
    </div>
  );
}

export default App;
