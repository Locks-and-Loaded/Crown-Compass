import React, { useState, useEffect } from 'react';
import MapComponent from "../MapComponent";

const MapPage = () => {
    const [map, setMap] = useState(null);
    const [searchBox, setSearchBox] = useState(null);
    const [marker, setMarker] = useState(null);

        const initialCoordinates = {lat: -3.745, lng: -38.523};
        const zoomLevel = 10;
        const markers = [
            {coordinates: {lat: -3.745, lng: -38.523}, title: 'Marker 1'},
            // Add more markers as needed
        ];

        return (
            <div>
                <input id="search-input" type="text" placeholder="Search for hairstylists"/>
                <MapComponent initialCoordinates={initialCoordinates}
                              zoomLevel={zoomLevel}
                              markers={markers}/>
                <div id="map" style={{height: '400px', width: '100%'}}></div>
            </div>
        );
}
export default MapPage;
