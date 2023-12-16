import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';
import NavBar from '../components/NavBar';
import HairCareServiceSection from '../components/HairCareServiceSection';

const HairCareServices = () => {
    const navigate = useNavigate();

    // Dummy data for each section
    const sections = [
        {
            title: "Locticians/DreadMasters",
            services: [
                { name: "Loctician1", milesAway: "2 miles", description: "Provides dread maintenance" },
                { name: "Loctician2", milesAway: "1 mile", description: "Specializes in starter locs" },
                // Add more services as needed
            ]
        },
        {
            title: "Barbers",
            services: [
                { name: "Barber1", milesAway: "3 miles", description: "Expert in fades and haircuts" },
                { name: "Barber2", milesAway: "0.5 miles", description: "Offers coloring services" },
                // Add more services as needed
            ]
        },
        {
            title: "Braiders",
            services: [
                { name: "Braider1", milesAway: "2.7 miles", description: "Specializes in braids and cornrows" },
                { name: "Braider2", milesAway: "1.8 miles", description: "Offers creative braiding styles" },
                // Add more services as needed
            ]
        },
        {
            title: "Stylist",
            services: [
                { name: "Stylist1", milesAway: "0.3 miles", description: "Experienced in hair styling" },
                { name: "Stylist2", milesAway: "1.5 miles", description: "Offers hair cutting and styling" },
                // Add more services as needed
            ]
        },
        {
            title: "Coloring",
            services: [
                { name: "Colorist1", milesAway: "2.2 miles", description: "Specializes in hair coloring" },
                { name: "Colorist2", milesAway: "1.2 miles", description: "Offers vibrant color options" },
                // Add more services as needed
            ]
        },
    ];
    // CSS styles for buttons
    const buttonStyle = {
        border: '1px solid #ddd',
        padding: '8px',
        margin: '4px',
        background: 'white',
        color: 'black',
        cursor: 'pointer',
    };

    const horizontalScrollStyle = {
        display: 'flex',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
    };

    const serviceCardStyle = {
        marginRight: '16px',
        padding: '12px',
        border: '1px solid #ddd',
    };

    return (
        <div>
            {/* Header with back arrow and image icon */}
            <div className="header">
                <button onClick={() => navigate(-1)} style={buttonStyle}><FaArrowLeft /></button>
                <FaUserCircle size={32} className="profile-icon" />
            </div>

            {/* Display sections with horizontal scrolling */}
            {sections.map((section, index) => (
                <HairCareServiceSection key={index} title={section.title}>
                    <div style={horizontalScrollStyle}>
                        {section.services.map((service, serviceIndex) => (
                            <div key={serviceIndex} style={serviceCardStyle} className="service-card">
                                <p>Name: {service.name}</p>
                                <p>Miles Away: {service.milesAway}</p>
                                <p>Description: {service.description}</p>
                            </div>
                        ))}
                    </div>
                </HairCareServiceSection>
            ))}

            {/* NavBar component at the bottom */}
            <NavBar />
        </div>
    );
}

export default HairCareServices;

/*import React, { useState } from 'react';
const VendorsPage = () => {
    const vendors = [
        { category: 'Locticians', name: 'JocTheLoc/tician', distance: '2 miles', services: 'Provides retwists, starter locs and more' },
        { category: 'Locticians', name: 'Beauty Sqaured', distance: '0.5 miles', services: 'Does Loc Coloring and styles' },
        { category: 'Barbers', name: "Jason's Shop", distance: '1.3 miles', services: 'Haircuts, Fades, & More' },
        { category: 'Barbers', name: 'Barber Shop', distance: '3.6 miles', services: 'Cuts, Color, and more' },
        { category: 'Braiders', name: 'StyledByJayda', distance: '0.4 miles', services: 'Braids, Sew-ins, Cornrows' },
        { category: 'Braiders', name: 'SlayedByMil', distance: '2.7 miles', services: 'Faux Locs, Braids, Stich-Fix' },
    ];

    const categories = ['Locticians', 'Barbers', 'Braiders'];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedVendor, setSelectedVendor] = useState(null);

    const filteredVendors = vendors.filter((vendor) => vendor.category === selectedCategory);

    const handleVendorClick = (vendor) => {
        setSelectedVendor(selectedVendor === vendor ? null : vendor);
    };

    const handleMakeAppointment = (vendor) => {
        // Implement appointment functionality here
        console.log(`Appointment made with ${vendor.name}`);
    };

    return (
        <div>
            <h2>Vendors</h2>
            <div className="category-buttons">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={selectedCategory === category ? 'active' : ''}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="vendor-list">
                {filteredVendors.map((vendor) => (
                    <div key={vendor.name} className={`vendor-card ${selectedVendor === vendor ? 'expanded' : ''}`}>
                        <button className="vendor-button" onClick={() => handleVendorClick(vendor)}>
                            <h3>{vendor.name}</h3>
                            <p>Distance: {vendor.distance}</p>
                            <p>Services: {vendor.services}</p>
                        </button>
                        {selectedVendor === vendor && (
                            <button className="appointment-button" onClick={() => handleMakeAppointment(vendor)}>
                                Make Appointment
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VendorsPage;*/