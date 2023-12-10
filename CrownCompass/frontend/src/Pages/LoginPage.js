
import React from 'react';

export default function LoginPage() {
    // ... rest remains the same

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-header">Welcome</h2>
                <form className="login-form">
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="login-button">Log In</button>
                </form>
                <div className="login-footer">
                    <img src="path_to_your_logo.png" alt="Logo" />
                </div>
            </div>
        </div>
    );
}
