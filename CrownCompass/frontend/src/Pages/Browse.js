import React, { useState, useEffect, useContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';  // Update the import
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUserCircle, FaHeart } from 'react-icons/fa';
import NavBar from '../components/NavBar';
import HairCareServiceSection from '../components/HairCareServiceSection';

const Browse = () => {
    const navigate = useNavigate();
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                const db = getFirestore();
                const vendorsCollection = collection(db, 'vendors');
                const vendorsSnapshot = await getDocs(vendorsCollection);
                const vendorsData = vendorsSnapshot.docs.map(doc => doc.data());
                setVendors(vendorsData);
            } catch (error) {
                console.error('Error fetching vendors:', error);
            }
        };


        fetchVendors();
    }, []);

    const renderServiceCards = (services) => {
        return (
            <div style={{ display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <p>Name: {service.name}</p>
                        <p>Miles Away: {service.milesAway}</p>
                        <p>Description: {service.description}</p>
                        <button><FaHeart /></button>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            <div className="header">
                <button onClick={() => navigate(-1)}><FaArrowLeft /></button>
                <FaUserCircle size={32} className="profile-icon" />
            </div>

            {vendors.map((vendor, index) => (
                <HairCareServiceSection key={index} title={vendor.type}>
                    {renderServiceCards(vendor.services)}
                </HairCareServiceSection>
            ))}

            <NavBar />
        </div>
    );
};

export default Browse;
