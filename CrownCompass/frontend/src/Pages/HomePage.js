import React from 'react';
import { FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa';

// Import icons if needed
// import { ReactComponent as EmailIcon } from './icons/email.svg';
// import { ReactComponent as PasswordIcon } from './icons/password.svg';

const SocialMediaIcons = () => {
    const googleLink = 'https://www.google.com/';
    const facebookLink = 'https://www.facebook.com/';
    const instagramLink = 'https://www.instagram.com/';

    return (
        <div>
            <a href={googleLink} target="_blank" rel="noopener noreferrer">
                <FaGoogle size={32} style={{ margin: '5px', color: '#4285F4' }} />
            </a>
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <FaFacebook size={32} style={{ margin: '5px', color: '#4267B2' }} />
            </a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <FaInstagram size={32} style={{ margin: '5px', color: '#E4405F' }} />
            </a>
        </div>
    );
};

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
                    <button type="submit" className="sign-up-button">
                        Sign Up
                    </button>
                </form>
                {/* Include SocialMediaIcons component */}
                <SocialMediaIcons />
                <div className="home-footer">
                    <p>
                        Already have an account? <a href="/login">Sign in</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
