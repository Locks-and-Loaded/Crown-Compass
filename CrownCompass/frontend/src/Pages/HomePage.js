import React from 'react';

//import { ReactComponent as EmailIcon } from './icons/email.svg'; // Use actual path to your SVG icon
//import { ReactComponent as PasswordIcon } from './icons/password.svg'; // Use actual path to your SVG icon

export default function HomePage() {
    // ... rest remains the same

    return (
        <div className="home-container">
            <div className="home-box">
                <h2 className="home-header">Welcome.</h2>
                <p>Create an account</p>
                <form className="home-form">
                    <div className="form-group">
                        {/*<EmailIcon className="icon"/>*/}
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group">
                        {/*<PasswordIcon className="icon" />*/}
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="terms">
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">I agree to the Terms & Conditions</label>
                    </div>
                    <button type="submit" className="sign-up-button">Sign Up</button>
                </form>
                <div className="social-buttons">
                    {/* Replace with actual icons */}
                    <div className="social-icon">G</div>
                    <div className="social-icon">F</div>
                    <div className="social-icon">A</div>
                </div>
                <div className="home-footer">
                    <p>Already have an account? <a href="/login">Sign in</a></p>
                </div>
            </div>
        </div>
    );
}
