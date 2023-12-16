
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUserCircle, FaHome, FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import NavBar from '../components/NavBar'; // Make sure you have this component created

const LikesPage = () => {
    const navigate= useNavigate();
    return (
        <div>
            {/* Banner with back arrow and image icon */}
            <div className="likes-banner">
                <button onClick={() => navigate(-1)}><FaArrowLeft /></button>
                <FaHeart size={32} className="likes-icon" />

            </div>
            {/* Profile Section */}
            <div className="likes-section">
                <h1>Your Likes</h1>
                <p></p>
            </div>
            {/* History Header */}
            <div className="history-header">
                <h2>History</h2>
            </div>
            <p>You have no saved vendors, Go Shopping!</p>
            {/* Bottom Navigation Bar */}
            <NavBar />
        </div>
    );
};

export default LikesPage;
