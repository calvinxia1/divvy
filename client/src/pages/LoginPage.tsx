import React, { useState, FormEvent } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import '../page-styles/LoginPage.css';
import {useUser} from "../context/UserContextProvider";

const LoginPage = () => {
  const {setUserId} = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(0);


  const navigate = useNavigate();
  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
  
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // You can adjust the content type as needed
        },
        body: JSON.stringify(data),
      });
      
      if (response.status === 200) {
        // Request was successful, you can handle the response here
        // For example, you can redirect the user to another page or show a success message
        // You might also want to clear the username and password fields if needed
        const responseData = await response.json();
        setUserId(responseData.userId);
        setUsername('');
        setPassword('');
        setError(0);
        navigate('/homepage/divys');
        
      } else if (response.status === 401){
        //Username found but password incorrect
        setUsername('');
        setPassword('');
        setError(1);
        console.log('Incorrect password');

      
      
      }else {
        //Username not found
        setUsername('');
        setPassword('');
        setError(2);
        console.error('User not found');
      }
    } catch (error) {
      // Handle network errors, e.g., no internet connection
      console.error('Network error:', error);
    }
  }

  return (
      <div className="login-wrapper">
        {(error === 1 || error === 2) &&<h1> You dun fucked up</h1>}
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

export default LoginPage