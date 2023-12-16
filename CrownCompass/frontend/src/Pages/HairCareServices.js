import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar'; // Import your NavBar component
import { FaArrowLeft, FaUserCircle, FaHome, FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import HairCareServiceSection from '../components/HairCareServiceSection'; // Create this component for each type of hair care service

const HairCareServices = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* Header with back arrow and image icon */}
            <div className="header">
                <button onClick={() => navigate(-1)}><FaArrowLeft /></button>
                <FaUserCircle size={32} className="profile-icon" />

            </div>

            {/* Locticians/DreadMaters Section */}
            <HairCareServiceSection title="Locticians/DreadMasters" />

            {/* Barbers Section */}
            <HairCareServiceSection title="Barbers" />

            {/* Braiders Section */}
            <HairCareServiceSection title="Braiders" />

            {/* Stylist Section */}
            <HairCareServiceSection title="Stylist" />

            {/* Coloring Section */}
            <HairCareServiceSection title="Coloring" />

            {/* NavBar component at the bottom */}
            <NavBar />
        </div>
    );
}

export default HairCareServices;
