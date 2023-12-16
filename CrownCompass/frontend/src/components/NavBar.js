import React from 'react';
import { Link } from 'react-router-dom';
import { FaCompass, FaHome, FaSearch, FaHeart, FaUser } from 'react-icons/fa';

const NavBar = () => {
    return (
        <div className="bottom-nav-bar">
            <Link to="/map"><button><FaCompass /></button></Link>
            <Link to="/vendors"><button><FaHome /></button></Link>
            <Link to="/home"><button><FaSearch /></button></Link>
            <Link to="/likes"><button><FaHeart /></button></Link>
            <Link to="/profile"><button><FaUser /></button></Link>
        </div>
    );
};

export default NavBar;
