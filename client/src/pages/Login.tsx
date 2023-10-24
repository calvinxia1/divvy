import React, { useState, FormEvent } from 'react';

import '../styles/Login.css';


const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
  
    try {
      const response = await fetch('/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // You can adjust the content type as needed
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // Request was successful, you can handle the response here
        // For example, you can redirect the user to another page or show a success message
        // You might also want to clear the username and password fields if needed
        setUsername('');
        setPassword('');
      } else {
        // Handle errors, e.g., show an error message to the user
        console.error('POST request failed');
      }
    } catch (error) {
      // Handle network errors, e.g., no internet connection
      console.error('Network error:', error);
    }
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
} 

export default Login