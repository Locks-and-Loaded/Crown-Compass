
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Navigate to the Profile page
        navigate('/profile');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-header">Welcome</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Log In
                    </button>
                </form>
                <div className="login-footer">
                    <img src="crowncompasslogo.png" alt="Logo" />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;