// src/components/Register.js
import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Implement registration logic here
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form>
                <div className="form-group">
                    <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                </div>
                <div className="form-group">
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <button className="register-btn" onClick={handleRegister}>Register</button>
            </form>
        </div>
    );
};

export default Register;
