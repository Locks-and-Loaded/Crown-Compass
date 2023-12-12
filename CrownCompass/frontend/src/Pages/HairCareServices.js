import React from 'react';
import { FaArrowLeft, FaHeart, FaCompass, FaHome, FaSearch, FaUser } from 'react-icons/fa';
//import ServiceCard from './ServiceCard'; // Component for each service card

const NavBar = () => {
    return (
        <div className="bottom-nav-bar">
            <button><FaCompass /></button>
            <button><FaHome /></button>
            <button><FaSearch /></button>
            <button><FaHeart /></button>
            <button><FaUser /></button>
        </div>
    );
};

const HairCareServices = () => {
    // Sample data structure, replace with Google Places API data
    const servicesData = {
        locticians: [{ /* Data from Google Places API */ }],
        barbers: [{ /* Data from Google Places API */ }],
        braiders: [{ /* Data from Google Places API */ }],
        stylists: [{ /* Data from Google Places API */ }],
        colorists: [{ /* Data from Google Places API */ }]
    };

    return (
        <div>
            <div className="header">
                <button className="back-button"><FaArrowLeft /></button>
                <img className="profile-icon" src="path_to_image" alt="Profile" />
            </div>
            <div className="services-section">
                <h2>Services Near You</h2>
                <div className="horizontal-scroll">
                    {/*servicesData.locticians.map(service => <ServiceCard service={service} />)*/}
                </div>
                {/* Repeat for each service type */}
            </div>
            <NavBar />
        </div>
    );
};

export default HairCareServices;