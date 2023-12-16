import React, { useState, useEffect } from 'react';
import MapComponent from "../components/MapComponent";
import NavBar from '../components/NavBar'; // Make sure you have this component created

const MapPage = () => {
    const [map, setMap] = useState(null);
    const [searchBox, setSearchBox] = useState(null);
    const [marker, setMarker] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    //const [vendors, setVendors]

    useEffect(() => {
        // Fetch user's location using the Geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });
                },
                (error) => {
                    console.error('Error getting user location:', error.message);
                    // Handle errors or set a default location
                    setUserLocation({ lat: 30.4382, lng: -84.2533 });
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
            // Handle the case where geolocation is not supported
            // Set a default location
            setUserLocation({ lat: 30.4382, lng: -84.2533 });
        }
    }, []);

    const zoomLevel = 10;
    const markers = [
        { coordinates: userLocation, title: 'Your Location' },
        // Add more markers as needed
    ];

    return (
        <div>
            <MapComponent initialCoordinates={userLocation} zoomLevel={zoomLevel} markers={markers} />
            <div id="map" style={{ height: '400px', width: '100%' }}></div>

            <NavBar/>
        </div>
    );
}

export default MapPage;
