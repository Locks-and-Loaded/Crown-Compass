import React, { useState, useEffect } from 'react';
import MapComponent from "../components/MapComponent";

const MapPage = () => {
    const [map, setMap] = useState(null);
    const [searchBox, setSearchBox] = useState(null);
    const [marker, setMarker] = useState(null);


        /* needs a function that can pull the user's location from Firebase.
         for now, it defaults to Tallahassee. */
        const initialCoordinates = {lat: 30.4382, lng: -84.2533};
        const zoomLevel = 10;
        const markers = [
            {coordinates: {lat: 30.4382, lng: -84.2533}, title: 'Marker 1'},
            // Add more markers as needed
        ];

        return (
            <div>
                <input id="search-input" type="text" placeholder="Search for stylists in your area"/>
                <MapComponent initialCoordinates={initialCoordinates}
                              zoomLevel={zoomLevel}
                              markers={markers}/>
                <div id="map" style={{height: '400px', width: '100%'}}></div>
            </div>
        );
}
export default MapPage;
