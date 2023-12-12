import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUserCircle, FaHome, FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import NavBar from '../components/NavBar'; // Make sure you have this component created

const ProfilePage = () => {
    let navigate = useNavigate();
    const userEmail = "user@example.com"; // Replace with actual user email from context or props
    const userName = "John Doe"; // Replace with actual username from context or props

    return (
        <div>
            {/* Banner with back arrow and image icon */}
            <div className="profile-banner">
                <button onClick={() => navigate(-1)}><FaArrowLeft /></button>
                <FaUserCircle size={32} className="profile-icon" />
            </div>
            {/* Profile Section */}
            <div className="profile-section">
                <h1>Profile</h1>
                <p>{userEmail}</p>
                <p>{userName}</p>
                <button className="edit-profile-button">Edit Profile</button>
            </div>
            {/* History Header */}
            <div className="history-header">
                <h2>History</h2>
            </div>
            {/* Bottom Navigation Bar */}
            <NavBar />
        </div>
    );
};

export default ProfilePage;