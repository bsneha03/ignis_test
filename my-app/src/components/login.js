// src/components/Login.js
import React, { useState } from 'react';
import axios from "axios"


const Login = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        const body = {
            username: username,
            password: password
        };

        try {
            axios.get("http://localhost:8000/login/", body)
           
        } catch (error) {
            console.error({ error });
        }
    };

    return (
        <div className="login-container">
            <input
                className="login-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Your Username"
            />
            <input
                className="login-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button className="login-button" type='button' onClick={handleLogin}>
                Login
            </button>
        </div>


    );
};

export default Login;
