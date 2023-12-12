import React from 'react';
import { FaCompass, FaHome, FaSearch, FaHeart, FaUser } from 'react-icons/fa';

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

export default NavBar;